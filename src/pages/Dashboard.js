import React from "react";
import { Link, NavLink } from "react-router-dom";

const Dashboard = () => {
  const styles = {
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px",
      backgroundColor: "#1a202c",
      color: "white",
    },
    backgroundSection: {
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
      height: "100vh",
      padding: "20px",
      backgroundImage: "url('https://t4.ftcdn.net/jpg/08/22/79/97/360_F_822799770_gLeao0WR8EyWGjHaNvh0rjpEc91tdvi0.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      color: "white",
      padding: "20px",
      maxWidth: "500px",
      borderRadius: "10px",
      boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
    },
    aboutSection: {
      textAlign: "center",
      backgroundColor: "white",
      padding: "50px 20px",
    },
    img: {
      height:"20px",
      width:"50px",


    },
    contactSection: {
      textAlign: "center",
      backgroundColor: "#f7fafc",
      padding: "50px 20px",
    },
    contactBox: {
      backgroundColor: "#1a202c",
      color: "white",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
      minWidth: "300px",
    },
    contactForm: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
      minWidth: "300px",
    },
    input: {
      width: "100%",
      marginBottom: "10px",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
    },
    button: {
      display: "inline-block",
      backgroundColor: "#dc2626",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      textDecoration: "none",
    },
    footer: {
      textAlign: "center",
      backgroundColor: "#1a202c",
      color: "white",
      padding: "20px",
      marginTop: "20px",
    },
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img
            src="https://www.goanobserver.in/wp-content/uploads/2024/07/law-536x510.png"
            alt="Logo"
            className="logo"
          />
          <h2>Law & Order System</h2>
        </div>
        <ul className="navbar-links">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" className={({ isActive }) => (isActive ? "active" : "")}>
              Signup
            </NavLink>
          </li>
        </ul>
      </nav>
      
      {/* Background Section */}
      <div style={styles.backgroundSection}>
        <div style={styles.overlay}>
          <h1>Welcome to Law & Order Enforcement System</h1>
          <p>A next-generation platform designed to streamline law enforcement operations, track criminal activities, and enhance communication between agencies.</p>
        </div>
      </div>

      {/* About Section */}
      <section id="about" style={styles.aboutSection}>
        <h2>About Us</h2>
        <p>The Law & Order Enforcement System is a digital platform designed to improve public safety and simplify law enforcement work. It helps manage cases, track criminals, and generate real-time reports efficiently. The system reduces paperwork, improves coordination between departments, and allows faster responses to emergencies. Citizens can file complaints online, track case progress, and communicate with authorities, ensuring transparency and trust. With centralized data, smart analytics, and automated processes, law enforcement can make better decisions, use resources wisely, and prevent crimes. This system creates a more secure, efficient, and accountable approach to maintaining law and order.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.contactSection}>
        <h2>Contact Us</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          <div style={styles.contactBox}>
            <h3>Get In Touch</h3>
            <p>📍 123 Law Street, Hyderabad, India</p>
            <p>📞 +91 9876543210</p>
            <p>✉️ support@lawenforcement.com</p>
            <p>🕒 Mon - Fri: 9:00 AM - 6:00 PM</p>
          </div>
          <div style={styles.contactForm}>
            <h3>Send Us a Message</h3>
            <form>
              <input type="text" placeholder="Your Name" style={styles.input} required />
              <input type="email" placeholder="Your Email" style={styles.input} required />
              <input type="text" placeholder="Subject" style={styles.input} required />
              <textarea placeholder="Your Message" style={{ ...styles.input, height: "100px" }} required></textarea>
              <button type="submit" style={styles.button}>Submit</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        &copy; {new Date().getFullYear()} Law & Order Enforcement System. All rights reserved.
        <br />
        <Link to="/report-crime" style={{ color: "#dc2626", textDecoration: "none", marginTop: "10px", display: "block" }}>Report a Crime</Link>
        <Link to="/license-permit" style={{ color: "#dc2626", textDecoration: "none", marginTop: "10px", display: "block" }}>Apply License & Permit</Link>
        <Link to="/public-notices" style={{ color: "#dc2626", textDecoration: "none", marginTop: "10px", display: "block" }}>Notice and Alerts</Link>

      </footer>
    </div>
  );
};

export default Dashboard;
