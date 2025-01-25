const TextwithImge = ({text, image})=> {

    return(
        <div  className="flex flex-wrap justify-center items-start gap-8"> 
        <div className="w-full sm:w-3/4 md:w-1/2 lg:w-50 self-start mt-2">
          <p className="text-lg text-justify ">{text}</p>
        </div>
        <div className="w-full sm:w-3/4 md:w-1/3 lg:w-1/3 flex justify-center">
          <img src={image} alt="PROCOM '24" className="mx-auto rounded-xl border-themeBlue border-4 shadow-lg h-[350px]" />
        </div>
      </div>
    )
}

export default TextwithImge

