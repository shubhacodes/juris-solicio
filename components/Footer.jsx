import { Home, Mail, Phone, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="text-white font-mono"
      style={{ backgroundColor: "#322f44" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Home className="w-5 h-5 mt-1 flex-shrink-0" />
              <p>
                D-9, Vyapar Marg, Block D, Noida Sector 3, Noida, Uttar Pradesh
                201301
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 flex-shrink-0" />
              <a
                href="mailto:turningpoint@gmail.com"
                className="hover:text-gray-200"
              >
                turningpoint@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <p>+91 9911371625, +91 97606 83199, +91 97119 82673</p>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              USEFUL LINKS
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/our-firm" className="hover:text-gray-200">
                  Our Institute
                </Link>
              </li>

              <li>
                <Link href="/our-team" className="hover:text-gray-200">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/announcements" className="hover:text-gray-200">
                  Announcements
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-gray-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Find us at!
            </h3>
            <div className="space-y-4">
              <div>
                <p>C4/194 Sector-36, Noida</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-gray-200">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/company/juris-solicio-js/about/?viewAsMember=true"
              className="hover:text-gray-200"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
