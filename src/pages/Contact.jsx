import { useState } from "react";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // No backend endpoint for contact messages yet — just confirm to the user for now.
        console.log("Contact form submitted:", formData);
        setSent(true);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section className="static-page">
            <div className="static-page-header">
                <h1>Contact Us</h1>
                <p>Have a question or feedback? Send us a message.</p>
            </div>

            <div className="contact-layout">
                <div className="contact-info">
                    <div className="contact-info-item">
                        <FaEnvelope />
                        <span>contact@logitrack.com</span>
                    </div>
                    <div className="contact-info-item">
                        <FaPhone />
                        <span>+212 6 00 00 00 00</span>
                    </div>
                    <div className="contact-info-item">
                        <FaLocationDot />
                        <span>Casablanca, Morocco</span>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    {sent && (
                        <p className="contact-success">
                            Thanks! Your message has been sent.
                        </p>
                    )}

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="How can we help?"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="btn-primary">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
