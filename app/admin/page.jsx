import { Calendar, Clipboard, Users } from "lucide-react";
import React from "react";

export default function DoctorDashboard() {
  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
              <Calendar className="w-12 h-12 text-teal-600" />
              <div>
                <p className="text-gray-500">Upcoming Appointments</p>
                <h3 className="text-xl font-bold">12</h3>
              </div>
            </div>
          </div>
          <div className="aspect-video rounded-xl">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
              <Users className="w-12 h-12 text-green-600" />
              <div>
                <p className="text-gray-500">Total Patients</p>
                <h3 className="text-xl font-bold">85</h3>
              </div>
            </div>
          </div>
          <div className="aspect-video rounded-xl">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
              <Clipboard className="w-12 h-12 text-purple-600" />
              <div>
                <p className="text-gray-500">Prescriptions Issued</p>
                <h3 className="text-xl font-bold">230</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-screen flex-1 rounded-xl md:min-h-min">
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
        </div>
      </div>
    </>
  );
}
