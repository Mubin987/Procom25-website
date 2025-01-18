import React from "react";

export const About_us = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <div className='font-bold' style={{ fontFamily: "'LEMON MILK', Arial, sans-serif" }}>
        {/* About Section */}
        <section
          id="about"
          style={{
            display: "flex",
            paddingTop: "80px", // Adjust padding to avoid overlap with navbar
            paddingLeft: "0px",
            paddingRight: "20px",
            fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',

            
          }}
        >
          {/* Left Box with Image */}
          <div
            style={{
              marginRight: "20px",
              position: "relative",
              bottom: "200px",
              top: "-6px",
              left: "-73px",
              gap: "0px",
              //opacity: "0.4",
            }}
          >
            <img
              src="../Group 10.png"
              alt="Procom Logo"
              style={{
                width: "593.42px",
                height: "1072.23px",
                top: "-6px",
                left: "-73px",
                gap: "0px",
                opacity: "80%",
                objectFit: "contain",
              }}
            />
          </div>

          {/* About Text */}
          <div style={{ flex: "1", textAlign: "left", marginTop: "16vh" }}>
            <h1 style={{ color: "#0056b3", fontSize: "48px" }}>
              <span
                style={{
                  position: "absolute",
                  width: "497.26px",
                  height: "51.8px",
                  left: "577.71px",
                  top: "245px",
                  gap: "0px",
                  opacity: "0px",
                  fontFamily: "'LEMON MILK'",
                  fontSize: "38px",
                  fontWeight: 700,
                  lineHeight: "51.32px",
                  textAlign: "left",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                  background: "linear-gradient(270deg, #0D32C5 0%, #1768DB 37.9%, #1E8AE9 78.9%, #23A7F4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
              >
                ABOUT
              </span>
              
              <br /> 
              
              <span
                style={{
                  position: "absolute",
                  width: "811px",
                  height: "161.48px",
                  left: "572.58px",
                  top: "278.52px",
                  gap: "0px",
                  opacity: "0px",
                  fontFamily: "'LEMON MILK'",
                  fontSize: "118px",
                  fontWeight: 700,
                  lineHeight: "159.37px",
                  textAlign: "left",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                  background: "linear-gradient(270deg, #0D32C5 0%, #1768DB 60.9%, #23A7F4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
              >
                PROCOM'25
              </span>
            </h1>
            <p
              style={{
                position: "absolute",
                width: "1000px",
                height: "531px",
                left: "577.58px",
                top: "440px",
                gap: "0px",
                opacity: "0px",
                fontFamily: "Outfit",
                fontSize: "25px",
                fontWeight: 700,
                lineHeight: "31.5px",
                letterSpacing: "0.1em",
                textAlign: "left",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",               
                
              }}
            >
             PROCOM (Programming Competition) is one of the most prestigious and long-standing events at FAST NUCES Karachi that began in the year 1998, playing a pivotal role in shaping the university's reputation within the tech community of Pakistan. Over the past 25 years, PROCOM has become a platform that not only fosters innovation and competition but also connects academia with industry professionals. The event features a variety of technical competitions, including speed programming, web development, Al challenges, robotics,  cybersecurity and business contests, which attract talented students from all over Pakistan. PROCOM is recognized for its ability to challenge students' intelligence and technical skills, while giving them real-world exposure. Additionally, it acts as a bridge between students and the professional world by organizing panel discussions, a startup showcase and a grand job fair that help students build industry connections, gain insights, and prepare for their future careers. With its reputation for drawing top talent and industry attention, PROCOM is a cornerstone of FAST NUCES Karachi's mission to develop and promote tech talent in the country.
            </p>
          </div>
        </section>

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
          
          {/* First Row with 2 Centered Boxes */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  transform: "rotate(-90deg)",
                  width: "200px",
                  border: "1px solid #ccc",
                  borderRadius: "25px",
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  margin: "0 60px",
                }}
              >
                <div
                  style={{
                    background: "linear-gradient(180deg, #1F95ED 0%, #2169D4 100%)",
                    color: "#fff",
                    textAlign: "center",
                    padding: "10px 0",
                    borderTopLeftRadius: "25px",
                    borderTopRightRadius: "25px",
                  }}
                >
                  PRESIDENT
                </div>
                <img
                  src="https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737135696/hasnain_raza.png"
                  alt="Hasnain Raza"
                  style={{
                    height: "200px",
                    objectFit: "fill",
                    rotate: "90deg",
                  }}
                />
              </div>
              <p
                style={{
                  fontSize: "20px",
                  color: "linear-gradient(90deg, #1F95ED 0%, #2169D4 100%)",
                  fontWeight: "bold",
                  fontStyle: "italic",
                }}
              >
                <span
                  style={{
                    width: "231.43px",
                    height: "37.83px",
                    gap: "0px",
                    opacity: "0px",
                    transform: "rotate(-0deg)",
                    fontFamily: "'LEMON MILK'",
                    fontSize: "20px",
                    fontStyle: "italic",
                    fontWeight: 500,
                    lineHeight: "27.01px",
                    letterSpacing: "0.1em",
                    textAlign: "center",
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                  }}
                >
                  <b>HASNAIN RAZA</b>
                </span>
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  transform: "rotate(-90deg)",
                  width: "200px",
                  border: "1px solid #ccc",
                  borderRadius: "25px",
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  margin: "0 60px",
                }}
              >
                <div
                  style={{
                    background: "linear-gradient(180deg, #1F95ED 0%, #2169D4 100%)",
                    color: "#fff",
                    textAlign: "center",
                    padding: "10px 0",
                    borderTopLeftRadius: "25px",
                    borderTopRightRadius: "25px",
                  }}
                >
                  VICE PRESIDENT
                </div>
                <img
                  src="https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737143264/Muhammad_Mujtaba.png"
                  alt="MUHAMMAD MUJTABA"
                  style={{
                    height: "200px",
                    objectFit: "fill",
                    rotate: "90deg",
                  }}
                />
              </div>
              <p
                style={{
                  fontSize: "20px",
                  color: "linear-gradient(90deg, #1F95ED 0%, #2169D4 100%)",
                  fontWeight: "bold",
                  fontStyle: "italic",
                }}
              >
                <span
                  style={{
                    width: "231.43px",
                    height: "37.83px",
                    gap: "0px",
                    opacity: "0px",
                    transform: "rotate(-0deg)",
                    fontFamily: "'LEMON MILK'",
                    fontSize: "20px",
                    fontStyle: "italic",
                    fontWeight: 500,
                    lineHeight: "27.01px",
                    letterSpacing: "0.1em",
                    textAlign: "center",
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                  }}
                >
                  <b>MUHAMMAD MUJTABA</b>
                </span>
              </p>
            </div>
          
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  transform: "rotate(-90deg)",
                  width: "200px",
                  border: "1px solid #ccc",
                  borderRadius: "25px",
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  margin: "0 60px",
                }}
              >
                <div
                  style={{
                    background: "linear-gradient(180deg, #1F95ED 0%, #2169D4 100%)",
                    color: "#fff",
                    textAlign: "center",
                    padding: "10px 0",
                    borderTopLeftRadius: "25px",
                    borderTopRightRadius: "25px",
                  }}
                >
                  VICE PRESIDENT
                </div>
                <img
                  src="https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737141256/hussain_malik.png" 
                  alt="Vice President"
                  style={{
                    height: "200px",
                    objectFit: "contain",
                    rotate: "90deg",
                  }}
                />
              </div>
              <p
                style={{
                  fontSize: "20px",
                  color: "linear-gradient(90deg, #1F95ED 0%, #2169D4 100%)",
                  fontWeight: "bold",
                  fontStyle: "italic",
                }}
              >
                <span
                  style={{
                    width: "231.43px",
                    height: "37.83px",
                    gap: "0px",
                    opacity: "0px",
                    transform: "rotate(-0deg)",
                    fontFamily: "'LEMON MILK'",
                    fontSize: "20px",
                    fontStyle: "italic",
                    fontWeight: 500,
                    lineHeight: "27.01px",
                    letterSpacing: "0.1em",
                    textAlign: "center",
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                  }}
                >
                  <b>HUSSAIN MALIK</b>
                </span>
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            {[
              { title: "Chairperson", name: "MUHAMMAD ABDULLAH", imgSrc: "https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737141877/Muhammad_Abdullah.png" },
              { title: "General Secretary", name: "Mehreen Saghar", imgSrc: "https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737141890/Mehreen_Saghar.png" },
              { title: "Director Business", name: "Bakhtawar Azhar", imgSrc: "https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737143278/Bakhtawar_Azhar.png" },
              { title: "Director Branding", name: "Hasan Iqbal", imgSrc: "https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737143290/Hasan_Iqbal.png" },
              { title: "Director GR", name: "Bisma Abid", imgSrc: "https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737143296/Bisma_Abid.png" },
              { title: "Director EE", name: "Hammad Rana", imgSrc: "https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737143310/Hammad_Rana.png" },
              { title: "Director Computing", name: "Mubin Farid", imgSrc: "https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737143320/Mubin_Farid.png" },
              { title: "Director Marketing", name: "Sareem Farooqui", imgSrc: "https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737143339/Sareem_Farooqui.png" },
            ].map((item, index) => (
              <div key={index} style={{ textAlign: "center", width: "auto" }}>
                <div
                  style={{
                    transform: "rotate(-90deg)",
                    width: "200px",
                    border: "1px solid #ccc",
                    borderRadius: "25px",
                    backgroundColor: "#fff",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    margin: "0 60px",
                  }}
                >
                  <div
                    style={{
                      background: "linear-gradient(180deg, #1F95ED 0%, #2169D4 100%)",
                      color: "#fff",
                      textAlign: "center",
                      padding: "10px 0",
                      borderTopLeftRadius: "25px",
                      borderTopRightRadius: "25px",
                    }}
                  >
                    {item.title.toUpperCase()}
                  </div>
                  <img
                    src={item.imgSrc}
                    alt={item.name}
                    style={{
                      height: "200px",
                      objectFit: "fill",
                      rotate: "90deg",
                    }}
                  />
                </div>
                <p
                  style={{
                    fontSize: "20px",
                    color: "linear-gradient(90deg, #1F95ED 0%, #2169D4 100%)",
                    fontWeight: "bold",
                    fontStyle: "italic",
                  }}
                >
                  <span
                    style={{
                      width: "231.43px",
                      height: "37.83px",
                      top: "449.25px",
                      left: "436.14px",
                      gap: "0px",
                      opacity: "0px",
                      transform: "rotate(-0deg)",
                      fontFamily: "'LEMON MILK'",
                      fontSize: "20px",
                      fontStyle: "italic",
                      fontWeight: 700,
                      lineHeight: "27.01px",
                      letterSpacing: "0.1em",
                      textAlign: "center",
                      textUnderlinePosition: "from-font",
                      textDecorationSkipInk: "none",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.name}
                  </span>
                </p>
              </div>
            ))}
          </div>
          
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            {[
              { title: "Treasurer", name: "Shahmir Raza", imgSrc:  "https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737143351/shahmir%20Raza.png" },
              { title: "Event Administrator", name: "Usman Nisar", imgSrc: "https://res.cloudinary.com/dpjy0sbxe/image/upload/v1737143361/Usman_Nisar.png",
    "role": "Event Administrator" },
            ].map((item, index) => (
              <div key={index} style={{ textAlign: "center", width: "auto" }}>
                <div
                  style={{
                    transform: "rotate(-90deg)",
                    width: "200px",
                    border: "1px solid #ccc",
                    borderRadius: "25px",
                    backgroundColor: "#fff",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    margin: "0 60px",
                  }}
                >
                  <div
                    style={{
                      background: "linear-gradient(180deg, #1F95ED 0%, #2169D4 100%)",
                      color: "#fff",
                      textAlign: "center",
                      padding: "10px 0",
                      borderTopLeftRadius: "25px",
                      borderTopRightRadius: "25px",
                    }}
                  >
                    {item.title.toUpperCase()}
                  </div>
                  <img
                    src={item.imgSrc}
                    alt={item.name}
                    style={{
                      height: "200px",
                      objectFit: "fill",
                      rotate: "90deg",
                    }}
                  />
                </div>
                <p
                  style={{
                    fontSize: "20px",
                    color: "linear-gradient(90deg, #1F95ED 0%, #2169D4 100%)",
                    fontWeight: "bold",
                    fontStyle: "italic",
                  }}
                >
                  <span
                    style={{
                      width: "231.43px",
                      height: "37.83px",
                      top: "449.25px",
                      left: "436.14px",
                      gap: "0px",
                      opacity: "0px",
                      transform: "rotate(-0deg)",
                      fontFamily: "'LEMON MILK'",
                      fontSize: "20px",
                      fontStyle: "italic",
                      fontWeight: 700,
                      lineHeight: "27.01px",
                      letterSpacing: "0.1em",
                      textAlign: "center",
                      textUnderlinePosition: "from-font",
                      textDecorationSkipInk: "none",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.name}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </section>

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
