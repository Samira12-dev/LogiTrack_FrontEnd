import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClientList from "../components/clients/ClientList";
import { deleteClient, getAllClients } from "../service/clientService";
import Pagination from"../components/common/Pagination";
export default function Clients() {
  const navigate = useNavigate();
  const [clients, setClient] = useState([])

  const [page, setPage] = useState(0);

  const [size] = useState(5);

  const [totalPages, setTotalPages] = useState(0);

  const handleDelete = async (id) => {
    try {
      await deleteClient(id);

      setClient((prevClients) =>
        prevClients.filter((c) => c.id !== id)
      );

    } catch (error) {
      console.log(error);
    }
  };


  const getClients = async () => {
    try {
      const res = await getAllClients(page,size)
      setClient(res.data.content)
      setTotalPages(res.data.totalPages)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getClients();
  }, [page])
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
            <ClientList key={c.id} client={c} onDelete={handleDelete} />
          ))}
        </tbody>
      </table>
      <Pagination
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    </div>
  );
}