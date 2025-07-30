// src/components/Common/SubmitButton.jsx
import React from "react";

const SubmitButton = ({ onClick, text = "Submit", style = {}, ...props }) => {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: "#6C975E",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
                width: "100%",
                height: "50px",
                ...style,
            }}
            {...props}
        >
            {text}
        </button>
    );
};

export default SubmitButton;
