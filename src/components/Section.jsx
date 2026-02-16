import {motion} from "framer-motion"
import logo from "../assets/Logo.png";
import doctor from"../assets/do.png";
function Section()
{
    return(
        <div className=" flex-items-center justify-center px-6">
<div className="max-w-8xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
    <motion.div
     initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}>
            <img 
                        src={logo} 
                        alt="Hospital Logo" 
                        className="h-30 md:h-30 w-auto object-contain"
                      />
                        {/* <img
            src={doctor}
            alt="Doctor"
            className=" h-46w-64" */}
          {/* /> */}
          </motion.div>
          <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          
        >
<h2 className="text-4xl md:text-5xl font-bold leading-tight">
  <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
    Smart
  </span>,{" "}
  <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
    Secure
  </span>, and{" "}
  <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
    Easy
  </span>{" "}
  <span className="text-gray-800">
    healthcare management.
  </span>
</h2>
        </motion.div>
         <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={doctor}
            alt="Doctor"
            className=" h-46w-64"
          />
        </motion.div>

</div>
        </div>
        
    )
}
export default Section