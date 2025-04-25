"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import user1 from "@/app/assets/team/team-1.png";
import user2 from "@/app/assets/team/team-2.png";
import user3 from "@/app/assets/team/team-3.png";

const testimonials = [
  {
    name: "User Name",
    role: "User Designation",
    image: user1, // Place this image in public folder
    quote:
      "Provided exceptional care, diagnosing and treating my condition with compassion. I'm on the road to recovery",
  },
  {
    name: "User Name",
    role: "User Designation",
    image: user2, // Place this image in public folder
    quote:
      "Provided exceptional care, diagnosing and treating my condition with compassion. I'm on the road to recovery",
  },
  {
    name: "User Name",
    role: "User Designation",
    image: user3, // Place this image in public folder
    quote:
      "Provided exceptional care, diagnosing and treating my condition with compassion. I'm on the road to recovery",
  },
  // Add more testimonials if needed
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const handleNext = () => setIndex((index + 1) % total);
  const handlePrev = () => setIndex((index - 1 + total) % total);

  return (
    <>
      <section className="w-full px-4 py-12 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            What People Are Saying <br /> About Our Services
          </h2>
          <p className="text-gray-500 mb-10">
            Navigating Health Together Your Trusted Medical Resource. Medicine
            Meets Technology Your Online Health Hub
          </p>

          <div className="bg-[#f4f7fb] rounded-3xl p-6 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="w-full md:w-1/3 flex justify-center">
              <Image
                src={testimonials[index].image}
                alt={testimonials[index].name}
                width={200}
                height={200}
                className="rounded-xl object-cover"
              />
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-6">
                “ {testimonials[index].quote} ”
              </p>
              <p className="text-lg font-semibold">
                {testimonials[index].name}
              </p>
              <p className="text-sm text-gray-600">
                {testimonials[index].role}
              </p>
              <div className="mt-6 flex gap-4">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-teal-400 shadow flex items-center justify-center hover:bg-teal-400"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
