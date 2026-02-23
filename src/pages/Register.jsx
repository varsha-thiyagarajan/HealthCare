import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    const userData = {
      name,
      email,
      password,
    };

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      const result = await response.json();
      if (response.status === 400) {
        setMessage("Email already exists. Redirecting to login...");

        setTimeout(() => {
          navigate("/login");
        }, 1500);

        return;
      }
      if (result.success) {
        localStorage.setItem("isLoggedIn", "true");

        setMessage("Registered Successfully. Redirecting...");

        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
    } catch (error) {
      console.error(error);
      setMessage("Server error. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-blue-100">
        <div className="text-center bg-white p-8 rounded-xl w-96 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Register</h2>
          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 p-3 rounded-lg mb-4"
              required
            />

            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 p-3 rounded-lg mb-4"
              required
            />

            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 p-3 rounded-lg mb-4"
              required
            />

            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder="Confirm Password"
              className="w-full border border-gray-300 p-3 rounded-lg mb-4"
              required
            />

            <button
              type="submit"
              className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-green-500 w-full text-white hover:shadow-2xl hover:scale-105 transition duration-300"
            >
              Register
            </button>
          </form>

          {message && (
            <p className="text-green-600 font-semibold mt-3 animate-bounce">
              {message}
            </p>
          )}

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