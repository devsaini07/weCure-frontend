import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import search from "../assets/search.png";
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
    <>
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 to-blue-400 px-4 sm:px-8 py-3 flex justify-between items-center shadow-lg z-50">
        {/* Logo */}
        <h1 className="text-3xl text-white font-extrabold tracking-wide">
          weCure
        </h1>

        {/* Desktop Search and Links */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Search Bar */}
          <div className="relative w-72">
            <div className="flex items-center bg-white rounded-full px-4 py-2 border border-emerald-400 shadow-md">
              <span className="text-emerald-500 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search doctors..."
                className="flex-grow text-sm text-gray-700 outline-none placeholder-gray-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white p-2 rounded-full transition duration-200">
                <img src={search} alt="Search" className="h-4 w-4" />
              </button>
            </div>
            {searchTerm && (
              <div className="absolute bg-white border border-gray-200 rounded-lg shadow-md mt-1 w-full max-h-60 overflow-y-auto">
                {filteredDoctors.length > 0 ? (
                  filteredDoctors.map((doc) => (
                    <div
                      key={doc.id}
                      className="px-4 py-2 text-gray-700 hover:bg-blue-100 cursor-pointer transition"
                      onClick={() => {
                        setSearchTerm("");
                        navigate("/ourdoctors");
                      }}
                    >
                      {doc.name}{" "}
                      <span className="text-gray-500">({doc.specialty})</span>
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-2 text-gray-500">
                    No doctors found
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Nav Links */}
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-white text-lg hover:text-green-200 transition duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Login/Logout */}
        <div className="hidden lg:block">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 shadow-md transition duration-200"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="bg-emerald-400 text-white font-medium px-6 py-2 rounded-full shadow-md hover:bg-emerald-500 hover:scale-105 transition duration-300">
                Login / Sign Up
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-8 w-8"
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
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 w-full bg-blue-400 lg:hidden shadow-lg z-40">
          <div className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-white text-lg hover:text-green-200 transition duration-200"
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                {link.label}
              </Link>
            ))}
            {isLoggedIn ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 shadow-md transition duration-200"
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-emerald-400 text-white font-medium px-6 py-2 rounded-full shadow-md hover:bg-emerald-500 transition duration-300"
                >
                  Login / Sign Up
                </button>
              </Link>
            )}
          </div>
        </div>
      )}

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default Navbar;