import React from "react";
import Image from "next/image";
import logo from "@/app/assets/logo/logo.svg"; // Replace with your logo path

// Import social icons from react-icons
import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1: Logo + Text + Social Icons */}
        <div className="space-y-4">
          <Image src={logo} alt="logo" width={150} height={60} />
          <p className="text-sm">
            Navigating Health Together: <br />
            Your Trusted Medical Resource
          </p>
          <div className="flex gap-4 mt-2">
            <FaFacebookF className="w-5 h-5 hover:text-blue-600 cursor-pointer" />
            <FaInstagram className="w-5 h-5 hover:text-pink-500 cursor-pointer" />
            <FaYoutube className="w-5 h-5 hover:text-red-600 cursor-pointer" />
            <FaXTwitter className="w-5 h-5 hover:text-sky-500 cursor-pointer" />
          </div>
        </div>

        {/* Column 2: Quick Menu */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Menu</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-teal-500 hover:font-semibold">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-teal-500 hover:font-semibold">
                About
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-teal-500 hover:font-semibold">
                Doctor
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-teal-500 hover:font-semibold">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Support Us */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Support us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-teal-500 hover:font-semibold">
                FAQ&apos;s
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-teal-500 hover:font-semibold">
                Support Center
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-teal-500 hover:font-semibold">
                Security
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-teal-500 hover:font-semibold">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Menu</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="tel:+919966883734" className="hover:text-teal-500 hover:font-semibold">
                9966883734
              </a>
            </li>
            <li>
              <a
                href="mailto:info@5thdt.com"
                className="hover:text-teal-500 hover:font-semibold"
              >
                info@5thdt.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-600">
        © 2025 ReKover All Rights Reserved
      </div>
    </footer>
  );
}
