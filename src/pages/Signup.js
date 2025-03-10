import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    setTimeout(() => {
      if (email && password && name && role && username) {
        console.log('Signup successful');
        navigate('/login');
      } else {
        setError('Please fill in all fields');
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <style>
        {`
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 30px;
            background-color: #333;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          }
          .navbar-logo {
            display: flex;
            align-items: center;
          }
          .navbar-logo img {
            width: 50px;
            height: 50px;
            margin-right: 10px;
          }
          .navbar-links {
            list-style: none;
            display: flex;
            gap: 20px;
          }
          .navbar-links li {
            display: inline;
          }
          .navbar-links a {
            text-decoration: none;
            color: white;
            font-size: 16px;
            font-weight: bold;
            transition: color 0.3s;
          }
          .navbar-links a.active {
            color: #dc2626;
          }
          .container {
            max-width: 400px;
            margin: 120px auto 100px;
            padding: 30px;
            text-align: center;
            background-color: #ffffff;
            border-radius: 12px;
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
          }
          .title {
            margin-bottom: 20px;
            font-size: 24px;
            font-weight: bold;
            color: #333;
          }
          .input {
            width: 100%;
            padding: 12px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 8px;
            font-size: 16px;
            outline: none;
          }
          .button {
            width: 100%;
            padding: 12px;
            background-color: #dc2626;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 18px;
            cursor: pointer;
            transition: background 0.3s;
          }
          .button:disabled {
            background-color: #999;
          }
          .errorText {
            color: red;
            margin-bottom: 10px;
            font-size: 14px;
          }
          .formGroup {
            text-align: left;
            font-size: 14px;
            color: #666;
          }
        `}
      </style>

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
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup" className={({ isActive }) => (isActive ? "active" : "")}>Signup</NavLink>
          </li>
        </ul>
      </nav>

      {/* Signup Form */}
      <div className="container">
        <h2 className="title">Signup</h2>
        {error && <p className="errorText">{error}</p>}
        <form onSubmit={handleSignup}>
          <div className="formGroup"><label>Name</label></div>
          <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required className="input" />
          
          <div className="formGroup"><label>Email</label></div>
          <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required className="input" />
          
          <div className="formGroup"><label>User Role</label></div>
          <select value={role} onChange={(e) => setRole(e.target.value)} required className="input">
            <option value="">Select Role</option>
            <option value="Police">Police</option>
            <option value="Magistrate">Magistrate</option>
            <option value="Citizen">Citizen</option>
          </select>
          
          <div className="formGroup"><label>Username</label></div>
          <input type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} required className="input" />
          
          <div className="formGroup"><label>Password</label></div>
          <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required className="input" />
          
          <div className="formGroup"><label>Confirm Password</label></div>
          <input type="password" placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className="input" />
          
          <button type="submit" className="button" disabled={loading}>{loading ? "Signing up..." : "Signup"}</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
