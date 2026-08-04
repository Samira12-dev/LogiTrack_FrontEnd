import img from "../img/img.png";
import { FaTruckFast } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function Login() {
    return (
        <section className="login-section">
            <div className="login-design">

                <h1>Welcome to LogiTrack</h1>
                <p >  Easy and quick shipping with LogiTrack </p>
                <img src={img} alt="LogiTrack" />
            </div>
            <div className="login-container">
                <h2>Login</h2>
                <form className="login-form">
                    <div className="form-group">
                        <label htmlFor="username">Email</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"> Password</label>
                        <input id="password" name="password" type="password" required />
                    </div>
                    <button type="submit" className="login-btn">Login </button>
            
                    <p className="auth-link">
                        Don't have an account?
                        <Link to="/register">Register</Link>
                    </p>
                </form>
            </div>
        </section>
    );
}