"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import client1 from "@/app/assets/clients/sponsor1.svg";
import client2 from "@/app/assets/clients/sponsor2.svg";
import client3 from "@/app/assets/clients/sponsor3.svg";
import client4 from "@/app/assets/clients/sponsor4.svg";
import client5 from "@/app/assets/clients/sponsor5.svg";
import client6 from "@/app/assets/clients/sponsor6.svg";

const clients = [client1, client2, client3, client4, client5, client6];

export default function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <div className="flex items-center justify-center min-h-fit">
      <section
        ref={ref}
        className="bg-white py-10 px-4 w-full max-w-7xl overflow-hidden"
      >
        <motion.h2
          className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Our Trusted Clients
        </motion.h2>

        <motion.div
          className="relative w-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex animate-scroll whitespace-nowrap w-max">
            {[...clients, ...clients].map((src, index) => (
              <motion.div
                key={index}
                className="w-[150px] h-[80px] mx-6 flex-shrink-0 flex items-center justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.1 + index * 0.05,
                  ease: "easeOut",
                }}
              >
                <Image
                  src={src}
                  alt={`Sponsor ${index}`}
                  width={150}
                  height={80}
                  className="w-full h-full object-contain filter grayscale hover:filter-none transition duration-300 ease-in-out"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
