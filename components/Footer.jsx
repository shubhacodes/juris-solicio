import {
  Home,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Home className="w-5 h-5 mt-1 flex-shrink-0" />
              <p>
                {" "}
                D-9, Vyapar Marg, Block D, Noida Sector 3, Noida, Uttar &
                Pradesh 201301
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 flex-shrink-0" />
              <a
                href="mailto:jurissolicio@gmail.com"
                className="hover:text-white"
              >
                jurissolicio@gmail.com
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
                <Link href="/our-firm" className="hover:text-white">
                  Our Firm
                </Link>
              </li>
              <li>
                <Link href="/practice-areas" className="hover:text-white">
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link href="/our-team" className="hover:text-white">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:text-white">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Office Locations */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              OUR OFFICES
            </h3>
            <div className="space-y-4">
              <div>
                <p>
                  D-9, Vyapar Marg, Block D, Noida Sector 3, Noida, Uttar &
                  Pradesh 201301
                </p>
                <p> Chamber no 666, Saket Courts Complex, New Delhi-110017</p>
                <p>8F 609, F 619, Karkardooma Courts, New Delhi-110092</p>
              </div>
            </div>{" "}
            {/* Closing div restored here */}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/company/juris-solicio-js/about/?viewAsMember=true"
              className="hover:text-white"
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
