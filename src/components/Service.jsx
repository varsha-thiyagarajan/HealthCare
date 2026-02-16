import im from "../assets/bookapp.png"
import vi from "../assets/vi.png"
import ma from "../assets/ma.png"
function Service()
{
    return(
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
      Our Services
    </h2 >
        <div
        className="grid grid-cols-3 gap-4 place-items-center ">
       <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 hover:scale-105 
transition-all duration-300 cursor-pointer">
       <h3 className="text-xl font-semibold mb-2 ">Book Appointments</h3>
       <p className="text-gray-600">
          Easily schedule appointments with available doctors.
        </p>
 <img 
                        src={im} 
                        alt="Hospital Logo" 
                        className="h-56 w-56  object-contain mx-auto"

                      />
        
       </div>
       <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 hover:scale-105 
transition-all duration-300 cursor-pointer">
        <h3 className="text-xl font-semibold mb-2">
          View Doctors
        </h3>
        <p className="text-gray-600">
          Browse and connect with qualified healthcare professionals.
        </p>
        <img 
                        src={vi} 
                        alt="Hospital Logo" 
                        className="h-56 w-56  object-contain mx-auto"

                      />
      </div>
       <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 hover:scale-105 
transition-all duration-300 cursor-pointer">
         <h3 className="text-xl font-semibold mb-2">
          Medical Records
        </h3>
        <p className="text-gray-600">
          Securely access and manage your medical history.
        </p>
        <img 
                        src={ma} 
                        alt="Hospital Logo" 
                        className="h-56 w-56 object-contain mx-auto"

                      />
       </div>
        </div>
        </div>
    )
}
export default Service