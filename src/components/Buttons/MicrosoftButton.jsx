import React, { useCallback } from "react";
import { OAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../../firebase/config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const MicrosoftSignInButton = ({ children, ...props }) => {
    const navigate = useNavigate();

    const handleMicrosoftLogin = useCallback(async () => {
        try {
            const provider = new OAuthProvider('microsoft.com');
            provider.setCustomParameters({
                prompt: "consent",
                tenant: "common" // Optional: You can specify a specific tenant ID here
            });

            const result = await signInWithPopup(auth, provider);
            const user = result.user;


            navigate("/");
        } catch (err) {
            alert(err.message);
        }
    }, [navigate]);

    return (
        <button
            style={{
                width: "100%",
                height: "50px",
                border: "solid 1px #B3B5BD",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                gap: "10px",
                borderRadius: "10px"
            }}
            onClick={handleMicrosoftLogin}
            {...props}
        >
            <img
                src="https://www.logo.wine/a/logo/Microsoft_Store/Microsoft_Store-Logo.wine.svg"
                alt="Microsoft logo"
                style={{ width: "20px", height: "20px" }}
            />
            {children || "Sign in with Microsoft"}
        </button>
    );
};

export default MicrosoftSignInButton;
