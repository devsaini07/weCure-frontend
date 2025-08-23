// OurDoctors.jsx

import React from "react";
import Footer from "./Footer";
import doctors from "../data/doctors";
import { useNavigate } from "react-router-dom";
const OurDoctors = () => {
  const navigate = useNavigate();
  return (
    <>
    
      <section className="bg-blue-50 py-12 px-8">
        <h1 className="text-center text-4xl font-bold mb-10 text-blue-900">
          Our Specialist Doctors
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {doctor.name}
              </h2>
              <p className="text-blue-700 font-medium mb-1">
                {doctor.specialty}
              </p>
              <p className="text-gray-600 mb-4">
                Experience: {doctor.experience}
              </p>
              <button
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                onClick={() => {
                  navigate("/appointment"); // Go to Book Appointment page
                }}
              >
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OurDoctors;
