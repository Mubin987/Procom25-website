

const  AboutUsHero = ()=>{

return(
<>
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
</>
)    
}