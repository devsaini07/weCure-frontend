// src/pages/Dashboard.jsx

import React, { useEffect, useState } from "react";
import { API_URL } from "../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await fetch(`${API_URL}/appointments`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setAppointments(data);
        } else {
          toast.error("Failed to load appointments");
        }
      } catch (error) {
        console.error("Error fetching appointments:", error);
        toast.error("Something went wrong");
      }
    };

    fetchAppointments();
  }, []);

  return (
    <>
      
      <section className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 py-12 px-6">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-8 text-center">
          My Appointments
        </h1>

        {appointments.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">
            You have no booked appointments.
          </p>
        ) : (
          <div className="space-y-4 max-w-3xl mx-auto">
            {appointments.map((appt) => (
              <div
                key={appt._id}
                className="bg-white p-6 rounded-xl shadow-md border border-blue-100"
              >
                <h2 className="text-2xl font-bold text-blue-600 mb-2">
                  {appt.doctor}
                </h2>
                <p className="text-gray-700 mb-1">
                  <strong>Date:</strong> {appt.date}
                </p>
                <p className="text-gray-700 mb-1">
                  <strong>Time:</strong> {appt.timeSlot}
                </p>
                <p className="text-gray-700 mb-1">
                  <strong>Reason:</strong> {appt.reason}
                </p>
                <p className="text-gray-700 mb-1">
                  <strong>Status:</strong> {appt.status}
                </p>
              </div>
            ))}
          </div>
        )}

        <ToastContainer position="top-right" autoClose={3000} />
      </section>
      <Footer />
    </>
  );
};

export default Dashboard;
