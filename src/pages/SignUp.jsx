// Signup.jsx

import React, { useState } from "react"; // Adjust the import path as necessary
const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    const API_URL = import.meta.env.VITE_API_URL + "/api";
    const fullUrl = `${API_URL}/api/auth/signup`; // Or your specific path

    // --- ADD THIS LINE ---
    console.log("Attempting to fetch:", fullUrl);
    const response = await fetch(fullUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Signup successful! Please login.");
      // Optionally redirect to login page
      window.location.href = "/login";
    } else {
      alert(data.msg);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-200 flex items-center justify-center px-6 py-12">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-lg border border-blue-100">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-8 text-center animate-fade-in">
          Create an Account 🚀
        </h1>
        <p className="text-center text-gray-500 mb-10 text-lg">
          Sign up to get started
        </p>

        <form onSubmit={handleSignup} className="space-y-6">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-700 font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="John"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div className="w-1/2">
              <label className="block text-gray-700 font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="Doe"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white text-lg font-semibold py-3 rounded-xl hover:bg-blue-700 transition active:scale-95"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-500 mt-8 text-sm">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-600 hover:underline font-medium"
          >
            Login
          </a>
        </p>
      </div>
    </section>
  );
};

export default Signup;
