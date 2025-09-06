// src/pages/OurDoctors.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"; // Make sure the path is correct
import Footer from "./Footer"; // Make sure the path is correct
import doctors from "../data/doctors"; // Your doctor data import

const OurDoctors = () => {
  const navigate = useNavigate();
  
  // State hooks for managing search and filter values
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");

  // Create a unique list of specialties for the filter dropdown.
  // The "All" option is added to the beginning.
  const specialties = ["All", ...new Set(doctors.map(doc => doc.specialty))];

  // Filter the doctors list based on the current state of search and specialty filters.
  // This logic runs every time the component re-renders (e.g., when state changes).
  const filteredDoctors = doctors.filter(doctor => {
    const matchesSpecialty = selectedSpecialty === "All" || doctor.specialty === selectedSpecialty;
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSpecialty && matchesSearch;
  });

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 1. Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 tracking-tight">Meet Our Specialists</h1>
            <p className="mt-3 text-lg max-w-2xl mx-auto text-slate-600">
              Dedicated professionals committed to providing you with exceptional care.
            </p>
          </div>

          {/* 2. Filter and Search Controls */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 p-4 bg-white rounded-xl shadow-sm border border-slate-200">
            {/* Search Input */}
            <div className="relative flex-grow">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
              </span>
              <input
                type="text"
                placeholder="Search by doctor's name..."
                className="w-full pl-10 pr-4 py-3 text-slate-700 bg-slate-100 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {/* Specialty Select Dropdown */}
            <select
              className="w-full sm:w-64 px-4 py-3 text-slate-700 bg-slate-100 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
            >
              {specialties.map(specialty => (
                <option key={specialty} value={specialty}>{specialty}</option>
              ))}
            </select>
          </div>

          {/* 3. Doctor Grid */}
          {filteredDoctors.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {/* We now map over the 'filteredDoctors' array */}
              {filteredDoctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="bg-white text-center p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-blue-300 transform hover:-translate-y-1 transition-all duration-300"
                >
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-slate-100"
                  />
                  <h2 className="text-xl font-bold text-slate-800">{doctor.name}</h2>
                  <p className="text-blue-600 font-semibold mb-3">{doctor.specialty}</p>
                  
                  <div className="flex justify-center text-sm text-slate-500 mb-5 space-x-4">
                    <div className="flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      <span>{doctor.experience}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      <span>Wellness Clinic</span>
                    </div>
                  </div>

                  <button
                    className="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
                    onClick={() => navigate("/appointment", { state: { doctorName: doctor.name } })}
                  >
                    Book Appointment
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center bg-white p-12 rounded-lg shadow-sm border">
              <h3 className="text-xl font-medium text-slate-800">No Doctors Found</h3>
              <p className="text-slate-500 mt-2">Please try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default OurDoctors;