
import React, { useState } from "react";

const ApplyLicensePermit = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    state: "",
    city: "",
    address: "",
    zip: "",
    licenseType: "",
    location: "",
    description: "",
    document: null,
  });

  const [errors, setErrors] = useState({});

  const statesOfIndia = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
    "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
    "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
    "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.mobile) newErrors.mobile = "Mobile number is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.zip) newErrors.zip = "ZIP code is required";
    if (!formData.licenseType) newErrors.licenseType = "License type is required";
    if (!formData.location) newErrors.location = "Location is required";
    if (!formData.description) newErrors.description = "Description is required";
    if (!formData.document) newErrors.document = "Document is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form Submitted Successfully!");
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, document: file });
  };

  return (
    <>
      <nav style={styles.navbar}>
        <div style={styles.navbarLogo}>
          <img src="https://png.pngtree.com/png-clipart/20230914/original/pngtree-rule-of-law-vector-png-image_11399282.png" alt="Logo" style={styles.logo} />
          <h1 style={styles.navTitle}>License Permit Portal</h1>
        </div>
        <ul style={styles.navList}>
                    <li><a href="/report-crime" style={styles.navLink}>Report a Crime</a></li>
                    <li><a href="/license-permit" style={styles.navLink}>Apply for Licenses & Permits</a></li>
                    <li><a href="/public-notices" style={styles.navLink}>View Public Notices & Alerts</a></li>
                </ul>
      </nav>
      <div style={styles.container}>
        <h2>Apply for a License</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          {[
            { name: "name", label: "Full Name", placeholder: "Enter your Name" },
            { name: "email", label: "Email", placeholder: "Enter your Email", type: "email" },
            { name: "mobile", label: "Mobile Number", placeholder: "Enter your Mobile Number", type: "tel" },
            { name: "city", label: "City", placeholder: "Enter your City" },
            { name: "address", label: "Address", placeholder: "Enter your Address" },
            { name: "zip", label: "ZIP Code", placeholder: "Enter your ZIP Code" },
            { name: "location", label: "Location", placeholder: "Enter Location" },
          ].map(({ name, label, placeholder, type = "text" }) => (
            <div key={name} style={styles.formGroup}>
              <label>{label}</label>
              <input
                type={type}
                placeholder={placeholder}
                value={formData[name]}
                onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
                style={styles.input}
              />
              {errors[name] && <p style={styles.errorText}>{errors[name]}</p>}
            </div>
          ))}

          <div style={styles.formGroup}>
            <label>State</label>
            <select
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              style={styles.input}
            >
              <option value="">Select State</option>
              {statesOfIndia.map((state, index) => (
                <option key={index} value={state}>{state}</option>
              ))}
            </select>
            {errors.state && <p style={styles.errorText}>{errors.state}</p>}
          </div>

          <div style={styles.formGroup}>
            <label>Choose License Type</label>
            <select
              value={formData.licenseType}
              onChange={(e) => setFormData({ ...formData, licenseType: e.target.value })}
              style={styles.input}
            >
              <option value="">Select License Type</option>
              <option value="Business">Business License</option>
              <option value="Driving">Driving License</option>
              <option value="Construction">Construction Permit</option>
              <option value="Construction">Firearm License</option>
              <option value="Construction">Marriage Certificate</option>
              <option value="Construction">Passport/Travel Permits</option>
            </select>
            {errors.licenseType && <p style={styles.errorText}>{errors.licenseType}</p>}
          </div>

          <div style={styles.formGroup}>
            <label>Description</label>
            <textarea
              placeholder="Enter Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              style={styles.input}
            />
            {errors.description && <p style={styles.errorText}>{errors.description}</p>}
          </div>

          <div style={styles.formGroup}>
            <label>Upload Document</label>
            <input type="file" onChange={handleFileChange} style={styles.input} />
            {errors.document && <p style={styles.errorText}>{errors.document}</p>}
          </div>

          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </div>
    </>
  );
};

const styles = {
    navbar: {
        backgroundColor: "#333",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      },
      navbarLogo: {
        display: "flex",
        alignItems: "center"
      },
      logo: {
        width: "50px",
        height: "50px",
        marginRight: "10px"
      },
      navTitle: {
        color: "#fff",
        margin: 0,
        fontSize: "20px"
      },
      navList: {
        listStyle: "none",
        margin: 0,
        padding: 0,
        display: "flex"
      },
      navLink: {
        color: "#fff",
        textDecoration: "none",
        padding: "10px 15px",
        display: "block"
      },
      container: {
        maxWidth: "400px",
        margin: "20px auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9"
      },
      form: {
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      },
      formGroup: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "10px"
      },
      input: {
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc"
      },
      button: {
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "10px 15px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px"
      },
      buttonDisabled: {
        backgroundColor: "#ccc",
        color: "#666",
        padding: "10px 15px",
        borderRadius: "5px",
        fontSize: "16px"
      },
      errorText: {
        color: "red",
        fontSize: "12px",
        marginTop: "5px"
      },
      successMessage: {
        color: "green",
        fontSize: "14px",
        textAlign: "center",
        marginBottom: "10px"
      }
};

export default ApplyLicensePermit;
