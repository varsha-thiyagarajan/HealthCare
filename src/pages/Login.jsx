import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
function Login() {
  return (
    <div>
      <Navbar/>

      <div className="min-h-screen flex items-center justify-center bg-blue-100">

       <div className="text-center bg-white p-8 rounded-xl w-96">
        <h2 className="text-2xl font-semibold mb-4" >Login</h2>
        <input type="email" placeholder="Email" className="w-full border border-gray-300 p-3 rounded-lg mb-4"></input>
        <input type='password' placeholder="password" className="w-full border border-gray-300 p-3 rounded-lg mb-4"></input>
        <button className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-green-500 w-55  hover:shadow-2xl hover:scale-105 transition duration-300">Login</button>
        <h4 className="mt-4 text-sm text-gray-600">  Don't have an account? 
            <Link to="/Register "className="text-black"> Register</Link>
</h4>
       </div>
           
      </div>

    </div>
  )
}

export default Login
