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

    // Extract files
    const resume = formData.get("resume");
    const photo = formData.get("photo");

    // Handle files
    let resumePath, photoPath;

    if (resume && resume instanceof Blob) {
      const resumeBuffer = Buffer.from(await resume.arrayBuffer());
      resumePath = path.join(tmpDir, `resume-${Date.now()}-${resume.name}`);
      await writeFile(resumePath, resumeBuffer);
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

    // Prepare email content
    const mailOptions = {
      from: formData.get("email"),
      to: process.env.GMAIL_USER,
      subject: `New Job Application from ${formData.get(
        "firstName"
      )} ${formData.get("lastName")}`,
      text: `
Personal Details:
---------------
Name: ${formData.get("firstName")} ${formData.get("lastName")}
Date of Birth: ${formData.get("dob")}
Email: ${formData.get("email")}
Mobile: ${formData.get("mobile")}
Alternate Phone: ${formData.get("alternatePhone")}

Professional Details:
------------------
Experience: ${formData.get("experience")} years
Current Company: ${formData.get("currentCompany")}
Designation: ${formData.get("designation")}
CTC: ${formData.get("ctc")}
Practice Area: ${formData.get("practiceArea")}
College: ${formData.get("college")}
Other College: ${formData.get("otherCollege")}
Degree: ${formData.get("degree")}
Graduation Year: ${formData.get("gradYear")}

Additional Qualifications:
----------------------
LLM: ${formData.get("llm")}
Preferred Location: ${formData.get("preferredLocation")}

LinkedIn Profile: ${formData.get("linkedIn")}

Additional Message:
----------------
${formData.get("otherDetails")}
      `,
      attachments: [
        ...(resumePath
          ? [
              {
                filename: resume.name,
                path: resumePath,
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
      if (resumePath) await fs.unlink(resumePath);
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
