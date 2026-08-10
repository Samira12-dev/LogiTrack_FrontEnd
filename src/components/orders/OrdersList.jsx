import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function OrdersList({ command, client }) {
    const navigate = useNavigate();
    const cl = client.find((c) => c.id === command.clientId);
    const [status, setStatus] = useState(command.commandeStatut);

    const handleStatusChange = async (e) => {
        const newStatus = e.target.value;

        try {
            await updateOrderStatus(command.id, newStatus);

            setStatus(newStatus);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <tr>
                <td>{command.id}</td>
                <td>{command.datecommand}</td>
                <td>{cl?.nom}</td>
                <td>
                    <select value={status} onChange={handleStatusChange}  >
                        <option value="EN_ATTENTE">
                            EN_ATTENTE
                        </option>
                        <option value="EXPEDIEE">
                            EXPEDIEE
                        </option>
                        <option value="LIVREE">
                            LIVREE
                        </option>
                    </select>
                </td>
                <td>
                    <div className="actions">
                        <button className="btn-view" onClick={() =>
                            navigate(`/dashboard/orders/${command.id}`)}>View</button>
                        <button className="btn-edit"
                            onClick={() => navigate(`/dashboard/orders/${command.id}/produit`)} >+ Add Product
                        </button>
                        <button className="btn-delete">Delete</button>
                    </div>
                </td>
            </tr>
        </>
    )
}