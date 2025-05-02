"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a variety of healthcare services including general checkups, specialist consultations, telemedicine appointments, and health plan management.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "You can book an appointment by signing into your account, selecting a doctor, and choosing an available time slot from their schedule.",
  },
  {
    question: "Do you accept insurance plans?",
    answer:
      "Yes, we accept a wide range of insurance plans. You can check the accepted plans on your profile page or during the appointment booking process.",
  },
  {
    question: "Is my medical data secure?",
    answer:
      "Absolutely. We follow industry-standard practices to ensure your personal and medical information is encrypted and securely stored.",
  },
];

export default function FAQSection() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-12">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-teal-700">FAQ</h2>
        <p className="text-gray-600 mt-2 text-base">
          Frequently Asked Questions to Help You Get Started
        </p>
      </div>

      {/* Desktop: Two-Column */}
      <div className="hidden md:grid max-w-7xl w-full bg-white shadow-md rounded-xl overflow-hidden grid-cols-2 border border-gray-200">
        {/* Left: Questions */}
        <div className="bg-gray-100 p-6 space-y-4 border-r border-gray-200">
          {faqs.map((faq, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`w-full text-left p-4 rounded-md border transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-white border-teal-500 text-teal-700 font-semibold shadow-sm"
                  : "bg-gray-50 hover:bg-white border-gray-300 text-gray-700"
              }`}
            >
              {faq.question}
            </button>
          ))}
        </div>

        {/* Right: Answer */}
        <div className="p-8 flex flex-col justify-center">
          {selectedIndex !== null && (
            <>
              <h3 className="text-2xl font-bold text-teal-700 mb-4">
                {faqs[selectedIndex].question}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {faqs[selectedIndex].answer}
              </p>
            </>
          )}
        </div>
      </div>

      {/* Mobile/Tablet: Accordion */}
      <div className="md:hidden w-full max-w-3xl mt-6 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() =>
                setSelectedIndex(selectedIndex === index ? null : index)
              }
              className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 font-medium text-teal-700"
            >
              {faq.question}
            </button>
            {selectedIndex === index && (
              <div className="px-4 py-3 bg-white text-gray-700 text-sm leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
