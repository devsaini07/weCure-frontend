import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";
import { API_URL } from "../config"; 
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch(`${API_URL}/auth/login`,{
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if(response.ok) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.user._id);
      console.log(data);
      toast.success("Login successful! 🚀");
      setTimeout(() => {
    navigate("/dashboard");
  }, 1000);
    }else{
      console.log(data);
      alert("Login failed: " + data.message);
    }
  };
  return (
    <>
      {/* <Navbar /> */}
      <section className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-200 flex items-center justify-center px-6 py-12">
        <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-lg border border-blue-100">
          <h1 className="text-4xl font-extrabold text-blue-700 mb-8 text-center animate-fade-in">
            Welcome Back 👋
          </h1>
          <p className="text-center text-gray-500 mb-10 text-lg">
            Please login to your account
          </p>

          <form onSubmit={handleLogin} className="space-y-6">
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
              Login
            </button>
          </form>

          <p className="text-center text-gray-500 mt-8 text-sm">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-blue-600 hover:underline font-medium"
            >
              Sign Up
            </a>
          </p>
        </div>
      </section>
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </>
  );
};
export default Login;
