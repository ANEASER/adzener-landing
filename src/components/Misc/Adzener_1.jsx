// src/components/Adzener.jsx
import React from "react";
import AdzenerLogo from "../../assets/AdzenerLogo.svg";
import TickIconTrue from "../../assets/tick-circle-black.svg";
import TickIconFalse from "../../assets/tick-circle-grey.svg";

const Adzener_1 = ({ stepsStatus }) => {
  const steps = [
    { label: "Brand details", description: "Please upload your brand details" },
    { label: "Color Palette", description: "Please choose your color palette" },
    { label: "Campaign details", description: "Please add company details" },
  ];

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

        <p style={{ marginTop: "5rem", marginBottom: "1rem", fontWeight: "bold",textAlign:"left" }}>
          Launch winning campaigns in minutes - AI does the heavy lifting so you can focus on growth
        </p>

        <div>
          {steps.map((step, index) => {
            const isComplete = stepsStatus?.[index];
            return (
              <div key={index} style={{ display: "flex", alignItems: "center", margin: "1rem 0" }}>
                <img
                  src={isComplete ? TickIconTrue : TickIconFalse}
                  alt="tick icon"
                  style={{ marginRight: "0.5rem" }}
                />
                <div>
                  <div style={{ fontWeight: isComplete ? "bold" : "normal", color: isComplete ? "#000" : "#999" }}>
                    {step.label}
                  </div>
                  <div style={{ color: isComplete ? "#282A3A" : "#999", fontSize: "0.9rem" }}>{step.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Adzener_1;
