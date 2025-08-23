import React from "react";
import Navbar from "./Navbar";
import doctor from "../assets/doctor.jpg";
import queue from "../assets/queue.jpeg";
import opd from "../assets/opd.jpeg";

import Footer from "./Footer";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}

      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-28 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <div className="bg-blue-100 p-5 rounded-full mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 w-14 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10m-4 4h4m-4 4h4m-6-4h.01M6 21h12a2 2 0 002-2V9a2 2 0 00-2-2h-3.586a1 1 0 01-.707-.293l-1.414-1.414A1 1 0 0011.586 5H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-3">
              Search Doctor
            </h1>
            <p className="text-gray-600">
              Find top-rated specialists near you with ease.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <div className="bg-blue-100 p-5 rounded-full mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 w-14 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10m-4 4h4m-4 4h4m-6-4h.01M6 21h12a2 2 0 002-2V9a2 2 0 00-2-2h-3.586a1 1 0 01-.707-.293l-1.414-1.414A1 1 0 0011.586 5H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-3">
              Select Time
            </h1>
            <p className="text-gray-600">
              Choose an appointment slot that works for you.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <div className="bg-blue-100 p-5 rounded-full mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 w-14 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-3">Book It</h1>
            <p className="text-gray-600">
              Confirm and get instant booking confirmation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-blue-50 to-blue-100 py-20">
        <div className=" max-w-8xl mx-auto px-4 text-center">
          {/* Section Heading */}
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Why Choose WeCure?
          </h1>
          <p className="text-gray-600 mb-12 text-lg">
            We make healthcare booking faster, easier, and more reliable.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-100 p-4 rounded-full inline-block mb-6">
                <img
                  src={doctor}
                  alt="Doctor"
                  className="h-30 w-40 object-contain"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2">Easy Bookings</h2>
              <p className="text-gray-600">
                Schedule appointments in just a few clicks
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <div className="bg-green-100 p-4 rounded-full inline-block mb-6">
                <img
                  src={queue}
                  alt="Queue"
                  className="h-30 w-40 object-contain"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2">
                Trusted Professionals
              </h2>
              <p className="text-gray-600">
                Get access to experienced and verified doctors
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <div className="bg-purple-100 p-4 rounded-full inline-block mb-6">
                <img src={opd} alt="OPD" className="h-30 w-40 object-contain" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Secure & Reliable</h2>
              <p className="text-gray-600">
                Your data is safe with our secure platform
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <div className="bg-pink-100 p-4 rounded-full inline-block mb-6">
                <img
                  src={doctor}
                  alt="Consultancy"
                  className="h-30 w-40 object-contain"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2">
                Best Care Consultancy
              </h2>
              <p className="text-gray-600">
                Consult with the best doctors for free
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <div className="bg-pink-100 p-4 rounded-full inline-block mb-6">
                <img
                  src={doctor}
                  alt="Consultancy"
                  className="h-30 w-40 object-contain"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2">
                Best Care Consultancy
              </h2>
              <p className="text-gray-600">
                Consult with the best doctors for free
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-100 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            Book Your Appointment Now
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Schedule your visit in just a few clicks. Fast and easy!
          </p>
          <button
            className="bg-white text-blue-700 border border-blue-300 text-xl px-10 py-4 rounded-full shadow-md hover:bg-blue-200 hover:scale-105 transition duration-300"
            onClick={() => {
              window.location.href = "/ai";
            }}
          >
            Book an Appointment
          </button>
          <button
            className="bg-white text-blue-700 border border-blue-300 text-xl px-10 py-4 rounded-full shadow-md hover:bg-blue-200 hover:scale-105 transition duration-300"
            onClick={() => {
              window.location.href = "/ai";
            }}
          >
            Use AI assistant
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <section>
        <Footer />
      </section>
    </>
  );
};
export default Home;
