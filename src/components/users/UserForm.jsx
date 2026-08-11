
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../service/authService";

export default function UserForm() {
    const navigate = useNavigate();
    const [formDate, setFormDate] = useState({
        nom: "",
        prenom: "",
        email: "",
        password: "",
        role: "AGENT"
    });

    const handleChnage = (e) => {
        setFormDate({
            ...formDate,
            [e.target.name]: e.target.value
        });
    };

    const handlSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await register(formDate);
            navigate("/dashboard/users");
        } catch (error) {
           console.log(error);
        }
    };

    return (
        <section className="auth-section">
            <div className="auth-container">
                <h2>Create Account</h2>
                <form className="auth-form" onSubmit={handlSubmit}>
                    <div className="form-group">
                        <label htmlFor="nom">Last Name</label>
                        <input type="text" id="nom" name="nom" placeholder="Enter your last name" 
                        value={formDate.nom} onChange={handleChnage} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="prenom">First Name</label>
                        <input type="text" id="prenom" name="prenom" placeholder="Enter your first name"
                         value={formDate.prenom} onChange={handleChnage} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email"
                         value={formDate.email} onChange={handleChnage} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" 
                        value={formDate.password} onChange={handleChnage} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="role">Role</label>
                        <select id="role" name="role" value={formDate.role} onChange={handleChnage}>
                            <option value="ADMIN">Admin</option>
                            <option value="MANAGER">Manager</option>
                            <option value="AGENT">Agent</option>
                        </select>
                    </div>
                    
                    <button type="submit" className="auth-btn">Register</button>
                </form>
            </div>
        </section>
    );
}
