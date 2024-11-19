// app/contact/page.jsx
"use client";

import FormSecond from "@/components/formSecond";

const Contact = () => {
  return (
    <section className="py-12 px-4 min-h-screen bg-background">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-muted-foreground">
            If you have any queries, feel free to reach out to us!
          </p>
        </div>
        <div className="bg-card rounded-lg shadow-sm p-6 md:p-8">
          <FormSecond />
        </div>
      </div>
    </section>
  );
};

export default Contact;
