'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "../logo/Logo";

export default function HeaderMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  return (
    <div className="relative">
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 z-50 transition-opacity duration-300 ease-in-out pointer-events-none ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex items-center justify-center h-screen">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link
                className="text-white hover:text-gray-100 transition duration-300"
                href=""
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                className="text-white hover:text-gray-100 transition duration-300"
                href=""
              >
                Delivery
              </Link>
            </li>
            <li>
              <Link
                className="text-white hover:text-gray-100 transition duration-300"
                href=""
              >
                Call Cheers
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between p-8 bg-header-menu">
        <div className="flex w-full items-center justify-between">
          <Logo />
          <ul className="hidden lg:flex space-x-4">
            <li>
              <Link
                className="text-gray-500 hover:text-gray-100 transition duration-300"
                href=""
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-500 hover:text-gray-100 transition duration-300"
                href=""
              >
                Delivery
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-500 hover:text-gray-100 transition duration-300"
                href=""
              >
                Call Cheers
              </Link>
            </li>
          </ul>
        </div>
        <button
          className="lg:hidden text-gray-500 hover:text-gray-100 transition duration-300 z-50"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
