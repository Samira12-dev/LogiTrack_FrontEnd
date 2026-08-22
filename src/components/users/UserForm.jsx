import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { register } from "../../service/authService";
import { getUserById, updateUser } from "../../service/userService";

export default function UserForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        email: "",
        password: "",
        role: "AGENT"
    });

    useEffect(() => {
        const getUser = async () => {
            if (!id) return;
            try {
                const res = await getUserById(id);
                setFormData({ ...res.data, password: "" });
            } catch (error) {
                console.log(error);
            }
        };
        getUser();
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                const payload = { ...formData };
                if (!payload.password) delete payload.password;
                await updateUser(id, payload);
            } else {
                await register(formData);
            }
            navigate("/dashboard/users");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className="auth-section">
            <div className="auth-container">
                <h2>{id ? "Edit User" : "Create Account"}</h2>
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nom">Last Name</label>
                        <input type="text" id="nom" name="nom" placeholder="Enter your last name"
                        value={formData.nom} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="prenom">First Name</label>
                        <input type="text" id="prenom" name="prenom" placeholder="Enter your first name"
                         value={formData.prenom} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email"
                         value={formData.email} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">
                            Password {id && <small>(leave empty to keep current)</small>}
                        </label>
                        <input type="password" id="password" name="password" placeholder="Enter your password"
                        value={formData.password} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="role">Role</label>
                        <select id="role" name="role" value={formData.role} onChange={handleChange}>
                            <option value="ADMIN">Admin</option>
                            <option value="MANAGER">Manager</option>
                            <option value="AGENT">Agent</option>
                        </select>
                    </div>

                    <button type="submit" className="auth-btn">
                        {id ? "Update" : "Register"}
                    </button>
                </form>
            </div>
        </section>
    );
}
