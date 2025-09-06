// src/pages/Dashboard.jsx

import React, { useEffect, useState } from "react";
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
        const API_URL = "https://wecure-backend.onrender.com";
        const response = await fetch(`${API_URL}/api/appointments`, {
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

  // Prepare data for rendering before the return statement
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize to the start of the day for accurate comparison

  const upcomingAppointments = appointments
    .filter(appt => new Date(appt.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const pastAppointments = appointments
    .filter(appt => new Date(appt.date) < today)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const getStatusStyles = (status) => {
    switch (status?.toLowerCase()) {
      case 'confirmed': return 'bg-green-100 text-green-800 ring-green-600/20';
      case 'completed': return 'bg-slate-100 text-slate-800 ring-slate-600/20';
      case 'cancelled': return 'bg-red-100 text-red-800 ring-red-600/20';
      default: return 'bg-yellow-100 text-yellow-800 ring-yellow-600/20';
    }
  };

  return (
    <>
      <Navbar />
      
      <section className="min-h-screen bg-slate-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 tracking-tight">
              My Appointments
            </h1>
            <p className="mt-3 text-lg text-slate-600">
              Review your upcoming visits and past appointment history.
            </p>
          </div>

          {appointments.length === 0 ? (
            <div className="text-center bg-white p-12 rounded-lg shadow-sm border">
              <h3 className="text-xl font-medium text-slate-800">No Appointments Found</h3>
              <p className="text-slate-500 mt-2">You haven't booked any appointments yet.</p>
              <button className="mt-6 bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Book Your First Appointment
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Left Column: Upcoming Appointments */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-slate-700 border-b pb-3">Upcoming</h2>
                {upcomingAppointments.length > 0 ? (
                  upcomingAppointments.map((appt) => (
                    <div key={appt._id} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold text-blue-600">{appt.doctor}</h3>
                          <p className="text-slate-500 text-sm">Cardiology Specialist</p>
                        </div>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ring-1 ring-inset ${getStatusStyles(appt.status)}`}>
                          {appt.status}
                        </span>
                      </div>
                      <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-slate-500">Date</p>
                          <p className="font-semibold text-slate-800">{new Date(appt.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-500">Time</p>
                          <p className="font-semibold text-slate-800">{appt.timeSlot}</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm font-medium text-slate-500">Reason for Visit</p>
                        <p className="text-slate-700">{appt.reason}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center bg-white p-8 rounded-lg border border-dashed">
                    <p className="text-slate-500">You have no upcoming appointments scheduled.</p>
                  </div>
                )}
              </div>

              {/* Right Column: Past Appointments */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-slate-700 border-b pb-3">History</h2>
                {pastAppointments.length > 0 ? (
                  pastAppointments.map((appt) => (
                    <div key={appt._id} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 opacity-80">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold text-slate-600">{appt.doctor}</h3>
                        </div>
                         <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ring-1 ring-inset ${getStatusStyles('Completed')}`}>
                          Completed
                        </span>
                      </div>
                       <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-slate-500">Date</p>
                          <p className="font-semibold text-slate-800">{new Date(appt.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        </div>
                         <div>
                          <p className="text-sm font-medium text-slate-500">Time</p>
                          <p className="font-semibold text-slate-800">{appt.timeSlot}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center bg-white p-8 rounded-lg border border-dashed">
                     <p className="text-slate-500">You have no past appointment history.</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
      </section>
      
      <Footer />
    </>
  );
};

export default Dashboard;