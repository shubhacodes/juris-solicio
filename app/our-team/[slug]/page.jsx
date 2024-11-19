import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Linkedin, Phone, Mail } from "lucide-react";

const foundersData = {
  "pratik-ahuja": {
    name: "Pratik Ahuja",
    location: "Delhi NCR",
    image: "/team/pratik.jpeg",
    contact: {
      phone: "+91 98765 43210",
      email: "pratik@jurissolicio.in",
      linkedin: "https://www.linkedin.com/in/pratik-ahuja-4b290b244/",
    },
    education: [
      "LL.B., Faculty of Law, University of Delhi (2019)",
      "B.Com (Hons.), Sri Ram College of Commerce, University of Delhi (2016)",
    ],
    overview:
      "Pratik is a seasoned corporate lawyer with over 5 years of experience in mergers & acquisitions and corporate restructuring. He specializes in cross-border transactions and has advised numerous multinational corporations on their Indian operations. His expertise spans across various sectors including technology, e-commerce, and manufacturing.",
  },
  "person-2": {
    name: "Charu Sharma",
    location: "Delhi NCR",
    image: "/team/charu.jpeg",
    contact: {
      email: "charu.sharma@example.com",
      linkedin: "https://www.linkedin.com/in/charu-modi-b59303270/",
    },
    education: ["LL.M. (Gold Medalist)", "LL.B."],
    overview:
      "Charu, a Gold Medalist in her master's degree, is a distinguished lawyer with over a decade of extensive experience representing clients in various capacities before the Hon'ble Supreme Court of India, High Courts, District Courts, and other legal forums. Her exceptional skills and dedication have earned her recognition as a panel counsel for the State of Madhya Pradesh and Bank of Baroda, where she advocates on behalf of these esteemed entities in significant legal matters.",
  },
  "person-3": {
    name: "Pranav Sharma",
    location: "Delhi NCR",
    image: "/team/pranav.jpeg",
    contact: {
      phone: "+91 98765 43212",
      email: "pranav@jurissolicio.in",
      linkedin: "https://linkedin.com/in/pranav-sharma",
    },
    education: [
      "BBA LL.B. (with specialization in corporate law), UPES Dehradun",
    ],
    overview:
      "Pranav Sharma has established a comprehensive legal practice encompassing Civil, Criminal, Matrimonial, Arbitration, Writ, Contempt and Civil (Original Jurisdiction), and Consumer Disputes.",
  },
};

export default async function FounderPage({ params }) {
  if (!params.slug || !foundersData[params.slug]) {
    notFound();
  }

  const founder = foundersData[params.slug];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/our-team"
            className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
          >
            ← Back to Team
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
            {/* Profile Image */}
            <div className="relative aspect-square lg:aspect-auto lg:h-[400px] mx-auto lg:mx-0">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
            {/* Info Section */}
            <div className="lg:col-span-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                {founder.name}
              </h1>
              <p className="text-gray-600 mb-6">{founder.location}</p>
              {/* Education and Contact - Responsive Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {/* Education Section */}
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold mb-4">
                    Education
                  </h2>
                  <ul className="space-y-2 sm:space-y-4">
                    {founder.education.map((edu, index) => (
                      <li
                        key={index}
                        className="text-gray-700 text-sm sm:text-base"
                      >
                        • {edu}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Contact Section */}
                <div className="space-y-4">
                  {founder.contact.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                      <span className="text-sm sm:text-base">
                        {founder.contact.phone}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                    <a
                      href={`mailto:${founder.contact.email}`}
                      className="text-sm sm:text-base text-blue-600 hover:text-blue-800"
                    >
                      {founder.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                    <a
                      href={founder.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-blue-600 hover:text-blue-800"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Overview Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12 text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {founder.overview}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
