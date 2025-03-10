import { useState } from "react";

const ReportCrime = () => {
    const [formData, setFormData] = useState({
        name: "",
        crimeType: "",
        location: "",
        description: ""
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.crimeType.trim()) newErrors.crimeType = "Crime type is required";
        if (!formData.location.trim()) newErrors.location = "Location is required";
        if (formData.description.trim().length < 10) newErrors.description = "Description must be at least 10 characters";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setLoading(true);
            setSuccessMessage("");

            setTimeout(() => {
                setSuccessMessage("Crime reported successfully!");
                setFormData({ name: "", crimeType: "", location: "", description: "" });
                setErrors({});
                setLoading(false);
                setTimeout(() => setSuccessMessage(""), 3000);
            }, 1500);
        }
    };

    return (
        <div>
            {/* Updated Navbar */}
            <nav style={styles.navbar}>
                <div style={styles.navbarLogo}>
                    <img
                        src="https://png.pngtree.com/png-clipart/20230914/original/pngtree-rule-of-law-vector-png-image_11399282.png"
                        alt="Logo"
                        className="logo"
                        style={styles.logo}
                    />
                    <h2 style={styles.navTitle}>Law & Order System</h2>
                </div>
                <ul style={styles.navList}>
                    <li><a href="/report-crime" style={styles.navLink}>Report a Crime</a></li>
                    <li><a href="/license-permit" style={styles.navLink}>Apply for Licenses & Permits</a></li>
                    <li><a href="/public-notices" style={styles.navLink}>View Public Notices & Alerts</a></li>
                </ul>
            </nav>

            {/* Crime Report Form */}
            <div style={styles.container}>
                <h2 style={styles.formTitle}>Report a Crime</h2>
                {successMessage && <p style={styles.successMessage}>{successMessage}</p>}
                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Your Name</label>
                        <input type="text" style={styles.input} value={formData.name} 
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                            placeholder="Enter your name" />
                        {errors.name && <p style={styles.errorText}>{errors.name}</p>}
                    </div>

                    <div style={styles.formGroup}>
                        <label style={styles.label}>Crime Type</label>
                        <select style={styles.input} value={formData.crimeType} 
                            onChange={(e) => setFormData({ ...formData, crimeType: e.target.value })}>
                            <option value="">Select crime type</option>
                            <option value="Theft">Theft</option>
                            <option value="Assault">Assault</option>
                            <option value="Fraud">Fraud</option>
                            <option value="Vandalism">Vandalism</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.crimeType && <p style={styles.errorText}>{errors.crimeType}</p>}
                    </div>

                    <div style={styles.formGroup}>
                        <label style={styles.label}>Location</label>
                        <input type="text" style={styles.input} value={formData.location} 
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })} 
                            placeholder="Enter location" />
                        {errors.location && <p style={styles.errorText}>{errors.location}</p>}
                    </div>

                    <div style={styles.formGroup}>
                        <label style={styles.label}>Description</label>
                        <textarea style={{ ...styles.input, height: "80px", resize: "none" }} 
                            value={formData.description} 
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })} 
                            placeholder="Describe the incident"></textarea>
                        {errors.description && <p style={styles.errorText}>{errors.description}</p>}
                    </div>

                    <button type="submit" style={loading ? styles.buttonDisabled : styles.button} disabled={loading}>
                        {loading ? "Submitting..." : "Submit Report"}
                    </button>
                </form>
            </div>
        </div>
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
    form: {  // Added missing comma
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
        border: "none",
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

export default ReportCrime;
