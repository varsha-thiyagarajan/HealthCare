import React from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header className="w-full ">
      <div className="flex items-center justify-between px-10 py-3 mt-2">

        <div className="flex items-center gap-3 ml-10">
          
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
  HealthCare 
</h1>
        </div>

        <nav className="flex items-center gap-8 text-black font-medium">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <a href="#" className="hover:text-blue-600 transition">About</a>
          <a href="#" className="hover:text-blue-600 transition">Contact</a>
        </nav>

        <Link to="/login" className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
          Login
        </Link>

      </div>
    </header>
  );
}

export default Navbar;
