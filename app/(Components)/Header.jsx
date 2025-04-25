"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/app/assets/logo/logo.svg";
import Link from "next/link";
import { KeyRound, UserPlus, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-slate-100 shadow-lg sticky top-0 z-50 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src={logo}
            alt="logo"
            width={160}
            height={70}
            className="w-[140px] sm:w-[160px] md:w-[180px] h-auto"
          />
        </div>

        {/* Hamburger for <900px */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 hover:text-orange-500 transition duration-300 ease-in-out focus:outline-none"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Nav links for ≥900px */}
        <nav className="hidden max-[899px]:hidden lg:flex gap-x-5 gap-y-2">
          {["About", "Features", "Pricing", "Team", "FAQ", "Konnect"].map(
            (item, idx) => (
              <Link
                key={idx}
                href="/"
                className="text-gray-800 text-sm font-medium hover:text-orange-500 transition duration-300"
              >
                {item}
              </Link>
            )
          )}
        </nav>

        {/* Buttons for ≥900px */}
        <div className="hidden max-[899px]:hidden lg:flex items-center gap-3">
          <button className="border border-teal-300 hover:border-teal-500 hover:bg-teal-500 hover:text-white text-sm text-gray-800 font-medium py-1.5 px-3 rounded-full flex items-center gap-2 transition duration-300">
            <KeyRound size={16} />
            Login
          </button>
          <button className="bg-teal-500 hover:bg-teal-600 text-white text-sm font-medium py-1.5 px-3 rounded-full flex items-center gap-2 transition duration-300">
            <UserPlus size={16} />
            Create Account
          </button>
        </div>
      </div>

      {/* Mobile + Mid-Screen Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-4 bg-slate-100">
          <nav className="flex flex-col space-y-2">
            {["About", "Features", "Pricing", "Team", "FAQ", "Konnect"].map(
              (item, idx) => (
                <Link
                  key={idx}
                  href="/"
                  className="text-gray-800 font-semibold hover:text-orange-500 transition duration-300 ease-in-out"
                >
                  {item}
                </Link>
              )
            )}
          </nav>
          <div className="flex flex-col space-y-2 mt-4">
            <button className="border border-teal-300 hover:border-teal-500 hover:bg-teal-500 hover:text-white text-gray-800 font-semibold py-2 px-4 rounded-full flex items-center gap-2 justify-center transition duration-300">
              <KeyRound size={16} />
              Login
            </button>
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-full flex items-center gap-2 justify-center transition duration-300">
              <UserPlus size={16} />
              Create Account
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
