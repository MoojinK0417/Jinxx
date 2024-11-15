"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState("yearly");

  const handleBillingChange = (cycle: string) => {
    setBillingCycle(cycle);
  };

  const getPrice = (plan: string) => {
    if (billingCycle === "yearly") {
      switch (plan) {
        case "basic":
          return { original: "$7", discounted: "$6" };
        case "pro":
          return { original: "$11", discounted: "$9" };
        case "free":
          return "$0";
        default:
          return "$0";
      }
    } else {
      switch (plan) {
        case "basic":
          return "$7";
        case "pro":
          return "$11";
        case "free":
          return "$0";
        default:
          return "$0";
      }
    }
  };

  return (
    <div className="bg-gray-50">
      <header className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <Image src="/icon.png" alt="Jinx Logo" width={40} height={40} />
          <Link href="/" legacyBehavior>
            <span className="text-2xl font-bold">Jinxx</span>
          </Link>
        </div>
        <nav className="space-x-6">
          <Link href="$1" legacyBehavior>
            <a>something</a>
          </Link>
          <Link href="/login" legacyBehavior>
            <a>something</a>
          </Link>
          <button className="px-4 py-2 rounded-full bg-black text-white font-medium">
            Create free account
          </button>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">
          Design like a Pro with Jinx
        </h1>
        <p className="text-center text-lg text-gray-500 mb-10">
          Get full access to all apps & features starting from just $0.50 per
          day — Cancel anytime.
        </p>

        <div className="flex items-center justify-center space-x-6 mb-10">
          <button
            onClick={() => handleBillingChange("monthly")}
            className={`px-6 py-2 rounded-full ${
              billingCycle === "monthly"
                ? "text-white bg-black"
                : "text-gray-500 border border-gray-300"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => handleBillingChange("yearly")}
            className={`px-6 py-2 rounded-full ${
              billingCycle === "yearly"
                ? "text-white bg-black"
                : "text-gray-500 border border-gray-300"
            }`}
          >
            Yearly
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Free Plan */}
          <div className="p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Free</h2>
            <p className="text-gray-500 mb-6">For teams & agencies</p>
            <p className="text-4xl font-bold">$0</p>
            <p className="text-sm text-gray-500 mb-4">
              per member/month billed {billingCycle}
            </p>
            <button className="w-full py-3 bg-black text-white rounded-full mb-6">
              Get started
            </button>
            <ul className="space-y-3 text-gray-600">
              <li>All Pro features</li>
              <li>Team collections</li>
              <li>Comments & mentions</li>
              <li>Admin tools</li>
              <li>Centralized billing</li>
              <li>Seat-based pricing</li>
            </ul>
          </div>

          {/* Basic Plan */}
          <div className="p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Basic</h2>
            <p className="text-gray-500 mb-6">For students & learners</p>
            {(() => {
              const price = getPrice("basic");
              return typeof price === "object" ? (
                <p className="text-4xl font-bold">
                  <span className="line-through mr-2">{price.original}</span>
                  {price.discounted}
                </p>
              ) : (
                <p className="text-4xl font-bold">{price}</p>
              );
            })()}
            <p className="text-sm text-gray-500 mb-4">
              per month billed {billingCycle}
            </p>
            <button className="w-full py-3 bg-black text-white rounded-full mb-6">
              Get started
            </button>
            <ul className="space-y-3 text-gray-600">
              <li>Access to all apps & websites</li>
              <li>Community support</li>
              <li>Save and download projects</li>
            </ul>
          </div>

          {/* Pro Plan */}
          <div className="p-8 bg-white rounded-lg shadow-md border-2 border-black">
            <h2 className="text-xl font-bold">
              Pro{" "}
              <span className="ml-2 text-sm text-white bg-blue-600 px-2 py-1 rounded">
                Popular
              </span>
            </h2>
            <p className="text-gray-500 mb-6">For individuals</p>
            {(() => {
              const price = getPrice("pro");
              return typeof price === "object" ? (
                <p className="text-4xl font-bold">
                  <span className="line-through mr-2">{price.original}</span>
                  {price.discounted}
                </p>
              ) : (
                <p className="text-4xl font-bold">{price}</p>
              );
            })()}
            <p className="text-sm text-gray-500 mb-4">
              per month billed {billingCycle}
            </p>
            <button className="w-full py-3 bg-black text-white rounded-full mb-6">
              Get started
            </button>
            <ul className="space-y-3 text-gray-600">
              <li>Browse all apps & websites</li>
              <li>Browse flows</li>
              <li>Unlimited collections</li>
              <li>Download multiple screens</li>
              <li>App history</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center space-y-8">
          <div>
            <h3 className="text-lg font-bold">Enterprise</h3>
            <p className="text-gray-500">
              Get advanced security (SOC2), priority support, standard legal
              agreements, & more.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Basic or Educator?</h3>
            <p className="text-gray-500">
              Discover Jinx for education and get a discount if you're eligible.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
