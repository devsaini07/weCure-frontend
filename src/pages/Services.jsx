import React from "react";
import Footer from "./Footer";

const services = [
  {
    id: 1,
    title: "Appointment Booking",
    description: "Easily book appointments with top doctors through our platform.",
    icon: "📅",
  },
  {
    id: 2,
    title: "Medicine Delivery",
    description: "Order medicines online and get them delivered to your doorstep.",
    icon: "💊",
  },
  {
    id: 3,
    title: "Ambulance Service",
    description: "Quick ambulance service available 24/7 for emergencies.",
    icon: "🚑",
  },
  {
    id: 4,
    title: "Online Consultancy (Coming Soon)",
    description: "Get expert advice from doctors via online video consultations.",
    icon: "💻",
  },
  {
    id: 5,
    title: "Lab Tests (Coming Soon)",
    description: "Book lab tests from the comfort of your home.",
    icon: "🧪",
  },
  {
    id: 6,
    title: "Health Packages (Coming Soon)",
    description: "Affordable health checkup packages for you and your family.",
    icon: "🩺",
  },
];

const Services = () => {
  return (
    <>
      <section className="bg-blue-50 py-12 px-8">
        <h1 className="text-center text-4xl font-bold mb-10 text-blue-900">
          Our Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
