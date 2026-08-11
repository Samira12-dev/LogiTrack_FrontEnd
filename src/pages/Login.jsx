
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../service/authService";

export default function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
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
            const response = await login(formData);

            console.log("LOGIN RESPONSE:", response);

            localStorage.setItem("token", response.token);

            localStorage.setItem("user", JSON.stringify({
                id: response.id,
                nom: response.nom,
                prenom: response.prenom,
                email: response.email,
                role: response.role
            }));

            navigate("/dashboard");
        } catch (error) {
            console.log("LOGIN ERROR:", error);
        }
    };

    return (
        <section className="auth-section">
            <div className="auth-container">
                <h2>Login</h2>

                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="auth-btn">
                        Login
                    </button>
                </form>
            </div>
        </section>
    );
}

