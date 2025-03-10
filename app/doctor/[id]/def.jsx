"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { Calendar, Users, Clipboard, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

function def() {
  const { id } = useParams();
  const [isFloatingMenuOpen, setIsFloatingMenuOpen] = useState(false);
  return (
    <>
      <h2 className="text-xl font-bold">Welcome, Doctor {id}!</h2>
      <p className="text-gray-600">
        Manage your appointments and patients efficiently.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
          <Calendar className="w-12 h-12 text-teal-600" />
          <div>
            <p className="text-gray-500">Upcoming Appointments</p>
            <h3 className="text-xl font-bold">12</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
          <Users className="w-12 h-12 text-green-600" />
          <div>
            <p className="text-gray-500">Total Patients</p>
            <h3 className="text-xl font-bold">85</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
          <Clipboard className="w-12 h-12 text-purple-600" />
          <div>
            <p className="text-gray-500">Prescriptions Issued</p>
            <h3 className="text-xl font-bold">230</h3>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">Patient Name</th>
              <th className="p-3 text-left">Age</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Health Plan</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3">John Doe</td>
              <td className="p-3">30</td>
              <td className="p-3">123-456-7890</td>
              <td className="p-3">Premium</td>
            </tr>
            <tr className="border-b">
              <td className="p-3">Jane Smith</td>
              <td className="p-3">28</td>
              <td className="p-3">987-654-3210</td>
              <td className="p-3">Basic</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <Button
          variant="primary"
          className="rounded-full p-4 shadow-lg bg-teal-600 text-white transition-transform duration-300"
          onClick={() => setIsFloatingMenuOpen(!isFloatingMenuOpen)}
        >
          {isFloatingMenuOpen ? (
            <Minus className="w-6 h-6" />
          ) : (
            <Plus className="w-6 h-6" />
          )}
        </Button>
        {isFloatingMenuOpen && (
          <div className="absolute bottom-16 right-0 bg-white shadow-md rounded-lg p-2 space-y-2 w-48 transition-opacity duration-300">
            <Button variant="ghost" className="block w-full text-left">
              New Prescription
            </Button>
            <Button variant="ghost" className="block w-full text-left">
              New Form
            </Button>
            <Button variant="ghost" className="block w-full text-left">
              New Patient Record
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

export default def;
