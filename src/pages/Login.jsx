import Navbar from "../components/Navbar"
import { Link,useNavigate } from "react-router-dom"
import { useState } from "react"
function Login() {
    const navigate = useNavigate();
  const [email,setEmail]=useState("")
  const[password,setPassword]=useState("")
   const [message, setMessage] = useState("");
   const handleSubmit=async(e)=>{
    e.preventDefault();
    const UserData={
      email,password
    }
  try{
    const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(UserData),
        }
      );
      const data=await response.json()
      if(response.status==400)
      {
        setMessage(data.message)
        return;
      }
      if(data.success)
      {
        localStorage.setItem("isLoggedIn", "true");

        setMessage("Login successful. Redirecting...");

        setTimeout(() => {
          navigate("/");
        }, 1500);
      
      }
  }
  catch{
 setMessage("Server error");
  }
   }
  return (
    <div>
      <Navbar/>

      <div className="min-h-screen flex items-center justify-center bg-blue-100">
       <div className="text-center bg-white p-8 rounded-xl w-96">
        <h2 className="text-2xl font-semibold mb-4" >Login</h2>
        <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" className="w-full border border-gray-300 p-3 rounded-lg mb-4" onChange={(e)=>setEmail(e.target.value)}></input>
        <input type='password' placeholder="password" className="w-full border border-gray-300 p-3 rounded-lg mb-4" onChange={(e)=>setPassword(e.target.value)}></input>
        <button type="submit" className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-green-500 w-55  hover:shadow-2xl hover:scale-105 transition duration-300">Login</button>
        </form>
         {message && (
            <p className="text-green-600 font-semibold mt-3">
              {message}
            </p>
          )}
        <h4 className="mt-4 text-sm text-gray-600">  Don't have an account? 
            <Link to="/register "className="text-black"> Register</Link>
</h4>
       </div>
           
      </div>

    </div>
  )
}

export default Login
