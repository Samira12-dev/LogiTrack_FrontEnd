import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClientList from "../components/clients/ClientList";
import { getAllClients } from "../service/clientService";

export default function Clients() {
  const navigate = useNavigate();
  const [clients, setClient] = useState([])

  const getClients = async () => {
    try {
      const res = await getAllClients()
      setClient(res.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getClients();
  }, [])
  return (
    <div className="clients-page">
      <div className="page-header">
        <h1>Clients</h1>
        <button onClick={() => navigate("/dashboard/clients/ajouter-client")} className="add-client-btn">+ Ajouter Client</button>
      </div>

      <table className="clients-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Ville</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {clients.map((c) => (
            <ClientList key={c.id} client={c} />
          ))}
        </tbody>
      </table>



    </div>
  );
}