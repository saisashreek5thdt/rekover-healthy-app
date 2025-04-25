import Image from "next/image";
import React from "react";
import featureIMG from "@/app/assets/features/features.png";
import { FiCheck } from "react-icons/fi";

export default function Features() {
  return (
    <section className="w-full flex justify-center px-4 py-12">
      <div className="w-full max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="text-center lg:text-left max-w-xl">
          <p className="text-teal-500 font-medium mb-2">
            We’re always with you
          </p>
          <h2 className="text-4xl font-semibold mb-4">
            Together, We Can <br /> Achieve Optimal Health
          </h2>
          <p className="text-gray-600 mb-4">
            Navigating Health Together Your Trusted Medical Resource. <br />
            Medicine Meets Technology Your Online Health Hub
          </p>
          <ul className="space-y-2 text-left mt-6">
            <li className="flex items-start gap-2">
              <span className="text-teal-500">
                <FiCheck size={24} />
              </span>{" "}
              Realtime analytics
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-500">
                <FiCheck size={24} />
              </span>{" "}
              Best campaign manager
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-500">
                <FiCheck size={24} />
              </span>{" "}
              Detailed contact dta
            </li>
          </ul>
        </div>

        {/* Image */}
        <div className="w-full max-w-md mx-auto">
          <Image
            src={featureIMG}
            alt="Health Illustration"
            className="w-full h-auto object-cover"
            priority
            width={350}
            height={350}
          />
        </div>
      </div>
    </section>
  );
}
