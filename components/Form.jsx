"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { ArrowRightIcon } from "lucide-react";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Details
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    parentsMobile: "",

    // Academic Details
    class: "",
    school: "",
    subjectsOpted: "",

    // Supporting Documents
    marksheet: null,
    photo: null,

    // Additional Notes
    additionalNotes: "",
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

      // Structure the data in sections as requested
      const emailStructure = {
        personalDetails: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          mobile: formData.mobile,
          parentsMobile: formData.parentsMobile,
        },
        academicDetails: {
          class: formData.class,
          school: formData.school,
          subjectsOpted: formData.subjectsOpted,
        },
        additionalNotes: formData.additionalNotes,
      };

      // Append the structured data
      formDataToSend.append("data", JSON.stringify(emailStructure));

      // Append files separately
      if (formData.marksheet) {
        formDataToSend.append("marksheet", formData.marksheet);
      }
      if (formData.photo) {
        formDataToSend.append("photo", formData.photo);
      }

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
          email: "",
          mobile: "",
          parentsMobile: "",
          class: "",
          school: "",
          subjectsOpted: "",
          marksheet: null,
          photo: null,
          additionalNotes: "",
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
            placeholder="Student Mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
          <Input
            id="parentsMobile"
            type="tel"
            placeholder="Parent's Mobile"
            value={formData.parentsMobile}
            onChange={handleChange}
            required
          />
        </div>
      </section>

      {/* Academic Details */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Academic Details</h3>
        <div className="grid gap-4">
          <Input
            id="class"
            placeholder="Class/Standard"
            value={formData.class}
            onChange={handleChange}
            required
          />
          <Input
            id="school"
            placeholder="School Name"
            value={formData.school}
            onChange={handleChange}
            required
          />
          <Input
            id="subjectsOpted"
            placeholder="Subjects Opted"
            value={formData.subjectsOpted}
            onChange={handleChange}
            required
          />
        </div>
      </section>

      {/* Supporting Documents */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Supporting Documents</h3>
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="marksheet">Marksheet (PDF)</Label>
            <Input
              id="marksheet"
              type="file"
              accept=".pdf"
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="photo">Student Photograph</Label>
            <Input
              id="photo"
              type="file"
              accept="image/*"
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </section>

      {/* Additional Notes */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Additional Notes</h3>
        <Textarea
          id="additionalNotes"
          placeholder="Any additional information"
          value={formData.additionalNotes}
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
