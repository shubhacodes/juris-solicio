"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { practiceAreas } from "@/app/data/practiceAreas";

const PracticeAreas = () => {
  const router = useRouter();

  const handleAreaClick = (slug) => {
    router.push(`/practice-areas/${slug}`);
  };

  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-black mb-4">Practice Areas</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            With years of experience combined with a team of highly skilled
            professionals, we cater to each client's needs and goals,
            specializing in various disciplines.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              onClick={() => handleAreaClick(area.slug)}
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-black transition-all duration-200 cursor-pointer group"
            >
              <span className="text-2xl mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                {area.icon}
              </span>
              <span className="text-gray-900 group-hover:text-black transition-colors duration-200">
                {area.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
