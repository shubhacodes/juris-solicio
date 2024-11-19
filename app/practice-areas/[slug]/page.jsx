"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { practiceAreas, getPracticeAreaBySlug } from "@/app/data/practiceAreas";

export default function PracticeAreaPage({ params }) {
  const practiceArea = getPracticeAreaBySlug(params.slug);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleNavbar = () => setIsOpen(!isOpen);

  const customPages = [
    practiceAreas.slice(0, 11), // First 11 practice areas
    practiceAreas.slice(11), // Remaining practice areas
  ];

  const totalPages = customPages.length;

  const getCurrentPageItems = () => customPages[currentPage - 1];

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  if (!practiceArea) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Practice Area Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The practice area you're looking for doesn't exist.
          </p>
          <Link
            href="/"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      {/* Sliding Navbar */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-2 right-2 z-50" // Adjusted positioning
        onClick={toggleNavbar}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        <span className="sr-only">Toggle navigation</span>
      </Button>

      <Card
        className={`fixed top-0 right-0 h-full w-64 max-w-[80vw] transform transition-transform duration-300 ease-in-out bg-white ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <CardContent className="p-4 h-full flex flex-col">
          {/* Navbar Heading */}
          <h2 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
            Practice Areas
          </h2>
          <nav className="flex-grow overflow-y-auto">
            <ul className="space-y-2">
              {getCurrentPageItems().map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/practice-areas/${area.slug}`}
                    className="block py-2 px-4 text-sm hover:bg-gray-100 rounded transition-colors duration-200"
                  >
                    {area.icon} {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous page</span>
            </Button>
            <span className="text-sm text-gray-500">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next page</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-gray-500">
            <li>
              <Link
                href="/"
                className="hover:text-black transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>→</li>
            <li>
              <Link
                href="/practice-areas"
                className="hover:text-black transition-colors duration-200"
              >
                Practice Areas
              </Link>
            </li>
            <li>→</li>
            <li className="text-black">{practiceArea.name}</li>
          </ol>
        </nav>

        {/* Content Section */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-center mb-6">
            <span className="text-4xl mr-4">{practiceArea.icon}</span>
            <h1 className="text-4xl font-bold text-gray-900">
              {practiceArea.name}
            </h1>
          </div>

          {/* Quote Section */}
          {practiceArea.quote && (
            <blockquote className="border-l-4 border-gray-300 pl-4 my-8">
              <p className="text-lg italic underline text-gray-600 mb-2">
                "{practiceArea.quote}"
              </p>
              <footer className="text-gray-500">
                - {practiceArea.quoteAuthor}
              </footer>
            </blockquote>
          )}

          {/* Brief Description */}
          <div className="prose max-w-none mb-8">
            <p className="text-gray-600 text-lg leading-relaxed">
              {practiceArea.description}
            </p>
          </div>

          {/* Detailed Description */}
          <div className="prose max-w-none">
            {practiceArea.detailedDescription?.map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-600">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
