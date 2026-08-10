
import { useState } from "react";
import { register } from "../service/authService";
import { useNavigate } from "react-router-dom";

export default function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        email: "",
        password: "",
        role: "AGENT"
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log("DATA SENT:", formData);

            const response = await register(formData);

            console.log("REGISTER RESPONSE:", response);

            alert("Account created successfully");

            navigate("/dashboard/users");

        } catch (error) {

            console.log("REGISTER ERROR:", error);

            console.log("BACKEND ERROR:", error.response?.data);

            alert("Error while creating account");
        }
    };

    return (
        <section className="auth-section">

            <div className="auth-container">

                <h2>Create Account</h2>

                <form
                    className="auth-form"
                    onSubmit={handleSubmit}
                >

                    <div className="form-group">
                        <label>Last Name</label>

                        <input
                            type="text"
                            name="nom"
                            placeholder="Enter your last name"
                            value={formData.nom}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>First Name</label>

                        <input
                            type="text"
                            name="prenom"
                            placeholder="Enter your first name"
                            value={formData.prenom}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">

                        <label>Role</label>

                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                        >
                            <option value="ADMIN">Admin</option>
                            <option value="MANAGER">Manager</option>
                            <option value="AGENT">Agent</option>
                        </select>

                    </div>

                    <button
                        type="submit"
                        className="auth-btn"
                    >
                        Register
                    </button>

                </form>

            </div>

        </section>
    );
}

