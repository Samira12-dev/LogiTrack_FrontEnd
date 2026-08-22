import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyProfile, updateProfile } from "../service/userService";

export default function EditProfile() {
    const navigate = useNavigate();

    const [user, setUser] = useState({});
    const [email, setEmail] = useState("");

    const getProfile = async () => {
        try {
            const res = await getMyProfile();
            setUser(res.data);
            setEmail(res.data.email);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProfile();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateProfile({ email });
            navigate("/dashboard/profile");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="edit-profile-page">

            <div className="edit-profile-card">

                <div className="edit-profile-header">
                    <h2>Edit Profile</h2>
                    <p>Only your email address can be updated</p>
                </div>

                <form className="edit-profile-form" onSubmit={handleSubmit}>

                    <div className="form-row">

                        <div className="form-group">
                            <label htmlFor="nom">Last Name</label>
                            <input type="text" id="nom" value={user.nom || ""} disabled />
                        </div>

                        <div className="form-group">
                            <label htmlFor="prenom">First Name</label>
                            <input type="text" id="prenom" value={user.prenom || ""} disabled />
                        </div>

                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="role">Role</label>
                        <input type="text" id="role" value={user.role || ""} disabled />
                    </div>

                    <div className="form-actions">

                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={() => navigate("/dashboard/profile")}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="save-btn"
                        >
                            Save Changes
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}
