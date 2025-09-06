// Signup.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleSignup = async (e) => {
    e.preventDefault();
    const API_URL = import.meta.env.VITE_API_URL;
    const response = await fetch(`${API_URL}/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, password }),
    });
    const data = await response.json();

    if (response.ok) {
      toast.success("Signup successful! Please login.");
      // Use navigate for smoother client-side routing
      setTimeout(() => {
        navigate("/login");
      }, 1500); // Give user time to see the toast
    } else {
      toast.error(data.msg || "Signup failed. Please try again.");
    }
  };

  return (
    <>
      <section className="min-h-screen grid lg:grid-cols-2">
        
        {/* Left Column: Branding & Visuals (Consistent with Login Page) */}
        <div className="hidden lg:flex flex-col items-center justify-center bg-blue-600 p-12 text-white text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold mb-4">weCure</h1>
            <h2 className="text-3xl font-semibold mb-4">Join Our Community of Care.</h2>
            <p className="text-blue-100">
              Create an account to manage appointments, access health records, and take control of your well-being.
            </p>
          </div>
        </div>

        {/* Right Column: Signup Form */}
        <div className="flex flex-col items-center justify-center bg-slate-50 p-8 sm:p-12">
          <div className="w-full max-w-md">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Create an Account 🚀</h1>
              <p className="mt-2 text-slate-600">Let's get you started.</p>
            </div>

            <form onSubmit={handleSignup} className="space-y-5">
              {/* First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                  <input id="firstName" type="text" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                  <input id="lastName" type="text" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Doe" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                  </span>
                  <input id="email" type="email" className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 0118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" /></svg>
                  </span>
                  <input id="password" type="password" className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white text-base font-semibold py-3 rounded-lg hover:bg-blue-700 transition active:scale-95 shadow-sm">
                Create Account
              </button>
            </form>

            <p className="text-center text-slate-500 mt-8 text-sm">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 hover:underline font-medium">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </section>

      <ToastContainer position="top-right" autoClose={1500} hideProgressBar={false} />
    </>
  );
};

export default Signup;