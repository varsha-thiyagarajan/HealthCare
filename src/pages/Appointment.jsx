import React from 'react'
import Navbar from '../components/Navbar'
function Appointment() {
  return (
    <div>
      <Navbar/>
    <div className="min-h-screen flex item-center justify-center  bg-blue-100">
      
      <div className="bg-white  text-center rounded-lg p-10 m-10 w-1/2">
      <h1 className=" text-2xl font-semibold mb-4">Book Appointment</h1>
      <form>
         <input 
  type="text" 
  placeholder="Enter your name" 
  className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-200"
>
</input>

         <input type="text" placeholder="Enter your phone number" className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-200"></input>
         <input type="number" placeholder="Enter your age" className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-200"></input>
         <div className="flex gap-6 w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-200">
         <label>Gender:</label>
         <label><input type="radio" name="gender" value="female"></input><span>Female</span></label>
         <label><input type="radio" name="gender" value="male"></input><span>Male</span></label>
         
         </div>
         <select class="w-full border border-gray-300 rounded-lg px-3 py-2 
               bg-white shadow-sm 
               focus:outline-none focus:ring-2 focus:ring-indigo-500 
               focus:border-indigo-500">
  <option value="">Normal Checkup</option>
  <option value="male">Serious Condition</option>
  <option value="female">Follow-up</option>
  <option value="female">Long Consultation</option>
  
</select>
<textarea
  rows="5"
  placeholder="Describe the issue in detail..."
  class="w-full mt-4 border border-gray-300 rounded-lg px-3 py-2 
         shadow-sm bg-white
         focus:outline-none focus:ring-2 focus:ring-indigo-500 
         focus:border-indigo-500">
</textarea>
 <button type="submit" className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-green-500 w-55  hover:shadow-2xl hover:scale-105 transition duration-300">Next</button>
      </form>

      </div>
     </div>
    </div>
  )
}

export default Appointment
