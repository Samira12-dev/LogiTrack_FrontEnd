import { FaTruckFast, FaShieldHalved, FaGaugeHigh } from "react-icons/fa6";

export default function About() {
    return (
        <section className="static-page">
            <div className="static-page-header">
                <h1>About LogiTrack</h1>
                <p>A simple, focused tool for managing logistics operations.</p>
            </div>

            <div className="static-page-content">
                <p>
                    LogiTrack was built to help small and mid-sized teams manage
                    their clients, products, and orders without the overhead of
                    a heavy enterprise system. Everything is centered around
                    what matters day to day: who your clients are, what you're
                    selling, and where each order stands.
                </p>

                <p>
                    The platform separates access by role, Admin, Manager, and
                    Agent, so every person on your team sees exactly what they
                    need and nothing they don't.
                </p>

                <div className="about-values">
                    <div className="about-value-card">
                        <FaTruckFast className="feature-icon" />
                        <h3>Built for logistics</h3>
                        <p>Designed around the day-to-day of managing orders and deliveries.</p>
                    </div>

                    <div className="about-value-card">
                        <FaShieldHalved className="feature-icon" />
                        <h3>Role-based access</h3>
                        <p>Admins, managers, and agents each get the right level of access.</p>
                    </div>

                    <div className="about-value-card">
                        <FaGaugeHigh className="feature-icon" />
                        <h3>Simple and fast</h3>
                        <p>A clean dashboard that gets out of the way and lets you work.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
