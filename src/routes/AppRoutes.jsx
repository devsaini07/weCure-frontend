import React from "react";
import Navbar from "../pages/Navbar";
import Home from "../pages/Home";
import OurDoctors from "../pages/OurDoctors";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";
import Appointment from "../pages/Appointment";
import AIChatAssistant from "../pages/ai";
const AppRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ourdoctors" element={<OurDoctors />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/services" element={<Services />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/appointment" element={<Appointment />} />
                <Route path="/ai" element={<AIChatAssistant/>} />
            </Routes>
        
        </>
    )
}
export default AppRoutes;