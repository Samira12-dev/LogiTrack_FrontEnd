import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClientList from "../components/clients/ClientList";
import { deleteClient, getAllClients } from "../service/clientService";
import Pagination from "../components/common/Pagination";
import SearchBar from "../components/common/SearchBar";
import SortControls from "../components/common/SortControls";

const sortFields = [
    { value: "nom", label: "Nom" },
    { value: "id", label: "ID" }
];

export default function Clients() {
    const navigate = useNavigate();
    const [clients, setClient] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const [nom, setNom] = useState("");
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);
    const [totalPages, setTotalPages] = useState(0);
    const [totalElements, setTotalElements] = useState(0);
    const [orderBy, setOrderBy] = useState("id");
    const [order, setOrder] = useState("asc");

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
            const res = await getAllClients(page, size, nom, orderBy, order)
            setClient(res.data.content)
            setTotalPages(res.data.totalPages)
            setTotalElements(res.data.totalElements)

        } catch (error) {
            console.log(error)
        }
    }

    const handleSearch = () => {
        setNom(searchTerm);
        setPage(0);
    };

    const handleOrderByChange = (value) => {
        setOrderBy(value);
        setPage(0);
    };

    const handleOrderChange = (value) => {
        setOrder(value);
        setPage(0);
    };

    useEffect(() => {
        getClients();
    }, [page, size, nom, orderBy, order])

    return (
        <div className="clients-page">
            <div className="page-header">
                <h1>Clients</h1>
                <button onClick={() => navigate("/dashboard/clients/ajouter-client")} className="add-client-btn">+ Ajouter Client</button>
            </div>

            <div className="toolbar">
                <SearchBar
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onSearch={handleSearch}
                />

                <SortControls
                    fields={sortFields}
                    orderBy={orderBy}
                    order={order}
                    setOrderBy={handleOrderByChange}
                    setOrder={handleOrderChange}
                />
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
                size={size}
                setSize={setSize}
                totalElements={totalElements}
            />
        </div>
    );
}
