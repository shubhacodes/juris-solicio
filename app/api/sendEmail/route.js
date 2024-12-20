// app/api/sendEmail/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { writeFile } from "fs/promises";
import path from "path";
import fs from "fs/promises";

export async function POST(req) {
  try {
    // Ensure tmp directory exists
    const tmpDir = path.join(process.cwd(), "tmp");
    try {
      await fs.access(tmpDir);
    } catch {
      await fs.mkdir(tmpDir, { recursive: true });
    }

    // Get form data
    const formData = await req.formData();

    // Parse the JSON data
    const jsonData = JSON.parse(formData.get("data"));

    // Extract files
    const marksheet = formData.get("marksheet");
    const photo = formData.get("photo");

    // Handle files
    let marksheetPath, photoPath;

    if (marksheet && marksheet instanceof Blob) {
      const marksheetBuffer = Buffer.from(await marksheet.arrayBuffer());
      marksheetPath = path.join(
        tmpDir,
        `marksheet-${Date.now()}-${marksheet.name}`
      );
      await writeFile(marksheetPath, marksheetBuffer);
    }

    if (photo && photo instanceof Blob) {
      const photoBuffer = Buffer.from(await photo.arrayBuffer());
      photoPath = path.join(tmpDir, `photo-${Date.now()}-${photo.name}`);
      await writeFile(photoPath, photoBuffer);
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Destructure data for easier access
    const { personalDetails, academicDetails, additionalNotes } = jsonData;

    // Prepare email content
    const mailOptions = {
      from: personalDetails.email,
      to: process.env.GMAIL_USER,
      subject: `New Student Enquiry from ${personalDetails.firstName} ${personalDetails.lastName}`,
      text: `
Personal Details:
---------------
Name: ${personalDetails.firstName} ${personalDetails.lastName}
Email: ${personalDetails.email}
Student Mobile: ${personalDetails.mobile}
Parent's Mobile: ${personalDetails.parentsMobile}

Academic Details:
---------------
Class: ${academicDetails.class}
School: ${academicDetails.school}
Subjects Opted: ${academicDetails.subjectsOpted}

Additional Notes:
---------------
${additionalNotes || "No additional notes provided."}

Supporting Documents:
------------------
${marksheet ? "✓ Marksheet attached" : "✗ No marksheet attached"}
${photo ? "✓ Student photograph attached" : "✗ No photograph attached"}
      `,
      attachments: [
        ...(marksheetPath
          ? [
              {
                filename: marksheet.name,
                path: marksheetPath,
              },
            ]
          : []),
        ...(photoPath
          ? [
              {
                filename: photo.name,
                path: photoPath,
              },
            ]
          : []),
      ],
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Clean up temporary files
    try {
      if (marksheetPath) await fs.unlink(marksheetPath);
      if (photoPath) await fs.unlink(photoPath);
    } catch (error) {
      console.error("Error cleaning up temporary files:", error);
    }

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error processing form submission:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error processing form submission",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
