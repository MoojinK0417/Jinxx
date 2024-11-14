import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-white mb-4">M</h2>
          <p className="text-gray-400 mb-6">
            Design better digital experiences with Mobbin.
          </p>
          <div className="bg-gray-800 px-4 py-2 rounded-md w-max">
            <span className="text-sm text-gray-400">Featured on </span>
            <strong className="text-white">Product Hunt</strong>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col">
          <ul className="space-y-3">
            <li>
              <Link href="/pricing" className="hover:text-white transition">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/changelog" className="hover:text-white transition">
                Changelog
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/help-center" className="hover:text-white transition">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-white transition">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col">
          <ul className="space-y-3">
            <li>
              <Link
                href="/spring-release"
                className="hover:text-white transition"
              >
                Spring Release '24
              </Link>
            </li>
            <li>
              <Link href="/twitter" className="hover:text-white transition">
                X (Twitter)
              </Link>
            </li>
            <li>
              <Link href="/linkedin" className="hover:text-white transition">
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-gray-500 mb-4 md:mb-0">
          © Mobbin 2018–2024. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <Link
            href="/privacy-policy"
            className="text-sm text-gray-500 hover:text-white transition"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-sm text-gray-500 hover:text-white transition"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
