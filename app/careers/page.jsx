"use client";

import Form from "@/components/Form";

const Careers = () => {
  return (
    <section className="py-12 px-4 min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl">
        {/* Header Content */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">Build Your Career With Us</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        {/* Main Content */}
        <div className="grid gap-12 mb-16">
          {/* Our Culture Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-primary">
              Excellence in Legal Practice
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At Juris Solicio, we're dedicated to nurturing exceptional legal
              talent. Our reputation for excellence stems from our commitment to
              maintaining the highest standards in firm management and legal
              practice. We've carefully crafted our policies and procedures to
              align with our core values, mission, and long-term vision.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="p-6 bg-card rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Holistic Development</h3>
                <p className="text-sm text-muted-foreground">
                  We evaluate candidates beyond traditional metrics, seeking
                  individuals who demonstrate intellectual curiosity and align
                  with our collaborative culture.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Professional Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  Our rigorous training program transforms promising lawyers
                  into industry leaders through mentorship and practical
                  experience.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Innovation & Integrity</h3>
                <p className="text-sm text-muted-foreground">
                  We prioritize creative problem-solving while maintaining the
                  highest ethical standards in legal practice.
                </p>
              </div>
            </div>
          </div>

          {/* Opportunities Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">
                Career Opportunities
              </h2>
              <p className="text-muted-foreground">
                We're seeking exceptional talent across our diverse practice
                areas. Our selection process considers technical expertise,
                analytical capabilities, and communication skills. We value
                professionals who demonstrate leadership potential and share our
                commitment to client service.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">
                Student Programs
              </h2>
              <p className="text-muted-foreground">
                Our internship program offers law students and recent graduates
                invaluable exposure to real-world legal practice. We provide
                structured learning opportunities throughout the year, allowing
                students to experience various aspects of our practice areas
                while working alongside industry experts.
              </p>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-card rounded-lg shadow-sm p-6 md:p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-3">Begin Your Journey</h2>
            <p className="text-muted-foreground">
              Take the first step towards a rewarding career at Juris Solicio.
              Complete the application form below, and our team will carefully
              review your credentials.
            </p>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Careers;
