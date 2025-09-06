import React from "react";
import Navbar from "./Navbar";

import Footer from "./Footer";

const Home = () => {
  return (
    // AFTER: Professionally redesigned homepage sections
    <>
      {/* Section 1: "How It Works" - Cleaner, with better icons and numbering */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 tracking-tight">
              Simpler Queue to Better Health
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Booking your next appointment is as easy as one, two, three.
            </p>
          </div>

          {/* Step Cards - Now with a connecting line for visual flow on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="relative flex items-center justify-center bg-blue-50 h-20 w-20 rounded-full mb-6">
                <span className="absolute -top-2 -left-2 text-5xl font-bold text-slate-200">
                  01
                </span>
                {/* Icon: Search Doctor */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Search Doctors
              </h3>
              <p className="text-slate-600">
                Find top-rated specialists and clinics near you with our smart
                search.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="relative flex items-center justify-center bg-blue-50 h-20 w-20 rounded-full mb-6">
                <span className="absolute -top-2 -left-2 text-5xl font-bold text-slate-200">
                  02
                </span>
                {/* Icon: Select Time */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M12 12.75h.008v.008H12v-.008z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Select a Time
              </h3>
              <p className="text-slate-600">
                View real-time availability and choose a slot that fits your
                schedule.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="relative flex items-center justify-center bg-blue-50 h-20 w-20 rounded-full mb-6">
                <span className="absolute -top-2 -left-2 text-5xl font-bold text-slate-200">
                  03
                </span>
                {/* Icon: Book It */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Confirm & Go
              </h3>
              <p className="text-slate-600">
                Get instant confirmation and reminders for your upcoming visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: "Why Choose Us" - Refined layout and consistent branding */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Your Health, Reimagined
          </h2>
          <p className="text-lg text-slate-600 mb-16 max-w-3xl mx-auto">
            We're committed to making your healthcare experience simpler,
            smarter, and more accessible.
          </p>

          {/* Feature Cards - Switched to a more balanced 4-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-teal-50 flex items-center justify-center h-16 w-16 rounded-full mx-auto mb-6">
                {/* Icon: Trusted Professionals */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-teal-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Trusted Professionals
              </h3>
              <p className="text-slate-600 text-sm">
                Access a network of highly qualified and verified medical
                experts.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-teal-50 flex items-center justify-center h-16 w-16 rounded-full mx-auto mb-6">
                {/* Icon: Easy Bookings */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-teal-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M12 12.75h.008v.008H12v-.008z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                24/7 Easy Booking
              </h3>
              <p className="text-slate-600 text-sm">
                Schedule, reschedule, or cancel appointments anytime, anywhere.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-teal-50 flex items-center justify-center h-16 w-16 rounded-full mx-auto mb-6">
                {/* Icon: Secure & Reliable */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-teal-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                Secure & Reliable
              </h3>
              <p className="text-slate-600 text-sm">
                Your personal health information is kept safe and confidential.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-teal-50 flex items-center justify-center h-16 w-16 rounded-full mx-auto mb-6">
                {/* Icon: Smart Assistant */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-teal-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                AI-Powered Care
              </h3>
              <p className="text-slate-600 text-sm">
                Use our intelligent assistant to find the right care, faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Call to Action - Stronger, clearer buttons */}
      <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
        {/* Background Image - Placeholder for your smooth image */}
        {/* Replace '/path/to/your/image.jpg' with your actual image path */}
        <div
          className="absolute inset-0 bg-[url('/path/to/your/smooth-healthcare-background.jpg')] bg-cover bg-center bg-no-repeat"
          aria-hidden="true"
        ></div>

        {/* Overlay to ensure text readability and theme consistency */}
        <div className="absolute inset-0 bg-blue-800/70 z-0"></div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 text-shadow-lg">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-12 max-w-2xl mx-auto text-shadow-md">
            Find expert doctors and book your next appointment online today.
            Fast, reliable, and entirely focused on your well-being.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button
              className="bg-white text-blue-700 font-bold text-lg px-10 py-4 rounded-xl shadow-lg hover:bg-slate-100 transform hover:-translate-y-1 transition-all duration-300 ring-2 ring-white/50"
              onClick={() => {
                window.location.href = "/ourdoctors";
              }}
            >
              Book an Appointment
            </button>
            <button
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold text-lg px-10 py-4 rounded-xl shadow-lg hover:bg-white hover:text-blue-700 transform hover:-translate-y-1 transition-all duration-300"
              onClick={() => {
                window.location.href = "/ai";
              }}
            >
              Use AI Assistant
            </button>
          </div>
        </div>
      </section>

      {/* Your existing Footer Section */}
      <section>
        <Footer />
      </section>
    </>
  );
};
export default Home;
