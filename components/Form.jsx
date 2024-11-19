"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  User,
  MailIcon,
  Phone,
  Calendar,
  ArrowRightIcon,
  MessageSquare,
  Linkedin,
} from "lucide-react";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Details
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    mobile: "",
    alternatePhone: "",
    // Professional Details
    experience: "",
    currentCompany: "",
    designation: "",
    ctc: "",
    practiceArea: "",
    college: "",
    otherCollege: "",
    degree: "",
    gradYear: "",
    // Additional Qualifications
    llm: "",
    preferredLocation: "",
    // Resume & Photo
    resume: null,
    photo: null,
    linkedIn: "",
    // Message
    otherDetails: "",
  });

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [id]: files[0] });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();

      // Append all form fields
      Object.keys(formData).forEach((key) => {
        if (formData[key] !== null) {
          formDataToSend.append(key, formData[key]);
        }
      });

      const response = await fetch("/api/sendEmail", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        alert("Form submitted successfully!");
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          dob: "",
          email: "",
          mobile: "",
          alternatePhone: "",
          experience: "",
          currentCompany: "",
          designation: "",
          ctc: "",
          practiceArea: "",
          college: "",
          otherCollege: "",
          degree: "",
          gradYear: "",
          llm: "",
          preferredLocation: "",
          resume: null,
          photo: null,
          linkedIn: "",
          otherDetails: "",
        });
        // Reset file inputs
        const fileInputs = document.querySelectorAll('input[type="file"]');
        fileInputs.forEach((input) => (input.value = ""));
      } else {
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-y-8" onSubmit={handleSubmit}>
      {/* Personal Details */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Personal Details</h3>
        <div className="grid gap-4">
          <Input
            id="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <Input
            id="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <Input
            id="dob"
            type="date"
            placeholder="Date of Birth"
            value={formData.dob}
            onChange={handleChange}
          />
          <Input
            id="email"
            type="email"
            placeholder="E-Mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            id="mobile"
            type="tel"
            placeholder="Mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
          <Input
            id="alternatePhone"
            type="tel"
            placeholder="Alternate Phone Number"
            value={formData.alternatePhone}
            onChange={handleChange}
          />
        </div>
      </section>

      {/* Professional Details */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Professional Details</h3>
        <div className="grid gap-4">
          <Input
            id="experience"
            placeholder="Years of Professional Experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />
          <Input
            id="currentCompany"
            placeholder="Current Company"
            value={formData.currentCompany}
            onChange={handleChange}
          />
          <Input
            id="designation"
            placeholder="Current Designation"
            value={formData.designation}
            onChange={handleChange}
          />
          <Input
            id="ctc"
            placeholder="Current CTC"
            value={formData.ctc}
            onChange={handleChange}
          />
          <Input
            id="practiceArea"
            placeholder="Practice Area"
            value={formData.practiceArea}
            onChange={handleChange}
          />
          <Input
            id="college"
            placeholder="College"
            value={formData.college}
            onChange={handleChange}
            required
          />
          <Input
            id="otherCollege"
            placeholder="College Name (Other)"
            value={formData.otherCollege}
            onChange={handleChange}
          />
          <Input
            id="degree"
            placeholder="Degree"
            value={formData.degree}
            onChange={handleChange}
          />
          <Input
            id="gradYear"
            placeholder="Graduation Year"
            value={formData.gradYear}
            onChange={handleChange}
            required
          />
        </div>
      </section>

      {/* Additional Qualifications */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Additional Qualifications</h3>
        <div className="grid gap-4">
          <Input
            id="llm"
            placeholder="LLM (if applicable)"
            value={formData.llm}
            onChange={handleChange}
          />
          <Input
            id="preferredLocation"
            placeholder="Preferred Location"
            value={formData.preferredLocation}
            onChange={handleChange}
          />
        </div>
      </section>

      {/* Resume & Photo */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Resume & Photo</h3>
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="resume">Resume/CV (PDF)</Label>
            <Input
              id="resume"
              type="file"
              accept=".pdf"
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="photo">Photograph</Label>
            <Input
              id="photo"
              type="file"
              accept="image/*"
              onChange={handleChange}
            />
          </div>
          <Input
            id="linkedIn"
            type="url"
            placeholder="LinkedIn Profile URL"
            value={formData.linkedIn}
            onChange={handleChange}
            required
          />
        </div>
      </section>

      {/* Message */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Message</h3>
        <Textarea
          id="otherDetails"
          placeholder="Any other details"
          value={formData.otherDetails}
          onChange={handleChange}
          className="min-h-[100px]"
        />
      </section>

      {/* Submit Button */}
      <Button
        type="submit"
        className="flex items-center gap-x-2"
        disabled={loading}
      >
        {loading ? (
          "Submitting..."
        ) : (
          <>
            Submit
            <ArrowRightIcon size={20} />
          </>
        )}
      </Button>
    </form>
  );
};

export default Form;
