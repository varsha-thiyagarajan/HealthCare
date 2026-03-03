import React from 'react'
import { useState,useEffect } from 'react';
import doctor from"../assets/doctorSection.png";
import Navbar from '../components/Navbar';
import { Link } from "react-router-dom"
function Doctors() {
    const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/auth/doctors", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        if (data.success) {
          console.log(data.data);
          setDoctors(data.data); 
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchDoctors();
  }, []);
  return (
   
  <div className="max-w-7xl mx-auto p-6">
    <Navbar/>
   <div className="flex items-center justify-between p-6 rounded-xl">

  {/* Left Side Text */}
  <div>
    <h1 className="text-3xl font-bold text-gray-800">
      DOCTORS ARE OUR HEROES
    </h1>
    <p className="text-gray-500 mt-2">
      Meet our expert team dedicated to your care
    </p>
  </div>

  {/* Right Side Image */}
  <img
    src={doctor}
    alt="Doctors"
    className="w-64 object-contain"
  />

</div>
  {/* Heading Section */}
  <div className="text-center mb-8">
    <h1 className="text-4xl font-bold text-gray-800">
      OUR <span className="text-blue-600">DOCTORS</span>
    </h1>
    <p className="text-gray-500 mt-2">
      Meet our experienced specialists dedicated to your care
    </p>
  </div>

  {/* Main Container */}
  <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 rounded-3xl p-8 shadow-xl">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {doctors.map((doctor, index) => (
        <div
          key={index}
          className="
            group
            bg-white/90
            backdrop-blur-lg
            border border-blue-100
            rounded-2xl
            p-6
            shadow-md
            transition-all duration-300
            hover:shadow-2xl
            hover:-translate-y-2
            hover:scale-[1.02]
          "
        >



          {/* Doctor Info */}
          <h2 className="text-xl text-center font-bold text-gray-800 group-hover:text-blue-600 transition">
            {doctor.name}
          </h2>

          <p className="text-center text-gray-500 mt-1">
            {doctor.specialization}
          </p>

          <div className="flex gap-3 mt-5 justify-center">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              View Profile
            </button>

            <Link to="/appointment" className="px-4 py-2 bg-blue-100 text-blue-700 font-semibold rounded-lg hover:bg-blue-200 transition">
              Book Appointment
            </Link>
          </div>

        </div>
      ))}

    </div>
  </div>
</div>
  );
}

export default Doctors
