import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { login } from "../service/authService";


export default function Login() {

    const navigate = useNavigate();
    const [ formDate, setFormDate] = useState({
        email: "",
        password: ""
    });

    const handleChnage = (e) => {
        setFormDate({
            ...formDate, [e.target.name]: e.target.value
        });
    }

    const handlSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(formDate);
            
            localStorage.setItem(
                "token",
                response.token
            );


            localStorage.setItem(
                "role",
                response.role
            );


            navigate("/dashboard");
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <section className="auth-section">
            <div className="auth-container">

                <h2>Login</h2>

                <form className="auth-form" onSubmit={handlSubmit}>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formDate.email}
                            onChange={handleChnage}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formDate.password}
                            onChange={handleChnage}
                        />
                    </div>

                    <button type="submit" className="auth-btn">
                        Login
                    </button>

                    <p className="auth-link">
                        Don't have an account?
                        <Link to="/register"> Register</Link>
                    </p>

                </form>

            </div>
        </section>
    );
}