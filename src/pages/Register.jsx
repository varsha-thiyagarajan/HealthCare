import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <Navbar />

<div className="min-h-screen flex items-center justify-center bg-blue-100">

      
              <div className="text-center bg-white p-8 rounded-xl w-96">
           <h2 className="text-2xl font-semibold mb-4" >
            Register
          </h2>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 p-3 rounded-lg mb-4"
          />
          <input
            type="email"
            placeholder="Email"
           className="w-full border border-gray-300 p-3 rounded-lg mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 p-3 rounded-lg mb-4"
          />
          <input
            type="password"
            placeholder="Confirm Password"
           className="w-full border border-gray-300 p-3 rounded-lg mb-4"
          />
         
                   <button className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-green-500 w-55  hover:shadow-2xl hover:scale-105 transition duration-300">Register</button>
          <p className="mt-5 text-sm text-center text-gray-600">
            Already have an account?
            <Link
              to="/login"
              className="text-blue-600 font-semibold ml-1 hover:underline"
            >
              Login
            </Link>
          </p>

        </div>

      </div>
    </div>
  );
}

export default Register;
