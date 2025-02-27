import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>Welcome to Aapna Ghar, your trusted real estate partner. We specialize in buying, selling, and renting properties, ensuring a seamless and hassle-free experience. With a commitment to excellence, we help you find your dream home, perfect office, or ideal investment. Let’s build your future together! 🏡✨</p>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: info@example.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Your Company | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
