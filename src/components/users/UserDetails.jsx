import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById } from "../../service/userService";

export default function UserDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState({});

    const getUser = async () => {
        try {
            const res = await getUserById(id);
            setUser(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUser();
    }, [id]);

    return (
        <div className="user-details">

            <h2>User Details</h2>

            <div className="info">
                <label>Last name</label>
                <p>{user.nom}</p>
            </div>

            <div className="info">
                <label>First name</label>
                <p>{user.prenom}</p>
            </div>

            <div className="info">
                <label>Email</label>
                <p>{user.email}</p>
            </div>

            <div className="info">
                <label>Role</label>
                <p>{user.role}</p>
            </div>

            <div className="details-actions">
                <button className="back-btn" onClick={() => navigate("/dashboard/users")}>
                    Back
                </button>
                <button className="edit-btn" onClick={() => navigate(`/dashboard/users/edit/${id}`)}>
                    Edit
                </button>
            </div>

        </div>
    );
}
