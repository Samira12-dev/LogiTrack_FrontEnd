import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getClientById } from "../../service/clientService";

export default function ClientsDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [client, setClient] = useState({})

    const getClient = async () => {
        try {
            const res = await getClientById(id);
            setClient(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getClient();
    },[id])

    return (
        <div className="client-details">

            <h2>Informations Client</h2>

            <div className="item">
                <label>Nom</label>
                <p>{client.nom}</p>
            </div>

            <div className="item">
                <label>Email</label>
                <p>{client.email}</p>
            </div>

            <div className="item">
                <label>Téléphone</label>
                <p>{client.telephone}</p>
            </div>

            <div className="item">
                <label>Ville</label>
                <p>{client.ville}</p>
            </div>

            <div className="details-actions">
                <button className="btn-back"
                 onClick={() => navigate("/dashboard/clients")}>Retour</button>
                <button className="btn-update"
                 onClick={() => navigate(`/dashboard/clients/edit/${id}`)}
                >Modifier</button>
            </div>

        </div>
    );
}