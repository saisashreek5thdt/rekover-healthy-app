"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import team1 from "@/app/assets/team/team-1.png";
import team2 from "@/app/assets/team/team-2.png";
import team3 from "@/app/assets/team/team-3.png";

const doctors = [
  // Total 12 dummy entries
  ...Array(4).fill({
    name: "Name",
    role: "Designation",
    image: team1, // Use random image
  }),
  ...Array(4).fill({
    name: "Name",
    role: "Designation",
    image: team2, // Use random image
  }),
  ...Array(4).fill({
    name: "Name",
    role: "Designation",
    image: team3, // Use random image
  }),
];

export default function DoctorsTeam() {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 8;

  const paginatedDoctors = doctors.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage
  );

  const handleNext = () => {
    if ((currentPage + 1) * cardsPerPage < doctors.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-10">
        <div className="w-full max-w-7xl">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-sm text-teal-500 font-semibold">
                MEET OUR DOCTORS
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-1">
                We&apos;re Dedicated To <br /> Your Well-Being
              </h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white border shadow hover:bg-teal-100"
              >
                <FiChevronLeft />
              </button>
              <button
                onClick={handleNext}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-500 text-white shadow hover:bg-teal-600"
              >
                <FiChevronRight />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {paginatedDoctors.map((doctor, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm p-4 flex flex-col items-center text-center"
              >
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h3 className="font-semibold text-gray-800">{doctor.name}</h3>
                <p className="text-gray-500 text-sm">{doctor.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button className="bg-teal-700 text-white px-6 py-2 rounded-full text-sm hover:bg-teal-600 transition">
              Explore all doctors
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
