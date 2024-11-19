// app/components/Disclaimer.jsx
"use client";
import { useState, useEffect } from "react";

const Disclaimer = ({ setIsDisclaimerAccepted }) => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    setShowDisclaimer(true);
  }, []);

  const handleAgree = () => {
    setShowDisclaimer(false);
    setIsDisclaimerAccepted(true);
    localStorage.setItem("disclaimerAccepted", new Date().toISOString());
  };

  const handleDisagree = () => {
    window.location.href = "https://www.google.com";
  };

  if (!showDisclaimer) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-[600px] p-8 shadow-xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          DISCLAIMER
        </h2>

        <div className="space-y-4 text-gray-600 text-sm">
          <p>
            As per Bar Council of India rules, law firms cannot solicit work or
            advertise. By clicking "I Agree", you acknowledge:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              No advertisement or solicitation has been made by Juris Solicio to
              offer legal services through this website.
            </li>

            <li>
              All website content is property of Juris Solicio and requires
              written consent for use.
            </li>

            <li>
              Information is provided solely at user's request for informational
              purposes.
            </li>

            <li>
              Accessing this website does not create a lawyer-client
              relationship.
            </li>
          </ul>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={handleAgree}
            className="px-6 py-2 bg-white text-gray-800 rounded-full border-2 border-gray-300 hover:border-gray-400 transition-colors duration-200 text-sm"
          >
            AGREE
          </button>
          <button
            onClick={handleDisagree}
            className="px-6 py-2 bg-red-800 text-white rounded-full hover:bg-red-900 transition-colors duration-200 text-sm"
          >
            DISAGREE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
