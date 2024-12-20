"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Phone, Mail, Loader2 } from "lucide-react";
import ShineBorder from "@/components/ui/shine-border";
import Image from "next/image";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    school: "",
    standard: "",
    subjects: [],
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const GRADES = Array.from({ length: 6 }, (_, i) => i + 7); // Grades 7-12

  const [subjects, setSubjects] = useState([
    { id: "maths", label: "Mathematics" },
    { id: "physics", label: "Physics" },
    { id: "chemistry", label: "Chemistry" },
    { id: "biology", label: "Biology" },
  ]);

  const handleGradeChange = (value) => {
    setFormState((prev) => ({ ...prev, standard: value }));

    if (value >= 7 && value <= 10) {
      setSubjects([
        { id: "maths", label: "Mathematics" },
        { id: "science", label: "Science" },
      ]);
    } else if (value >= 11 && value <= 12) {
      setSubjects([{ id: "maths", label: "Mathematics" }]);
    } else {
      setSubjects([]);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formState.firstName) newErrors.firstName = "First name is required";
    if (!formState.lastName) newErrors.lastName = "Last name is required";
    if (!formState.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formState.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s-]{10,}$/.test(formState.phone)) {
      newErrors.phone = "Invalid phone format";
    }
    if (!formState.standard) newErrors.standard = "Grade is required";
    if (!formState.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      // Reset form after successful submission
      setFormState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        school: "",
        standard: "",
        subjects: [],
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[url('/grid-pattern.svg')] bg-white">
      <div className="relative w-full">
        <Image
          src="/contact-pic.jpeg"
          alt="Contact Banner"
          width={1920}
          height={200}
          className="w-full h-32 md:h-40 lg:h-48 object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl -mt-16 relative z-10">
        <div className="py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#423e58] mb-4">
            Got questions? We got answers!
          </h1>
          <p className="text-[#423e58]/80 text-lg max-w-2xl mx-auto">
            Contact us to learn more and take the first step toward becoming a
            classroom superstar!
          </p>
        </div>

        <ShineBorder className="rounded-xl mx-auto mb-16">
          <div className="grid lg:grid-cols-[2fr,1fr] gap-12 bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitStatus === "success" && (
                <div className="rounded-lg bg-green-50 border border-green-200 p-4">
                  <p className="text-green-800">
                    Thank you for your message! We'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="rounded-lg bg-red-50 border border-red-200 p-4">
                  <p className="text-red-800">
                    There was an error sending your message. Please try again.
                  </p>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-[#423e58]">
                    First name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    value={formState.firstName}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        firstName: e.target.value,
                      }))
                    }
                    className={`border-[#423e58]/20 ${
                      errors.firstName ? "border-red-500" : ""
                    }`}
                    placeholder="First name"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">{errors.firstName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-[#423e58]">
                    Last name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="lastName"
                    value={formState.lastName}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        lastName: e.target.value,
                      }))
                    }
                    className={`border-[#423e58]/20 ${
                      errors.lastName ? "border-red-500" : ""
                    }`}
                    placeholder="Last name"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#423e58]">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className={`border-[#423e58]/20 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-[#423e58]">
                  Parent's phone number <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="tel"
                  id="phone"
                  value={formState.phone}
                  onChange={(e) =>
                    setFormState((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  className={`border-[#423e58]/20 ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                  placeholder="+1 (555) 000-0000"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="school" className="text-[#423e58]">
                    School
                  </Label>
                  <Input
                    id="school"
                    value={formState.school}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        school: e.target.value,
                      }))
                    }
                    className="border-[#423e58]/20"
                    placeholder="Your school name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="standard" className="text-[#423e58]">
                    Current Grade <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="number"
                    id="standard"
                    value={formState.standard}
                    onChange={(e) => handleGradeChange(e.target.value)}
                    className={`border-[#423e58]/20 ${
                      errors.standard ? "border-red-500" : ""
                    }`}
                    placeholder="e.g., 10"
                  />
                  {errors.standard && (
                    <p className="text-red-500 text-sm">{errors.standard}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-[#423e58]">Subjects</Label>
                <div className="grid grid-cols-2 gap-4">
                  {subjects.map((subject) => (
                    <div
                      key={subject.id}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={subject.id}
                        checked={formState.subjects.includes(subject.id)}
                        onCheckedChange={(checked) => {
                          const newSubjects = checked
                            ? [...formState.subjects, subject.id]
                            : formState.subjects.filter(
                                (id) => id !== subject.id
                              );
                          setFormState((prev) => ({
                            ...prev,
                            subjects: newSubjects,
                          }));
                        }}
                        className="border-[#423e58]/20"
                      />
                      <Label htmlFor={subject.id} className="text-[#423e58]">
                        {subject.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#423e58]">
                  Message <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  className={`min-h-[100px] border-[#423e58]/20 ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  placeholder="Leave us a message..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#322f44] hover:bg-[#423e58] text-white text-lg font-medium py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-200 ease-in-out disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>

            <div className="space-y-8">
              {[
                {
                  icon: Mail,
                  title: "Chat with us",
                  content: "Send us an email",
                  href: "mailto:contact@example.com",
                },
                {
                  icon: Phone,
                  title: "Call us",
                  content: "+(91)1234567899",
                  href: "tel:+(91)1234567899",
                },
                {
                  icon: MapPin,
                  title: "Visit us",
                  content: "Noida, Uttar Pradesh, India",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-[#423e58]/5 transition-colors duration-200"
                >
                  <item.icon className="h-6 w-6 text-[#423e58] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-[#423e58]">
                      {item.title}
                    </h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[#423e58]/80 hover:text-[#423e58] transition-colors duration-200"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-[#423e58]/80">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ShineBorder>
      </div>
    </div>
  );
}
