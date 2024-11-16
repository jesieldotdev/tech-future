"use client"

import React, { useState } from "react";
import Logo from '../../../public/img/logo-variation.png'
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulando estado de login
  const [isAdmin, setIsAdmin] = useState(true); // Simulando permissão de admin

  const toggleNavbar = () => {
    setIsMobileMenuVisible((prev) => !prev);
  };

  // Funções de login/logout para exemplo
  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsAdmin(true); // Simulando que o usuário logado é um admin
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <Image
            id="nav-logo"
            src={Logo}
            alt="Logo"
            className="h-10"
          />
        </a>
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
          <a className="text-gray-800 hover:text-blue-600" href="/">
            Home
          </a>
          {!isLoggedIn ? (
            <a className="text-gray-800 hover:text-blue-600" href="/login">
              Login
            </a>
          ) : (
            <a
              className="text-gray-800 hover:text-blue-600"
              href="/logout"
              onClick={handleLogout}
            >
              Logout
            </a>
          )}
          {isAdmin && (
            <a className="text-gray-800 hover:text-blue-600" href="/admin">
              Admin
            </a>
          )}
        </div>
      </div>

      {/* Navbar mobile */}
      <div
        className={`mobile-navbar transition-all ease-in-out duration-500 overflow-hidden ${
          isMobileMenuVisible ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-2 px-4 py-2">
          <a className="text-gray-800 hover:text-blue-600" href="/">
            Home
          </a>
          {!isLoggedIn ? (
            <a className="text-gray-800 hover:text-blue-600" href="/login">
              Login
            </a>
          ) : (
            <a
              className="text-gray-800 hover:text-blue-600"
              href="/logout"
              onClick={handleLogout}
            >
              Logout
            </a>
          )}
          {isAdmin && (
            <a className="text-gray-800 hover:text-blue-600" href="/admin">
              Admin
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
