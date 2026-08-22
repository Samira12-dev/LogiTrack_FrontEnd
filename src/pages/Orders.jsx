import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    getAllOrders,
    getOrdersByClient,
    deleteOrder
} from "../service/orderService";
import Pagination from "../components/common/Pagination";
import SortControls from "../components/common/SortControls";
import OrdersList from "../components/orders/OrdersList";
import { getAllClients } from "../service/clientService";

const sortFields = [
    { value: "datecommand", label: "Date" },
    { value: "commandeStatut", label: "Statut" },
    { value: "id", label: "ID" }
];

export default function Orders() {

    const navigate = useNavigate();

    const [orders, setOrders] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);
    const [totalPages, setTotalPages] = useState(0);
    const [totalElements, setTotalElements] = useState(0);
    const [status, setStatus] = useState("");
    const [clients, setClients] = useState([]);
    const [clientId, setClientId] = useState("");
    const [orderBy, setOrderBy] = useState("id");
    const [order, setOrder] = useState("asc");

    const getOrders = async () => {
        try {
            let res;

            if (clientId !== "") {
                res = await getOrdersByClient(clientId);
                setOrders(res.data);
                setTotalPages(1);
                setTotalElements(res.data.length);
            } else {
                res = await getAllOrders(page, size, status, orderBy, order);
                setOrders(res.data.content);
                setTotalPages(res.data.totalPages);
                setTotalElements(res.data.totalElements);
            }

        } catch (error) {
            console.log("ORDERS ERROR:", error);
        }
    };

    useEffect(() => {
        getOrders();
    }, [page, status, clientId, size, orderBy, order]);

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this order?")) return;

        try {
            await deleteOrder(id);
            setOrders((prevOrders) => prevOrders.filter((o) => o.id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    const getClients = async () => {
        try {
            const res = await getAllClients(0, 100);
            setClients(res.data.content);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getClients();
    }, []);

    const handleOrderByChange = (value) => {
        setOrderBy(value);
        setPage(0);
    };

    const handleOrderChange = (value) => {
        setOrder(value);
        setPage(0);
    };

    return (
        <div className="orders-page">

            <div className="page-header">

                <h1>Orders</h1>

                <button
                    onClick={() =>
                        navigate("/dashboard/orders/ajouter-order")
                    }
                    className="add-order-btn"
                >
                    + Add Order
                </button>

            </div>

            <div className="toolbar">

                <select
                    value={clientId}
                    onChange={(e) => {
                        setClientId(e.target.value);
                        setPage(0);
                    }}
                >
                    <option value="">All Clients</option>

                    {clients.map((client) => (
                        <option key={client.id} value={client.id}>
                            {client.nom}
                        </option>
                    ))}
                </select>

                <select
                    value={status}
                    onChange={(e) => {
                        setStatus(e.target.value);
                        setPage(0);
                    }}
                >
                    <option value="">All Orders</option>
                    <option value="EN_ATTENTE">EN_ATTENTE</option>
                    <option value="EXPEDIEE">EXPEDIEE</option>
                    <option value="LIVREE">LIVREE</option>
                </select>

                <SortControls
                    fields={sortFields}
                    orderBy={orderBy}
                    order={order}
                    setOrderBy={handleOrderByChange}
                    setOrder={handleOrderChange}
                />

            </div>

            <table className="orders-table">

                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Client</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {orders.map((o) => (
                        <OrdersList
                            key={o.id}
                            command={o}
                            client={clients}
                            onDelete={handleDelete}
                        />
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
