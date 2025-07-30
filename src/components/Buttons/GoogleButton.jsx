import React, { useCallback } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, db } from "../../firebase/config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


const GoogleSignInButton = ({ children, ...props }) => {
    const navigate = useNavigate();
    const { checkVerificationStatus } = useAuth();

    const handleGoogleLogin = useCallback(async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            const useremail = user.email;

            const userData = {
                firstName: user.displayName.split(" ")[0],
                lastName: user.displayName.split(" ")[1] || "",
                email: user.email,
                role: "user"
            };

            
            const response = await fetch(`http://localhost:8000/user?email=${encodeURIComponent(useremail)}`);
            
            const result1 = await response.json();

            if (result1) {
                if (result.success && result.data) {
                    localStorage.setItem("userData", JSON.stringify(result.data));
                }
                if (result.data && result.data.role === "admin") {
                    navigate("/admin-dashboard");
                } else {
                    navigate("/dashboard");
                }
            } else {
                localStorage.setItem("userData", JSON.stringify(userData));
                checkVerificationStatus(navigate);
            }
        } catch (err) {
            console.error("Login error:", err);
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
                borderRadius: "10px",
            }}
            onClick={handleGoogleLogin}
            {...props}
        >
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaa2hwiG4o2vVy3yYZKTBDlqkTuQ0n3KEL2w&s"
                alt="Google logo"
                style={{ width: "20px", height: "20px" }}
            />
            {children || "Sign in with Google"}
        </button>
    );
};

export default GoogleSignInButton;
