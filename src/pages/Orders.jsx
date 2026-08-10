import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    getAllOrders,
    getOrdersByStatus,
    getOrdersByClient
} from "../service/orderService";
import Pagination from "../components/common/Pagination";
import OrdersList from "../components/orders/OrdersList";
import { getAllClients } from "../service/clientService";

export default function Orders() {

    const navigate = useNavigate();

    const [orders, setOrders] = useState([]);
    const [page, setPage] = useState(0);
    const [size] = useState(5);
    const [totalPages, setTotalPages] = useState(0);
    const [status, setStatus] = useState("");
    const [clients, setClients] = useState([]);
    const [clientId, setClientId] = useState("");

    const getOrders = async () => {
        try {
            let res;

            if (clientId !== "") {
                res = await getOrdersByClient(clientId);
                setOrders(res.data);
                setTotalPages(1);
            } else if (status !== "") {
                res = await getOrdersByStatus(status, page, size);
                setOrders(res.data.content);
                setTotalPages(res.data.totalPages);
            } else {
                res = await getAllOrders(page, size);
                setOrders(res.data.content);
                setTotalPages(res.data.totalPages);
            }

        } catch (error) {
            console.log("ORDERS ERROR:", error);
        }
    };

    useEffect(() => {
        getOrders();
    }, [page, status, clientId]);

    const getClients = async () => {
        try {
            const res = await getAllClients(0, 100);
            setClients(res.data.content);
        } catch (error) {
            console.log( error);
        }
    };

    useEffect(() => {
        getClients();
    }, []);

    return (
        <div className="orders-page">

            <div className="page-header">

                <h1>Orders</h1>

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

                <button
                    onClick={() =>
                        navigate("/dashboard/orders/ajouter-order")
                    }
                    className="add-order-btn"
                >
                    + Add Order
                </button>

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
                        />
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