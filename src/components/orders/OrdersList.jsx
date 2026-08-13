
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OrdersList({ command, client }) {
    const navigate = useNavigate();

    const cl = client.find((c) => c.id === command.clientId);

    const [status] = useState(command.commandeStatut);

    const user = JSON.parse(localStorage.getItem("user"));
    const role = user?.role;

    

    return (
        <tr>
            <td>{command.id}</td>

            <td>{command.datecommand}</td>

            <td>{cl?.nom}</td>

            <td>
                <span className={`status-badge ${status.toLowerCase()}`}>
                    {status}
                </span>
            </td>

            <td>
                <div className="actions">

                    <button
                        className="btn-view"
                        onClick={() =>
                            navigate(`/dashboard/orders/${command.id}`)
                        }
                    >
                        View
                    </button>

                    {["ADMIN", "MANAGER"].includes(role) 
                    && (
                        <button
                            className="btn-edit"
                            onClick={() =>
                                navigate(
                                    `/dashboard/orders/${command.id}/produit`
                                )
                            }
                        >
                            + Add Product
                        </button>
                    )}

                    {role === "ADMIN" && (
                        <button className="btn-delete">
                            Delete
                        </button>
                    )}

                </div>
            </td>
        </tr>
    );
}
