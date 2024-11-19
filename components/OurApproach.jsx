import React from "react";

export default function OurApproach() {
  return (
    <section className="w-full bg-white py-6 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Expert Legal Advice for Your Peace of Mind
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="mt-2 text-base text-gray-500">
                At Juris Solicio-Advocates and Consultants, our mission is to
                provide affordable and accessible legal services to our clients,
                while maintaining the highest standards of professionalism and
                ethics.
              </p>
            </div>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                Our Approach
              </h3>
              <p className="mt-2 text-base text-gray-500">
                We understand that each client's needs and circumstances are
                unique. That's why we take a client-centered approach to each
                case, tailoring our services to meet our clients' individual
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
