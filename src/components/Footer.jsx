import { Link } from "react-router-dom"
function Footer()
{
    return(
    <footer className="bg-blue-300 text-black mt-10">
  
  <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6">
    
  
    <div>
      <h2 className="text-xl font-semibold mb-3">HealthCare Hospital</h2>
      <p className="text-black">
        Smart, Secure, and Easy healthcare management. 
        Book appointments and manage medical records easily.
      </p>
    </div>

   
    <div>
      <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
      <ul className="space-y-2 text-black ">
        <li><a href="#" className="hover:text-white">Home</a></li>
        <li><a href="#" className="hover:text-white">About</a></li>
        <li><a href="#" className="hover:text-white">Contact</a></li>
        <li><Link to="/login" className="hover:text-white">Login</Link></li>
      </ul>
    </div>
    <div>
      <h2 className="text-xl font-semibold mb-3">Contact</h2>
      <p className="text-black">Email: healthcare@gmail.com</p>
      <p className="text-black">Phone: +91 9876543210</p>
      <p className="text-black">Location: Chennai, India</p>
    </div>

  </div>

  <div className="text-center text-black  border-t border-gray-700 py-4">
    © 2026 HealthCare Hospital. All rights reserved.
  </div>

</footer>
    )

}
export default Footer