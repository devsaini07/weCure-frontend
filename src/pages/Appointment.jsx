// src/pages/Appointment.jsx

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import doctors from "../data/doctors";
import { timeslots } from "../data/timeSlots";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Appointment = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // This line gets the doctor's name passed from the OurDoctors page
  const preselectedDoctor = location.state?.doctorName || "";

  // Set the initial state of the form, using the preselected doctor if available
  const [selectedDoctor, setSelectedDoctor] = useState(preselectedDoctor);
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [reason, setReason] = useState("");

  // Your handleSubmit function remains the same
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const isLoggedIn = !!localStorage.getItem("token");

    if (!isLoggedIn) {
      toast.error("Please login before booking an appointment! 🚫");
      setTimeout(() => navigate("/login"), 2000);
      return;
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
  const today = new Date().toISOString().split("T")[0];
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-slate-50 pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-slate-800 tracking-tight">
              Book an Appointment
            </h1>
            <p className="mt-3 text-lg text-slate-600">
              Fill out the form below to schedule your visit.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Doctor Selection */}
              <div>
                <label
                  htmlFor="doctor"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Select Doctor
                </label>
                <select
                  id="doctor"
                  value={selectedDoctor}
                  onChange={(e) => setSelectedDoctor(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled>
                    -- Choose a Doctor --
                  </option>
                  {doctors.map((doc) => (
                    <option key={doc.id} value={doc.name}>
                      {doc.name} ({doc.specialty})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date Picker */}
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Appointment Date
                </label>
                <input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  // This 'min' attribute prevents selecting past dates
                  min={today}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Time Slot Picker */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Available Time Slots
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {timeslots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTimeSlot(slot)}
                      className={`px-3 py-2 text-sm font-medium rounded-lg border transition-colors
                        ${
                          timeSlot === slot
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
                        }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reason for Appointment */}
              <div>
                <label
                  htmlFor="reason"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Reason for Visit
                </label>
                <textarea
                  id="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  rows={4}
                  placeholder="Briefly describe your symptoms or reason for the visit..."
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white text-base font-semibold py-3 rounded-lg hover:bg-blue-700 transition active:scale-95 shadow-sm"
              >
                Confirm Appointment
              </button>
            </form>
          </div>
        </div>
      </section>

      <ToastContainer position="top-right" autoClose={2000} />
      <Footer />
    </>
  );
};

export default Appointment;
