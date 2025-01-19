import React from "react";
import { Hero } from "@/components";
import Heading1 from "@/components/Commons/Heading1";
import devTeam from "../../public/Data/dev-team-data.json";

const Card = ({ title, img, name, className, type }) => {
  return (
    <div className={`rounded-3xl w-[250px] h-[200px] aspect- flex ` + className}>
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
    </div>
  );
}

export const About_us = () => {

  const ExcomList = [
    { title: "Vice president", name: "Muhammad Mujtaba", imgSrc: "https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737143264/Muhammad_Mujtaba.png" },
    { title: "President", name: "Hasnain Raza", imgSrc: "https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737135696/hasnain_raza.png" },
    { title: "Vice president", name: "Hussain Malik", imgSrc: "https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737141256/hussain_malik.png" },
    { title: "Director Marketing", name: "Sareem Farooqui", imgSrc: "https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737143339/Sareem_Farooqui.png" },
    { title: "Director Computing", name: "Mubin Farid", imgSrc: "https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737143320/Mubin_Farid.png" },
    { title: "Secretary", name: "Muhammad Abdullah", imgSrc: "https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737141877/Muhammad_Abdullah.png" },
    { title: "General Secretary", name: "Mehreen Saghar", imgSrc: "https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737141890/Mehreen_Saghar.png" },
    { title: "Director Business", name: "Bakhtawar Azhar", imgSrc: "https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737143278/Bakhtawar_Azhar.png" },
    { title: "Director Branding", name: "Hasan Iqbal", imgSrc: "https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737143290/Hasan_Iqbal.png" },
    { title: "Director GR", name: "Bisma Abid", imgSrc: "https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737143296/Bisma_Abid.png" },
    { title: "Director EE", name: "Hammad Rana", imgSrc: "https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737143310/Hammad_Rana.png" },
    { title: "Treasurer", name: "Shahmir Raza", imgSrc: "https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737143351/shahmir%20Raza.png" },
    { title: "Event Administrator", name: "Usman Nisar", imgSrc: "https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737143361/Usman_Nisar.png" }
  ]



  return (
    <div style={{ minHeight: "100vh" }} className="mb-20">
      <Hero pageType={"Home"} />
      <div className="w-full flex justify-center items-center gap-8 flex-col mt-28">
        <Heading1 text={"EXECUTIVE COMMITTEE"} />
        <div className="w-full flex justify-center items-center flex-wrap gap-10 md:mt-5">
          <Card title={ExcomList[0].title} img={ExcomList[0].imgSrc} name={ExcomList[0].name} className="" />
          <Card title={ExcomList[1].title} img={ExcomList[1].imgSrc} name={ExcomList[1].name} className="md:-mt-14" />
          <Card title={ExcomList[2].title} img={ExcomList[2].imgSrc} name={ExcomList[2].name} className="" />
        </div>
        <div className="w-full flex justify-center items-center flex-wrap gap-10">
          {ExcomList.slice(3).map((item, index) => (
            <Card key={index} title={item.title} img={item.imgSrc} name={item.name} />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center items-center gap-8 flex-col mt-24">
        <Heading1 text={"DEVELOPMENT TEAM"} />
        <div className="w-full flex justify-center items-center flex-wrap gap-10 md:mt-5">
          <Card type={"dev"} title={devTeam[2].role} img={devTeam[2].image_url} name={devTeam[2].person_name} className="" />
          <Card type={"dev"} title={devTeam[0].role} img={devTeam[0].image_url} name={devTeam[0].person_name} className="md:-mt-14" />
          <Card type={"dev"} title={devTeam[1].role} img={devTeam[1].image_url} name={devTeam[1].person_name} className="" />
        </div>
        <div className="w-full flex justify-center items-center flex-wrap gap-10">
          {devTeam.slice(3).map((item, index) => (
            <Card type={"dev"} title={item.role} img={item.image_url} name={item.person_name} />
          ))}
        </div>
      </div>
    </div>
  );
};
