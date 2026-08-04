import { Link } from "react-router-dom";

export default function Login() {
    return (
        <section className="auth-section">
            <div className="auth-container">

                <h2>Login</h2>

                <form className="auth-form">

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password"
                            placeholder="Enter your password"
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