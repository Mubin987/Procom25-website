import { motion } from "framer-motion";
import {FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Speaker = ({name, desc, img})=> {

return(
    <motion.div className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-6 w-64"
    whileHover={{
        scale: 1.1, // Slightly enlarges the image on hover
        transition: { duration: 0.2, ease: "easeOut" },
      }}
    >
    <img
        className="w-24 h-24 rounded-full object-cover shadow-md"
        src={img} 
        alt="Profile picture"
    />
    <div className="mt-4 text-center">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-500">{desc}</p>
        <div className="flex flex-row mt-4 justify-start">
        <div className="flex mt-6 space-x-4 justify-center items-center">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors"><FaXTwitter size={24} /></a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-blue-500 transition-colors"
      >
        <FaLinkedin size={24} />
      </a>
    </div>
        </div>
    </div>
    </motion.div>
    )


}

export default Speaker