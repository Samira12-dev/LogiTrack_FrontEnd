import { useEffect, useState } from "react";
import {
    FaUsers,
    FaBox,
    FaTruck,
    FaClock,
    FaCheck,
    FaTriangleExclamation
} from "react-icons/fa6";
import { getTotalClient, getAllClients } from "../service/clientService";
import { getTotalProduct, getLowStock } from "../service/productService";
import {
    getTotalOrders,
    getPendingOrders,
    getShippedOrders,
    getDeliveredOrders,
    getAllOrders
} from "../service/orderService";

export default function Dashboard() {
    const [totalClients, setTotalClients] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);
    const [totalCommands, setTotalCommands] = useState(0);
    const [pendingOrders, setPendingOrders] = useState(0);
    const [shippedOrders, setShippedOrders] = useState(0);
    const [deliveredOrders, setDeliveredOrders] = useState(0);
    const [lowStock, setLowStock] = useState([]);
    const [recentOrders, setRecentOrders] = useState([]);
    const [clients, setClients] = useState([]);

    const user = JSON.parse(localStorage.getItem("user"));
    const role = user?.role;

    const totalClient = async () => {
        try {
            const res = await getTotalClient();
            setTotalClients(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const totalProduct = async () => {
        try {
            const res = await getTotalProduct();
            setTotalProducts(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const totalOrders = async () => {
        try {
            const res = await getTotalOrders();
            setTotalCommands(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getPending = async () => {
        try {
            const res = await getPendingOrders();
            setPendingOrders(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getShipped = async () => {
        try {
            const res = await getShippedOrders();
            setShippedOrders(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getDelivered = async () => {
        try {
            const res = await getDeliveredOrders();
            setDeliveredOrders(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getLowStockProducts = async () => {
        try {
            const res = await getLowStock();
            setLowStock(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getRecentOrders = async () => {
        try {
            const res = await getAllOrders(0, 3);
            setRecentOrders(res.data.content);
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
        if (["ADMIN", "MANAGER"].includes(role)) {
            totalClient();
            totalProduct();
            totalOrders();
        }

        getPending();
        getShipped();
        getDelivered();
        getLowStockProducts();
        getRecentOrders();
        getClients();
    }, [role]);

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>

            <div className="stats-grid">
                {["ADMIN", "MANAGER"].includes(role) && (
                    <>
                        <div className="stat-card">
                            <FaUsers className="stat-icon" />
                            <div>
                                <h3>{totalClients}</h3>
                                <p>Clients</p>
                            </div>
                        </div>

                        <div className="stat-card">
                            <FaBox className="stat-icon" />
                            <div>
                                <h3>{totalProducts}</h3>
                                <p>Products</p>
                            </div>
                        </div>

                        <div className="stat-card">
                            <FaTruck className="stat-icon" />
                            <div>
                                <h3>{totalCommands}</h3>
                                <p>Total Orders</p>
                            </div>
                        </div>
                    </>
                )}

                <div className="stat-card">
                    <FaClock className="stat-icon" />
                    <div>
                        <h3>{pendingOrders}</h3>
                        <p>Pending Orders</p>
                    </div>
                </div>

                <div className="stat-card">
                    <FaTruck className="stat-icon" />
                    <div>
                        <h3>{shippedOrders}</h3>
                        <p>Shipped Orders</p>
                    </div>
                </div>

                <div className="stat-card">
                    <FaCheck className="stat-icon" />
                    <div>
                        <h3>{deliveredOrders}</h3>
                        <p>Delivered Orders</p>
                    </div>
                </div>
            </div>

            <div className="dashboard-content">
                <div className="dashboard-card">
                    <h2>
                        <FaTriangleExclamation />
                        Low Stock Products
                    </h2>

                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lowStock.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.nom}</td>
                                    <td>{product.quantityStock}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="dashboard-card">
                    <h2>Recent Orders</h2>

                    <table>
                        <thead>
                            <tr>
                                <th>Customer</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentOrders.map((order) => {
                                const client = clients.find(
                                    (c) => c.id === order.clientId
                                );

                                return (
                                    <tr key={order.id}>
                                        <td>{client?.nom || "Unknown"}</td>
                                        <td>{order.datecommand}</td>
                                        <td>
                                            <span
                                                className={
                                                    order.commandeStatut === "LIVREE"
                                                        ? "status delivered"
                                                        : order.commandeStatut === "EXPEDIEE"
                                                            ? "status shipped"
                                                            : "status pending"
                                                }
                                            >
                                                {order.commandeStatut}
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}