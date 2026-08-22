import { Link } from "react-router-dom";
import { FaTruckFast, FaUsers, FaBoxesStacked, FaChartLine } from "react-icons/fa6";

export default function Home() {
    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    <h1>
                        Manage your logistics with <span>LogiTrack</span>
                    </h1>
                    <p>
                        Track clients, products, and orders in one simple dashboard.
                        Built for teams that want clarity over chaos.
                    </p>
                    <div className="hero-actions">
                        <Link to="/register" className="btn-primary">
                            Get Started
                        </Link>
                        <Link to="/login" className="btn-secondary">
                            Login
                        </Link>
                    </div>
                </div>
            </section>

            <section className="features">
                <h2>Everything you need</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <FaUsers className="feature-icon" />
                        <h3>Client Management</h3>
                        <p>Keep track of every client and their order history in one place.</p>
                    </div>

                    <div className="feature-card">
                        <FaBoxesStacked className="feature-icon" />
                        <h3>Product Catalog</h3>
                        <p>Organize your products with stock levels and pricing at a glance.</p>
                    </div>

                    <div className="feature-card">
                        <FaTruckFast className="feature-icon" />
                        <h3>Order Tracking</h3>
                        <p>Follow every order from placement to delivery, status by status.</p>
                    </div>

                    <div className="feature-card">
                        <FaChartLine className="feature-icon" />
                        <h3>Dashboard Insights</h3>
                        <p>See your key numbers at a glance with a live overview dashboard.</p>
                    </div>
                </div>
            </section>

            <section className="cta">
                <h2>Ready to get organized?</h2>
                <p>Create an account and start managing your logistics today.</p>
                <Link to="/register" className="btn-primary">
                    Create an Account
                </Link>
            </section>
        </>
    );
}
