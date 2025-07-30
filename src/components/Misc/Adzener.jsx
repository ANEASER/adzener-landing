// src/components/Adzener.jsx
import React from "react";
import AdzenerLogo from "../../assets/AdzenerLogo.svg";
import Illustration from "../../assets/IllustrationS19.svg";
import TickIcon from "../../assets/tick-circle-solid.svg";

const benefits = [
  "Instant Campaigns in Minutes",
  "Data-Driven for Real Results",
  "Brand-Adaptive Creativity",
];

const Adzener = () => {
  return (
    <div
      style={{
          padding: "2%",
          borderRadius: "20px",
          backgroundColor: "rgb(249, 250, 251)",  
          border: "1px solid rgb(255, 255, 255)",
          height: "96vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
          fontFamily: "'Poppins', sans-serif"   
        }}
    >
      <div style={{ overflowY: "auto", flex: 1 }}>
        <div>
          <img src={AdzenerLogo} alt="Adzener Logo" style={{ maxWidth: "100%" }} />
        </div>

        <p style={{ marginTop: "5rem", marginBottom: "1rem", fontWeight: "bold", textAlign:"left" }}>
          Launch winning campaigns in minutes - AI does the heavy lifting so you can focus on growth
        </p>

        <div style={{ color: "#719B64", fontWeight: "semibold" }}>
          {benefits.map((text, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: "4px",
              }}
            >
              <img
                src={TickIcon}
                alt="Tick"
                className="adzener-tick-icon"
                style={{ marginRight: "5px" }}
              />
              <p style={{ margin: 0 }}>{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "1rem", textAlign: "center" }}>
        <img
          src={Illustration}
          alt="Illustration"
          style={{ height: "60vh", maxWidth: "100%", objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default Adzener;
