import React, { useState } from "react";
import Logo from '../../../public/img/logo-variation.png';
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);

  const toggleNavbar = () => {
    setIsMobileMenuVisible((prev) => !prev);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image id="nav-logo" src={Logo} alt="Logo" className="h-10" />
        </Link>
        <button
          className="lg:hidden p-2 border-0"
          type="button"
          onClick={toggleNavbar}
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
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <div className="hidden lg:flex flex-grow justify-end space-x-4">
          <Link href="/" className="text-gray-800 hover:text-blue-600">
            Home
          </Link>
          {!isLoggedIn ? (
            <Link href="/login" className="text-gray-800 hover:text-blue-600">
              Login
            </Link>
          ) : (
            <Link
              href="/logout"
              className="text-gray-800 hover:text-blue-600"
              onClick={handleLogout}
            >
              Logout
            </Link>
          )}
          {isAdmin && (
            <Link href="/admin" className="text-gray-800 hover:text-blue-600">
              Admin
            </Link>
          )}
        </div>
      </div>

      <div
        className={`mobile-navbar transition-all ease-in-out duration-500 overflow-hidden ${
          isMobileMenuVisible ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-2 px-4 py-2">
          <Link href="/" className="text-gray-800 hover:text-blue-600">
            Home
          </Link>
          {!isLoggedIn ? (
            <Link href="/login" className="text-gray-800 hover:text-blue-600">
              Login
            </Link>
          ) : (
            <Link
              href="/logout"
              className="text-gray-800 hover:text-blue-600"
              onClick={handleLogout}
            >
              Logout
            </Link>
          )}
          {isAdmin && (
            <Link href="/admin" className="text-gray-800 hover:text-blue-600">
              Admin
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
