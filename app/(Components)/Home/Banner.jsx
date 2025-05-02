"use client";
import Image from "next/image";
import React, { useRef } from "react";
import banner from "@/app/assets/banner/banner.png";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

export default function Banner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <section className="min-h-fit my-5 flex items-center justify-center px-4">
      <motion.div
        ref={ref}
        className="w-full max-w-7xl bg-slate-100 rounded-3xl py-12 px-6 md:py-20 md:px-10 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          
          {/* Left Section */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-800 mb-4">
              Empowering Lives Through
              <span className="block text-emerald-600">Health</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              Navigating Health Together: Your Trusted Medical Resource
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Link
                href="#get-started"
                className="inline-block bg-teal-700 text-white px-6 py-3 rounded-md hover:bg-emerald-500 transition duration-300"
              >
                Get started now
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Section (Image) */}
          <motion.div
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Image
              src={banner}
              alt="Doctor checking patient's blood pressure"
              width={700}
              height={400}
              className="w-full h-auto object-contain"
              priority
            />

            {/* Decorative Stars */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <div className="bg-blue-500 w-3 h-3 rounded-full absolute -left-16 -top-16"></div>
              <div className="bg-yellow-500 w-3 h-3 rounded-full absolute right-16 top-16"></div>
              <div className="bg-green-500 w-3 h-3 rounded-full absolute -right-16 bottom-16"></div>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
