import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import search from "../assets/search.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import doctors from "../data/doctors"; // Import your doctors list

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully! 👋");
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  const filteredDoctors = doctors.filter((doc) =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/dashboard", label: "Dashboard" },
    { path: "/ourdoctors", label: "Our Doctors" },
    { path: "/services", label: "Services" },
  ];

  return (
    // AFTER: Professionally redesigned with the "Healio" theme
    <>
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg border-b border-slate-200 px-4 sm:px-8 py-3 flex justify-between items-center shadow-sm z-50 transition-all duration-300">
        {/* 1. Logo - Using the primary brand color for impact */}
        <Link to="/">
          <img 
            src="/logo-main.png"
            alt="weCure Logo"
            className="h-8 w-auto transform scale-250" // Adjust the height (h-8, h-10, etc.) to fit your design
          />
        </Link>

        {/* 2. Desktop Navigation - Centered and spaced for a clean look */}
        <div className="hidden lg:flex items-center gap-x-8">
          {/* Search Bar - Modern and integrated */}
          <div className="relative">
            <div className="relative flex items-center">
              {/* Search Icon */}
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search doctors, specialty..."
                className="w-72 pl-10 pr-4 py-2 text-slate-700 bg-slate-100 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {/* Search Results Dropdown - Softer shadows and hover effects */}
            {searchTerm && (
              <div className="absolute bg-white border border-slate-200 rounded-lg shadow-lg mt-2 w-full max-h-60 overflow-y-auto z-10">
                {filteredDoctors.length > 0 ? (
                  filteredDoctors.map((doc) => (
                    <div
                      key={doc.id}
                      className="px-4 py-3 text-sm text-slate-700 hover:bg-slate-100 cursor-pointer transition-colors duration-200"
                      onClick={() => {
                        setSearchTerm("");
                        navigate("/ourdoctors");
                      }}
                    >
                      {doc.name}{" "}
                      <span className="text-slate-500">({doc.specialty})</span>
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-3 text-sm text-slate-500">
                    No doctors found
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Nav Links - Clearer, calmer text styling */}
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-slate-600 font-medium hover:text-blue-600 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* 3. User Authentication Buttons - Clear primary and secondary actions */}
        <div className="hidden lg:flex items-center gap-x-2">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-50 text-red-600 font-medium px-4 py-2 rounded-lg hover:bg-red-100 shadow-sm transition-all duration-200"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login">
                <button className="text-slate-600 font-medium px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors duration-200">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                {" "}
                {/* Assuming a signup route exists */}
                <button className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg shadow-sm hover:bg-blue-700 hover:-translate-y-0.5 transform transition-all duration-200">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>

        {/* 4. Mobile Menu Button - Unchanged logic, cleaner icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-600 focus:outline-none"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* 5. Mobile Menu - Redesigned to match the new theme */}
      {isMenuOpen && (
        <div className="fixed top-[65px] left-0 w-full bg-white lg:hidden shadow-md z-40">
          <div className="flex flex-col items-center gap-y-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-slate-700 text-lg font-medium hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-slate-200 w-full flex flex-col items-center gap-y-4">
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="bg-red-50 text-red-600 font-medium px-6 py-2 rounded-lg hover:bg-red-100 w-4/5 text-center"
                >
                  Logout
                </button>
              ) : (
                <Link to="/login" className="w-4/5">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="bg-blue-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-700 w-full"
                  >
                    Login / Sign Up
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default Navbar;
