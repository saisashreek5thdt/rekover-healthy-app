"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaUserMd, FaComments, FaCalendarAlt, FaThumbsUp } from "react-icons/fa";

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

function StepCard({ step, index, activeIndex, setActiveIndex }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const isActive = index === activeIndex;

  return (
    <motion.button
      ref={ref}
      onClick={() => setActiveIndex(index)}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 w-full focus:outline-none ${
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
      <div className="space-y-1">
        {step.desc.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2 + i * 0.05 }}
            className={`text-sm ${isActive ? "text-white" : "text-gray-600"}`}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </motion.button>
  );
}

export default function StepsSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);
  const isContainerInView = useInView(containerRef, { once: true });

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-7xl w-full" ref={containerRef}>
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 40 }}
          animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            4 Easy Steps And Get Your Solution
          </h2>
          <p className="text-gray-600 mt-2">
            Navigating Health Together: Your Trusted Medical Resource.
            Medicine Meets Technology Your Online Health Hub
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              step={step}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
