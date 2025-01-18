import React from "react"

export const ExcomFrame = (props)=> {


return(
    <div style={{ textAlign: "center", border: "3px solid red" }}>
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
        {props.role}
      </div>
      <img
        src={props.img}
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
        <b>{props.name}</b>
      </span>
    </p>
  </div>

)


}