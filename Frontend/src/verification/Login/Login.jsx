import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import "./Login.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Login = () => {
  const navigate = useNavigate(); // Initialize navigate

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState(""); // Added message state

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form
  const validateForm = () => {
    let newErrors = {};
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post("http://localhost:5000/login", formData);
        setMessage(response.data.message); // Set success message
        console.log("Auth Token:", response.data.tok);

        if (response.data.tok) {
          localStorage.setItem("authToken", response.data.tok); // Store token in localStorage
        }
        // else{
        //   localStorage.setItem("authToken",false)
        // }

        // Redirect to home page after successful login
        setTimeout(() => {
          navigate("/");
        }, 2000); // Redirect after 2 seconds
      } catch (error) {
        setMessage(error.response?.data?.message || "Something went wrong");
      }
    }
  };

  return (
    <>
      <Header />
      <div className="login-wrap">
        <div className="login-container">
          <p>{message}</p>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label>Password</label>
              <div className="password-container">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button className="button" type="button" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && <p className="error">{errors.password}</p>}
            </div>

            <button className="button" type="submit">Login</button>

            <p>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

// Export function to check if user is logged in
export function loginExport() {
  return localStorage.getItem("authToken"); // Retrieve token from localStorage
}

export default Login;
