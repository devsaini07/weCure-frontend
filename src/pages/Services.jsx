import React from "react";
import Navbar from "./Navbar"; // Make sure the path is correct
import Footer from "./Footer"; // Make sure the path is correct

// Your services data remains the same
const services = [
  {
    id: 1,
    title: "Appointment Booking",
    description: "Easily book appointments with top doctors through our platform.",
    icon: ( // Replaced emoji with SVG component
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M12 12.75h.008v.008H12v-.008z" /></svg>
    ),
  },
  {
    id: 2,
    title: "Medicine Delivery",
    description: "Order medicines online and get them delivered to your doorstep.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
  },
  {
    id: 3,
    title: "Ambulance Service",
    description: "Quick ambulance service available 24/7 for emergencies.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>
    ),
  },
  {
    id: 4,
    title: "Online Consultancy (Coming Soon)",
    description: "Get expert advice from doctors via online video consultations.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
    ),
  },
  {
    id: 5,
    title: "Lab Tests (Coming Soon)",
    description: "Book lab tests from the comfort of your home.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
    ),
  },
  {
    id: 6,
    title: "Health Packages (Coming Soon)",
    description: "Affordable health checkup packages for you and your family.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
    ),
  },
];

const Services = () => {
  return (
    <>
      <Navbar />
      
      <section className="min-h-screen bg-slate-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-800 tracking-tight">Our Services</h1>
            <p className="mt-3 text-lg max-w-2xl mx-auto text-slate-600">
              Providing comprehensive and compassionate healthcare solutions for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const isComingSoon = service.title.includes("(Coming Soon)");
              
              return (
                <div
                  key={service.id}
                  className={`bg-white p-8 rounded-xl shadow-sm border border-slate-200 transition-all duration-300
                    ${isComingSoon 
                      ? 'opacity-60 cursor-not-allowed' 
                      : 'hover:shadow-lg hover:border-blue-300 hover:-translate-y-1'
                    }`
                  }
                >
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                    {service.icon}
                  </div>
                  
                  <h2 className="text-2xl font-semibold text-slate-800 mb-2 flex items-center gap-x-2">
                    {service.title.replace(" (Coming Soon)", "")}
                    {isComingSoon && (
                      <span className="text-xs font-medium bg-slate-200 text-slate-600 px-2 py-1 rounded-full">
                        Soon
                      </span>
                    )}
                  </h2>
                  
                  <p className="text-slate-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;