import React, { useState } from "react";
import doctors from "../data/doctors"; // Assuming you have a list of doctors in this file

const DoctorSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const matches = doctors.filter((doc) =>
      doc.name.toLowerCase().includes(value.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredDoctors(matches);
  };

  const handleDoctorSelect = (doctor) => {
    alert(`You selected: ${doctor.name}`);
    setSearchTerm("");
    setFilteredDoctors([]);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search doctors..."
        className="w-full border px-4 py-2 rounded-lg focus:ring focus:ring-blue-300"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {searchTerm && filteredDoctors.length > 0 && (
        <div className="absolute z-10 bg-white border mt-1 rounded-lg shadow w-full max-h-60 overflow-y-auto">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              onClick={() => handleDoctorSelect(doc)}
              className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
            >
              {doc.name} ({doc.specialty})
            </div>
          ))}
        </div>
      )}

      {searchTerm && filteredDoctors.length === 0 && (
        <div className="absolute z-10 bg-white border mt-1 rounded-lg shadow w-full px-4 py-2 text-gray-500">
          No doctors found
        </div>
      )}
    </div>
  );
};

export default DoctorSearch;
