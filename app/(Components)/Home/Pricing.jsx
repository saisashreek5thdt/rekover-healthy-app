"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";

const plans = {
  monthly: [
    {
      name: "Basic",
      price: "$9",
      description: "Essential tools for individuals",
      features: ["1 User", "5 Projects", "Basic Support"],
    },
    {
      name: "Pro",
      price: "$29",
      description: "Advanced features for professionals",
      features: ["5 Users", "Unlimited Projects", "Priority Support"],
    },
    {
      name: "Enterprise",
      price: "$99",
      description: "Best for large teams and companies",
      features: ["Unlimited Users", "Advanced Analytics", "Dedicated Manager"],
    },
  ],
  yearly: [
    {
      name: "Basic",
      price: "$90",
      description: "Save $18 yearly",
      features: ["1 User", "5 Projects", "Basic Support"],
    },
    {
      name: "Pro",
      price: "$290",
      description: "Save $58 yearly",
      features: ["5 Users", "Unlimited Projects", "Priority Support"],
    },
    {
      name: "Enterprise",
      price: "$990",
      description: "Save $198 yearly",
      features: ["Unlimited Users", "Advanced Analytics", "Dedicated Manager"],
    },
  ],
};

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");
  const currentPlans = plans[billing];

  return (
    <>
      <section className="w-full px-4 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-gray-500 mb-10">
            Simple and transparent pricing for teams of all sizes.
          </p>

          <div className="flex justify-center mb-10">
            <div className="flex bg-white border rounded-full shadow-sm">
              <button
                onClick={() => setBilling("monthly")}
                className={`px-6 py-2 rounded-full transition-all duration-200 ${
                  billing === "monthly"
                    ? "bg-teal-600 text-white"
                    : "text-gray-600"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling("yearly")}
                className={`px-6 py-2 rounded-full transition-all duration-200 ${
                  billing === "yearly" ? "bg-teal-600 text-white" : "text-gray-600"
                }`}
              >
                Yearly
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPlans.map((plan, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 flex flex-col items-center text-center"
              >
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-gray-500 mb-4">{plan.description}</p>
                <div className="text-4xl font-medium mb-4">
                  {plan.price}
                  <span className="text-base font-normal text-gray-500">
                    /{billing === "monthly" ? "mo" : "yr"}
                  </span>
                </div>
                <ul className="text-sm text-gray-700 space-y-2 mb-6 w-full">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-auto bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-900 transition">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
