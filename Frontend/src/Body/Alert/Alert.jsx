import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Alert.css";

function Alert() {
    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);

    function sendToLogin() {
        navigate("/login"); // Redirect to login page
    }

    useEffect(() => {
        const authToken = localStorage.getItem("authToken");

        if (!authToken) {
            // Show alert & blur background after 2 seconds
            const timeout = setTimeout(() => {
                setShowAlert(true);
            }, 5000); 

            return () => clearTimeout(timeout); // Cleanup timeout
        } else {
            setShowAlert(false); // Hide alert if user logs in
        }
    }, []);

    if (!showAlert) return null; // Don't render anything if user is logged in or alert is hidden

    return (
        <div className="alert-overlay">
            <div className="alert-wrap">
                <h1>Please login for better experience</h1>
                <img src="images.png" alt="Login Prompt" />
                <button className="button" type="button" onClick={sendToLogin}>Log in</button>
            </div>
        </div>
    );
}

export default Alert;
