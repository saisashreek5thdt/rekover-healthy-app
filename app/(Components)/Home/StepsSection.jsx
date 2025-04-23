"use client";
import React, { useState } from "react";
import {
  FaUserMd,
  FaComments,
  FaCalendarAlt,
  FaThumbsUp,
} from "react-icons/fa";
const steps = [
  {
    title: "Check Doctor Profile",
    icon: <FaUserMd size={36} />,
    desc: [
      "Navigating Health Together",
      "Your Trusted Medical Resource.",
      "Medicine Meets Technology",
      "Your Online Health Hub",
    ],
  },
  {
    title: "Request Consultation",
    icon: <FaComments size={36} />,
    desc: [
      "Navigating Health Together",
      "Your Trusted Medical Resource.",
      "Medicine Meets Technology",
      "Your Online Health Hub",
    ],
    active: true,
  },
  {
    title: "Schedule Meeting",
    icon: <FaCalendarAlt size={36} />,
    desc: [
      "Navigating Health Together",
      "Your Trusted Medical Resource.",
      "Medicine Meets Technology",
      "Your Online Health Hub",
    ],
  },
  {
    title: "Get Your Solution",
    icon: <FaThumbsUp size={36} />,
    desc: [
      "Navigating Health Together",
      "Your Trusted Medical Resource.",
      "Medicine Meets Technology",
      "Your Online Health Hub",
    ],
  },
];

export default function StepsSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="max-w-7xl w-full">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              4 Easy Steps And Get Your Solution
            </h2>
            <p className="text-gray-600 mt-2">
              Navigating Health Together: Your Trusted Medical Resource.
              Medicine Meets Technology Your Online Health Hub
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, idx) => {
              const isActive = idx === activeIndex;

              return (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 w-full focus:outline-none
                  ${
                    isActive
                      ? "bg-teal-500 text-white shadow-md"
                      : "text-teal-800 hover:bg-teal-100"
                  }`}
                >
                  <div className="mb-4">{step.icon}</div>
                  <h3
                    className={`font-semibold text-lg mb-2 ${
                      isActive ? "text-white" : "text-teal-800"
                    }`}
                  >
                    {step.title}
                  </h3>
                  {step.desc.map((line, i) => (
                    <p
                      key={i}
                      className={`text-sm ${
                        isActive ? "text-white" : "text-gray-600"
                      }`}
                    >
                      {line}
                    </p>
                  ))}
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
