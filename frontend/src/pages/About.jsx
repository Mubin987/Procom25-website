import React from "react";
import { FlexibleGrid } from "@/components/Aboutus/FlexibleGrid";
import { Hero } from "@/components";
export const About_us = () => {

  const ExcomList = [
    { title: "vice president", name: "MUHAMMAD MUJTABA", imgSrc: "https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737143264/Muhammad_Mujtaba.png" },
    { title: "President", name: "Hasnain Raza", imgSrc:"https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737135696/hasnain_raza.png" },
    { title: "vice president", name: "Hussain Malik", imgSrc: "https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737141256/hussain_malik.png" },
    { title: "Director Marketing", name: "Sareem Farooqui", imgSrc: "https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737143339/Sareem_Farooqui.png" },
    { title: "Director Computing", name: "Mubin Farid", imgSrc: "https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737143320/Mubin_Farid.png" },
    { title: "Secretary", name: "MUHAMMAD ABDULLAH", imgSrc: "https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737141877/Muhammad_Abdullah.png" },
    { title: "General Secretary", name: "Mehreen Saghar", imgSrc: "https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737141890/Mehreen_Saghar.png" },
    { title: "Director Business", name: "Bakhtawar Azhar", imgSrc: "https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737143278/Bakhtawar_Azhar.png" },
    { title: "Director Branding", name: "Hasan Iqbal", imgSrc: "https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737143290/Hasan_Iqbal.png" },
    { title: "Director GR", name: "Bisma Abid", imgSrc: "https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737143296/Bisma_Abid.png" },
    { title: "Director EE", name: "Hammad Rana", imgSrc: "https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737143310/Hammad_Rana.png" },
    { title: "Treasurer", name: "Shahmir Raza", imgSrc:  "https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737143351/shahmir%20Raza.png" },
    { title: "Event Administrator", name: "Usman Nisar", imgSrc: "https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737143361/Usman_Nisar.png"}
  ]

  return (
    <div style={{ minHeight: "100vh" }}>
      <div className='font-bold' style={{ fontFamily: "'LEMON MILK', Arial, sans-serif" }}>
      <Hero pageType="Aboutus"/>


        {/* Executive Committee */}
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "50px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "68px",
              color: "#333",
              fontWeight: "bold",
              marginBottom: "30px",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)", // Black box shadow
            }}
          >
            EXECUTIVE COMMITTEE
          </h2>
            <FlexibleGrid frameInARow={3} list={ExcomList.slice(0, 3)} />
            <FlexibleGrid frameInARow={4} list={ExcomList.slice(3, 11)} />
            <FlexibleGrid frameInARow={2} list={ExcomList.slice(11, 13)} />
        </section>
{/* ------------------------------------------------------------------------------------------------------------------------------------- */}
        {/* Core Team */}
        <section style={{ padding: "50px", textAlign: "center" }}>
          <h2 style={{ fontSize: "68px", fontWeight: "bold", marginBottom: "80px",
            color: "#333", textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)" }}>CORE TEAM</h2>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
            {/* First Row: 3 Cards */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "50px",
                marginBottom:"50px",
              }}
            >
              {Array(3)
                .fill()
                .map((_, index) => (
                  <div
                    key={`row1-${index}`}
                    style={{
                      position: "relative",
                      textAlign: "center",
                      borderRadius: "40px 40px 40px 40px",
                      padding: "20px",
                      width: "256.66px",
                      height: "200.95px",
                      opacity: "0px",                      
                      background: "linear-gradient(90deg, #1F95ED 0%, #2169D4 100%)",
                      color: "#fff",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "130px",
                        height: "130px",
                        borderRadius: "50%",
                        backgroundColor: "#fff",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src="path-to-your-image.jpg"
                        alt={`Team Member ${index + 1}`}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <h4 style={{ fontSize: "20px", marginTop: "60px", fontStyle:"italic" }}>Name Name</h4>
                    <p style={{ fontSize: "14px", fontWeight: "bold" }}>Director Core Team</p>
                  </div>
                ))}
            </div>

            {/* Second Row: 4 Cards */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "50px",
              }}
            >
              {Array(4)
                .fill()
                .map((_, index) => (
                  <div
                    key={`row2-${index}`}
                    style={{
                      position: "relative",
                      textAlign: "center",
                      borderRadius: "40px 40px 40px 40px",
                      padding: "20px",
                      width: "256.66px",
                      height: "200.95px",
                      opacity: "0px",                      
                      background: "linear-gradient(90deg, #1F95ED 0%, #2169D4 100%)",
                      color: "#fff",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "-50px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "130px",
                        height: "130px",
                        borderRadius: "50%",
                        backgroundColor: "#fff",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src="path-to-your-image.jpg"
                        alt={`Team Member ${index + 4}`}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <h4 style={{ fontSize: "20px", marginTop: "60px", fontStyle:"italic" }}>Name Name</h4>
                    <p style={{ fontSize: "14px", fontWeight: "bold" }}>Director Core Team</p>
                  </div>
                ))}
            </div>
          </div>
        </section>     
      </div>
    </div>
  );
};
