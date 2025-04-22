import Image from "next/image";
import React from "react";
import logo from "@/app/logo.svg";
import Link from "next/link";
import { KeyRound, UserPlus } from "lucide-react";

export default function Header() {
  return (
    <>
      <header className="bg-slate-100 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo Start */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <Image
              src={logo}
              alt="logo"
              width={180}
              height={80}
              className="h-8 w-auto"
            />
          </div>
          {/* Logo End */}
          {/* Menu Start */}
          <nav className="flex justify-center space-x-6">
            <Link
              href="/"
              className="text-gray-800 font-semibold hover:text-orange-500"
            >
              About
            </Link>
            <Link
              href="/"
              className="text-gray-800 font-semibold hover:text-orange-500"
            >
              Features
            </Link>
            <Link
              href="/"
              className="text-gray-800 font-semibold hover:text-orange-500"
            >
              Pricing
            </Link>
            <Link
              href="/"
              className="text-gray-800 font-semibold hover:text-orange-500"
            >
              Team
            </Link>
            <Link
              href="/"
              className="text-gray-800 font-semibold hover:text-orange-500"
            >
              FAQ
            </Link>
            <Link
              href="/"
              className="text-gray-800 font-semibold hover:text-orange-500"
            >
              Konnect
            </Link>
          </nav>
          {/* Menu End */}
          {/* Account Options Start */}
          <div className="flex items-center space-x-4">
            <button className="border-2 border-teal-300 hover:border-teal-500 hover:bg-teal-500 hover:text-white text-gray-800 font-semibold py-2 px-4 rounded-full flex items-center transition duration-300 ease-in-out gap-3">
              <KeyRound />
              Login
            </button>
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-full flex items-center gap-3">
              <UserPlus />
              Create Account
            </button>
          </div>
          {/* Account Options End */}
        </div>
      </header>
    </>
  );
}
