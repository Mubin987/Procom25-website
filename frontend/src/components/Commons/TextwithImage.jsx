import { motion } from "framer-motion"

const TextwithImge = ({text, image})=> {

    return(
        <div  className="flex flex-wrap justify-around items-start gap-6"> 
        <div className="w-full sm:w-3/4 md:w-1/2 lg:w-50 self-start mt-2">
          <p className="text-lg text-justify ">{text}</p>
        </div>
        <motion.div className="w-full sm:w-3/4 md:w-1/3 lg:w-1/3 flex justify-center"
        whileHover={{
            scale: 1.1, // Slightly enlarges the image on hover
            transition: { duration: 0.2, ease: "easeOut" },
          }}        
        
        >
          <img src={image} alt="PROCOM '24" className="mx-auto rounded-xl border-themeBlue border-4 shadow-lg h-[300px]" />
        </motion.div>
      </div>
    )
}

export default TextwithImge

