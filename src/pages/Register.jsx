import { Link } from "react-router-dom";

export default function Register() {
    return (
        <section className="auth-section">

            <div className="auth-container">

                <h2>Create Account</h2>

                <form className="auth-form">

                    <div className="form-group">
                        <label htmlFor="nom">Last Name</label>
                        <input
                            type="text"
                            id="nom"
                            name="nom"
                            placeholder="Enter your last name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="prenom">First Name</label>
                        <input
                            type="text"
                            id="prenom"
                            name="prenom"
                            placeholder="Enter your first name"
                        />
                    </div>

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
                        Register
                    </button>

                    <p className="auth-link">
                        Already have an account?
                        <Link to="/login"> Login</Link>
                    </p>

                </form>

            </div>

        </section>
    );
}