import React from "react";

const DividerWithText = ({ text = "", style = {} }) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                margin: "20px 0",
                ...style,
            }}
        >
            {text ? (
            <>
                <hr style={{ width: "180px" }} />
                <span style={{ padding: "0 10px", color: "#B3B5BD" }}>{text}</span>
                <hr style={{ width: "180px" }} />
            </>
            ) : (
            <>
                <hr style={{ width: "365px" }} />
            </>
            )}
                    </div>
    );
};

export default DividerWithText;
