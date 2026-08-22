import { useNavigate } from "react-router-dom";

export default function UserList({ user, onDelete }) {
    const navigate = useNavigate();

    return (
        <tr>
            <td>{user.nom}</td>
            <td>{user.prenom}</td>
            <td>{user.email}</td>
            <td>
                <span className="role-badge">{user.role}</span>
            </td>
            <td>
                <div className="actions">
                    <button
                        className="btn-view"
                        onClick={() => navigate(`/dashboard/users/${user.id}`)}
                    >
                        View
                    </button>

                    <button
                        className="btn-edit"
                        onClick={() => navigate(`/dashboard/users/edit/${user.id}`)}
                    >
                        Edit
                    </button>

                    <button
                        className="btn-delete"
                        onClick={() => onDelete(user.id)}
                    >
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    );
}
