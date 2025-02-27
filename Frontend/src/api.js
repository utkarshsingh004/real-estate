import axios from "axios";

const API_URL = "http://localhost:5000"; // Backend URL

export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    console.error("Signup Error:", error.response?.data?.message);
    return { error: error.response?.data?.message || "Signup failed" };
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    console.error("Login Error:", error.response?.data?.message);
    return { error: error.response?.data?.message || "Login failed" };
  }
};
