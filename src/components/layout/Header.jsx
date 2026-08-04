import { Link } from "react-router-dom";
import { FaTruckFast } from "react-icons/fa6";

export default function Header() {
    return (
        <header className="header">
            <div className="header-container">
                
                
                <h1 className="logo">
                    <FaTruckFast className="icon" />
                    Logi<span>Track</span>
                </h1>

                <nav>
                    <ul className="nav-links">
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/about">About</Link>
                        </li>

                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/login" className="login-btn">
                                Login
                            </Link>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    );
}