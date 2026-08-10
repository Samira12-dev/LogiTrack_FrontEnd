import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyProfile } from "../service/userService";

export default function Profile() {

    const navigate = useNavigate();

    const [user, setUser] = useState({});

    const getProfile = async () => {
        try {
            const res = await getMyProfile();
            setUser(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProfile();
    }, []);

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
                        <p>{user.prenom}</p>
                    </div>

                    <div className="profile-info">
                        <label>First Name</label>
                        <p>{user.nom}</p>
                    </div>

                    <div className="profile-info">
                        <label>Email</label>
                        <p>{user.email}</p>
                    </div>

                    <div className="profile-info">
                        <label>Role</label>
                        <span className="role-badge">{user.role}</span>
                    </div>

                </div>

                {/* <div className="profile-actions">
                    <button className="edit-btn" onClick={(()=>navigate("/dashboard/profile/edit-profile"))} >
                        Edit Profile
                    </button>
                </div> */}

            </div>

        </div>
    );
}