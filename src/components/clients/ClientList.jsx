import { useNavigate } from "react-router-dom"

export default function ClientList({ client, onDelete }) {
    const navigate = useNavigate();
    const role = localStorage.getItem("role");
    return (
        <>

            <tr>
                <td>{client.nom}</td>
                <td>{client.email}</td>
                <td>{client.telephone}</td>
                <td>{client.ville}</td>
                <td>
                    <div className="actions">
                        <button className="btn-view" onClick={(() => navigate(`/dashboard/clients/${client.id}`))}>View</button>
                        {["ADMIN", "MAANGER"].includes(role) && (
                            <button className="btn-edit" onClick={(() => navigate(`/dashboard/clients/edit${client.id}`))}>Modify</button>
                        )}
                        {role === "ADMIN" && (
                            <button className="btn-delete" onClick={() => onDelete(client.id)}>Delete</button>
                        )}
                    </div>
                </td>
            </tr>
        </>
    )
}