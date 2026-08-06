
import UserList from "../components/users/UserList";
import SearchBar from "../components/common/SearchBar"
import Pagination from "../components/common/Pagination"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllUsers } from "../service/userSerivce";
export default function Users() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers()
            .then((res) => setUsers(res.data))
            .catch((error) => console.log(error))
    }, [])

    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <>
            <div className="users-page">

                <div className="page-header">
                    <h1>Users</h1>

                    {user.role === "ADMIN" && (
                        <button onClick={(() => navigate("/dashboard/users/ajouter-user"))} className="add-client-btn">
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
                            <UserList key={u.id} utilisatuer={u} />
                        ))}

                    </tbody>
                </table>

            </div>
        </>
    );
}