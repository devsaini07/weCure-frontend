// src/pages/Appointment.jsx

import React, { useState } from "react";
import doctors from "../data/doctors";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { timeslots } from "../data/timeSlots";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Appointment = () => {
  const navigate = useNavigate();
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const isLoggedIn = !!localStorage.getItem("token");
    
    console.log({
      doctor: selectedDoctor,
      date,
      timeSlot,
      reason,
    });
    if (!isLoggedIn) {
      // redirect to login if not logged in
      toast.error("Please login before booking an appointment! 🚫");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      return null;
    }
    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const response = await fetch(`${API_URL}/api/appointments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          user: userId,
          doctor: selectedDoctor,
          date,
          timeSlot,
          reason,
        }),
      });
      

      const data = await response.json();

      if (response.ok) {
        toast.success("Appointment booked successfully! 🚀");

        // Clear form
        setSelectedDoctor("");
        setDate("");
        setTimeSlot("");
        setReason("");
      } else {
        toast.error(`Failed to book: ${data.message}`);
      }
    } catch (error) {
      console.log("Booking error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };
  return (
    <>
      <section className="pt-24 min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 py-12 flex justify-center items-start px-4">
        <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-2xl border border-blue-100">
          <h1 className="text-4xl font-extrabold text-blue-700 mb-8 text-center animate-fade-in">
            Book an Appointment
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Doctor selection */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Select Doctor
              </label>
              <select
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              >
                <option value="">-- Choose a Doctor --</option>
                {doctors.map((doc) => (
                  <option key={doc.id} value={doc.name}>
                    {doc.name} ({doc.specialty})
                  </option>
                ))}
              </select>
            </div>

            {/* Date picker */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Appointment Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              />
            </div>

            {/* Time picker */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Time Slot
              </label>
              <select
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              >
                <option value="">-- Select Time Slot --</option>
                {timeslots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>

            {/* Reason selection */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Reason for Appointment
              </label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                rows={4}
                placeholder="Describe your symptoms, concerns, or reason for visit..."
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              ></textarea>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white text-lg font-semibold py-3 rounded-xl hover:bg-blue-700 hover:scale-[1.02] transition active:scale-95 shadow-md"
            >
              Confirm Appointment
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Appointment;
