"use client";
import React, { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Menu, X, Calendar, Users, Clipboard, Home } from "lucide-react";

function abc() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar Start */}
        <aside
          className={`bg-teal-700 text-white transition-all duration-300 z-50 shadow-lg flex flex-col 
        ${isSidebarOpen ? "w-64 p-6" : "w-20 p-3 items-center"}`}
        >
          <div className="flex justify-between items-center">
            <h2
              className={`transition-all duration-300 ${
                isSidebarOpen ? "text-xl font-semibold" : "text-xs text-center"
              }`}
            >
              Doctor Panel
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
          <nav className="mt-4 space-y-2 flex flex-col items-start md:items-stretch">
            {[
              { icon: <Home className="w-6 h-6" />, label: "Dashboard" },
              {
                icon: <Calendar className="w-6 h-6" />,
                label: "Appointments",
              },
              { icon: <Users className="w-6 h-6" />, label: "Patients" },
              {
                icon: <Clipboard className="w-6 h-6" />,
                label: "Prescriptions",
              },
            ].map((item, index) => (
              <div key={index} className="relative group w-full">
                <a
                  href="#"
                  className="flex items-center gap-2 p-3 rounded-lg hover:bg-teal-200 hover:text-gray-700"
                >
                  {item.icon}
                  {isSidebarOpen && (
                    <span className="transition-all duration-300 text-sm">
                      {item.label}
                    </span>
                  )}
                </a>
                {!isSidebarOpen && (
                  <span className="absolute left-16 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.label}
                  </span>
                )}
              </div>
            ))}
          </nav>
        </aside>
        {/* Sidebar End */}

        {/* Main Content Start */}
        <div
          className={`flex-1 flex flex-col transition-all duration-300 p-6 ${
            isSidebarOpen ? "ml-64" : "ml-20"
          }`}
        >
          {/* Navbar Start */}
          <header className="p-4 shadow bg-white flex items-center justify-between md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </Button>
            <h1 className="text-lg font-semibold">Doctor Dashboard</h1>
          </header>
          {/* Navbar End */}
          <main className="p-6 space-y-6">{children}</main>
        </div>
        {/* Main Content End */}
      </div>
    </>
  );
}

export default abc;
