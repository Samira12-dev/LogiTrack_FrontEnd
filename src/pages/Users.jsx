import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../service/userService";

export default function Users() {
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const res = await getAllUsers();

                console.log("USERS RESPONSE:", res);
                console.log("USERS DATA:", res.data);

                setUsers(res.data);
            } catch (error) {
                console.log("ERROR USERS:", error);
            }
        };

        loadUsers();
    }, []);

    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div className="users-page">

            <div className="page-header">
                <h1>Users</h1>

                {user?.role === "ADMIN" && (
                    <button
                        onClick={() => navigate("/dashboard/users/ajouter-user")}
                        className="add-client-btn"
                    >
                        + Add User
                    </button>
                )}
            </div>

            <table className="users-table">

                <thead>
                    <tr>
                        <th>Last name</th>
                        <th>First name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((u) => (
                        <tr key={u.id}>

                            <td>{u.nom}</td>

                            <td>{u.prenom}</td>

                            <td>{u.email}</td>

                            <td>
                                <span className="role-badge">
                                    {u.role}
                                </span>
                            </td>

                            <td>
                                <div className="actions">

                                    <button className="btn-view">
                                        View
                                    </button>

                                    <button className="btn-edit">
                                        Edit
                                    </button>

                                    <button className="btn-delete">
                                        Delete
                                    </button>

                                </div>
                            </td>

                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    );
}