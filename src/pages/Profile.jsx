import { useNavigate } from "react-router-dom";

export default function Profile() {
    const navigate = useNavigate();
    return (
        <div className="profile-page">

            <div className="profile-card">

                <div className="profile-header">

                    <div className="profile-avatar">
                        👤
                    </div>

                    <div>
                        <h2>My Profile</h2>
                        <p>Manage your account information</p>
                    </div>

                </div>

                <div className="profile-content">

                    <div className="profile-info">
                        <label>Last Name</label>
                        <p>Samira</p>
                    </div>

                    <div className="profile-info">
                        <label>First Name</label>
                        <p>El</p>
                    </div>

                    <div className="profile-info">
                        <label>Email</label>
                        <p>samira@gmail.com</p>
                    </div>

                    <div className="profile-info">
                        <label>Role</label>
                        <span className="role-badge">ADMIN</span>
                    </div>

                </div>

                <div className="profile-actions">
                    <button className="edit-btn" onClick={(()=>navigate("/dashboard/profile/edit-profile"))} >
                        Edit Profile
                    </button>
                </div>

            </div>

        </div>
    );
}