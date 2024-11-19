import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white pb-16">
      <div className="w-full bg-white px-6 lg:px-16 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          About Juris Solicio
        </h1>

        <p className="text-gray-700 leading-relaxed mb-8">
          Juris Solicio (JS) is a prominent law firm based in Delhi,
          specializing in providing legal representation to clients across
          various courts. It is a full-service law firm offering eLegal Services
          to a range of clients, from large corporations to new and small
          businesses, as well as individual clients.
        </p>

        <p className="text-gray-700 leading-relaxed mb-8">
          The firm is fully equipped to handle legal cases ranging from
          Tribunals and Trial Courts to the Hon'ble Supreme Court of India. JS
          operates from its various offices located across Delhi and has a
          presence in major cities such as New Delhi, Mumbai, Jaipur, Gautam
          Budh Nagar, Ahmedabad, Prayagraj, Mathura, Faridabad, Gwalior, and
          Bangalore. As a full-service law firm, JS boasts a team of highly
          qualified professionals who are well-versed in various aspects of the
          law.
        </p>

        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          What Sets Us Apart:
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-8">
          <li>Single Point of Contact</li>
          <li>Excellent Turnaround Time</li>
          <li>Research and Innovation</li>
        </ul>

        <p className="text-gray-700 leading-relaxed mb-8">
          With its vast experience and expertise, JS ensures that its clients
          receive top-notch legal representation tailored to their individual
          needs. The quality and professionalism displayed by the firm have been
          reciprocated by its clients, many of whom have remained associated
          with JS for many years.
        </p>

        <p className="text-gray-700 leading-relaxed">
          The firm's commitment to excellence and dedication to its clients have
          earned it a reputation as one of the leading law firms.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
