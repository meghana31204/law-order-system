import React, { useState } from 'react';
import { useNavigate, Link, NavLink } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (email === "admin@example.com" && password === "password") {
        console.log('Login successful');
        navigate('/dashboard');
      } else {
        setError('Invalid email or password');
      }
      setLoading(false);
    }, 1500);
  };

  const styles = {
    container: {
      maxWidth: "400px",
      margin: "120px auto 100px",
      padding: "30px",
      textAlign: "center",
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
    },
    title: {
      marginBottom: "20px",
      fontSize: "24px",
      fontWeight: "bold",
      color: "#333",
    },
    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "15px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      fontSize: "16px",
      outline: "none",
    },
    button: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#dc2626",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontSize: "18px",
      cursor: "pointer",
      transition: "background 0.3s",
    },
    errorText: {
      color: "red",
      marginBottom: "10px",
      fontSize: "14px",
    },
    formGroup: {
      textAlign: "left",
      fontSize: "14px",
      color: "#666",
    },
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img
            src="https://png.pngtree.com/png-clipart/20230914/original/pngtree-rule-of-law-vector-png-image_11399282.png"
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

      {/* Login Form */}
      <div style={styles.container}>
        <h2 style={styles.title}>Login</h2>
        {error && <p style={styles.errorText}>{error}</p>}
        <form onSubmit={handleLogin}>
          <div style={styles.formGroup}>
            <label>Email</label>
          </div>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <div style={styles.formGroup}>
            <label>Password</label>
          </div>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button 
            type="submit" 
            style={loading ? { ...styles.button, backgroundColor: '#999' } : styles.button} 
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
