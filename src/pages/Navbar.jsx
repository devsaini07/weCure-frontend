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

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 to-blue-400 px-8 py-3 flex justify-between items-center shadow-lg z-50">
        
        <h1 className="text-3xl text-white font-extrabold tracking-wide">
          weCure
        </h1>

        
        <div className="relative w-72">
          <div className="flex items-center bg-white rounded-full px-5 py-2 border border-emerald-400 shadow-md focus-within:border-emerald-500 transition-all duration-200 w-96">
            
            <span className="text-emerald-500 mr-4 flex items-center">
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
              placeholder="Search doctors, specialties..."
              className="flex-grow text-sm text-gray-700 outline-none px-1 placeholder-gray-400"
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
                <div className="px-4 py-2 text-gray-500">No doctors found</div>
              )}
            </div>
          )}
        </div>

        
        <div className="flex items-center gap-6">
          {[
            { path: "/", label: "Home" },
            { path: "/dashboard", label: "Dashboard" },
            { path: "/ourdoctors", label: "Our Doctors" },
            { path: "/services", label: "Services" },
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-white text-lg hover:text-green-200 transition duration-200"
            >
              {link.label}
            </Link>
          ))}

          
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
      </nav>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default Navbar;
