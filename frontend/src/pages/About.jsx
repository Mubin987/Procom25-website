import React from "react";
import { Hero } from "@/components";
import AboutUsHero from "@/components/Aboutus/AboutUsHero";
import Heading1 from "@/components/Commons/Heading1";
import devTeam from "../../public/Data/dev-team-data.json";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About_us_text = ()=>{
  const ref = useRef(null); // Create a ref for the element
  const {inView} = useInView(ref, {
    triggerOnce: false,
    threshold: 0.5,
  });


  return(
    <div  className="w-full flex justify-center items-center gap-8 flex-col md:flex-row">
    <motion.div ref={ref} className="md:w-2/3"
                initial={{ opacity: 0, y: 20 }} // Hidden state (faded and below position)
                animate={inView ? { opacity: 0, y: 0 }: { opacity: 1, y: 20 }} // Visible state (fully visible and in place)
                transition={{ duration: 1, ease: "easeOut" }} // Smooth transition          
    >
      <p className="text-lg text-justify">PROCOM (Programming Competition) is one of the most prestigious and long-standing events at FAST NUCES, Karachi
        that began in the year 1998, playing a pivotal role in shaping the university's reputation within the tech community
        of Pakistan. Over the past 25 years, PROCOM has become a platform that not only fosters innovation and competition but
        also connects academia with industry professionals. The event features a variety of technical competitions, including
        speed programming, web development, Al challenges, robotics,  cybersecurity and business contests, which attract
        talented students from all over Pakistan. PROCOM is recognized for its ability to challenge students' intelligence and
        technical skills, while giving them real-world exposure. Additionally, it acts as a bridge between students and the professional
        world by organizing panel discussions, a startup showcase and a grand job fair that help students build industry connections,
        gain insights, and prepare for their future careers. With its reputation for drawing top talent and industry attention,
        PROCOM is a cornerstone of FAST NUCES Karachi's mission to develop and promote tech talent in the country.</p>
    </motion.div>
    <div className="md:w-1/3">
      <img src="uniImage/uni_u6luqh.jpg" alt="PROCOM '24" className="mx-auto rounded-xl border-themeBlue border-4 shadow-lg h-[450px]" />
    </div>
  </div>
  )
}


const Card = ({ title, img, name, className, type }) => {

  return (
    <motion.div className={`rounded-3xl w-[250px] h-[200px] aspect- flex ` + className}
    whileHover={{
      y: -10, // Moves the container upward on hover
      transition: { duration: 0.3, ease: "easeOut" }, // Smooth and responsive
    }}>
      <div className="rounded-l-3xl font-montserrate w-[20%] bg-[linear-gradient(180deg,_#1F95ED_0%,_#2169D4_100%)] flex justify-center items-center">
        <p className="uppercase writing-mode-vertical -rotate-90 text-center text-xl text-white leading-5">{title}</p>
      </div>
      <div
        className="w-[80%] relative rounded-r-3xl bg-center bg-cover flex text-center justify-center items-end"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="bg-themeBlue/30 w-full rounded-br-3xl">
          <p className={`${type !== 'dev' ? "hidden" : "block text-white font-montserrate"}`}>{name}</p>
        </div>
      </div>
    </motion.div>
  );
}

export const About_us = () => {

  const ExcomList = [
    { title: "Vice president", name: "Muhammad Mujtaba", imgSrc: "/ExCom/Muhammad_Mujtaba.png" },
    { title: "President", name: "Hasnain Raza", imgSrc: "/ExCom/hasnain_raza.png" },
    { title: "Vice president", name: "Hussain Malik", imgSrc: "/ExCom/hussain_malik.png" },
    { title: "Director Marketing", name: "Sareem Farooqui", imgSrc: "/ExCom/Sareem_Farooqui.png" },
    { title: "Director Computing", name: "Mubin Farid", imgSrc: "https://res.cloudinary.com/dpjy0sbxe/image/upload/w_350/v1737143320/Mubin_Farid.png" },
    { title: "Secretary", name: "Muhammad Abdullah", imgSrc: "/ExCom/Muhammad_Abdullah.png" },
    { title: "General Secretary", name: "Mehreen Saghar", imgSrc: "/ExCom/Mehreen_Saghar.png" },
    { title: "Director Business", name: "Bakhtawar Azhar", imgSrc: "/ExCom/Bakhtawar_Azhar.png" },
    { title: "Director Branding", name: "Hasan Iqbal", imgSrc: "/ExCom/Hasan_Iqbal.png" },
    { title: "Director GR", name: "Bisma Abid", imgSrc: "/ExCom/Bisma_Abid.png" },
    { title: "Director EE", name: "Hammad Rana", imgSrc: "/ExCom/Hammad_Rana.png" },
    { title: "Treasurer", name: "Shahmir Raza", imgSrc: "/ExCom/shahmir%20Raza.png" },
    { title: "Event Administrator", name: "Usman Nisar", imgSrc: "/ExCom/Usman_Nisar.png" },
    { title: "Corporate Affairs", name: "Usman Yameen", imgSrc: "/ExCom/usman_yameen_sftx8b.png" }
  ]



  return (
    <div style={{ minHeight: "100vh" }} className="mb-20">
      <AboutUsHero />
      <div className="w-[80%] mx-auto flex gap-2 justify-center mt-36 flex-col">
        <Heading1 text={"ABOUT PROCOM '25"} />
        <About_us_text />
      </div>
      <div className="w-full flex justify-center items-center gap-8 flex-col mt-28">
        <Heading1 text={"EXECUTIVE COMMITTEE"} className="text-custom" />
        <div className="w-full flex justify-center items-center flex-wrap gap-10 md:mt-5">
          <Card title={ExcomList[0].title} img={ExcomList[0].imgSrc} name={ExcomList[0].name} className="shadow-lg order-2 md:order-1" />
          <Card title={ExcomList[1].title} img={ExcomList[1].imgSrc} name={ExcomList[1].name} className="md:-mt-14 shadow-lg order-1 md:order-2" />
          <Card title={ExcomList[2].title} img={ExcomList[2].imgSrc} name={ExcomList[2].name} className="shadow-lg order-3" />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {ExcomList.slice(3).map((item, index) => (
            <Card
              key={index}
              title={item.title}
              img={item.imgSrc}
              name={item.name}
              className={`shadow-lg ${
                // If this is the last item and we're on lg breakpoint, move it to the second column
                index === ExcomList.slice(3).length - 1 ? 'lg:col-start-2 xl:col-start-auto' : ''
                }`}
            />
          ))}
        </div>



      </div>
      <div className="w-full flex justify-center items-center gap-8 flex-col mt-24">
        <Heading1 text={"DEVELOPMENT TEAM"} className="text-custom" />
        <div className="w-full flex justify-center items-center flex-wrap gap-10 md:mt-5">
          <Card type={"dev"} title={devTeam[2].role} img={devTeam[2].image_url} name={devTeam[2].person_name} className="shadow-lg order-2 md:order-1" />
          <Card type={"dev"} title={devTeam[0].role} img={devTeam[0].image_url} name={devTeam[0].person_name} className="md:-mt-14 shadow-lg order-1 md:order-2" />
          <Card type={"dev"} title={devTeam[1].role} img={devTeam[1].image_url} name={devTeam[1].person_name} className="shadow-lg order-3" />
        </div>
        <div className="w-full flex justify-center items-center flex-wrap gap-10">
          {devTeam.slice(3).map((item, index) => (
            <Card key={index} type={"dev"} title={item.role} img={item.image_url} name={item.person_name} className="shadow-lg" />
          ))}
        </div>
      </div>
    </div>
  );
};
