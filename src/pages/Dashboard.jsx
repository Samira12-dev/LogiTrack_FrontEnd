import { FaUsers, FaBox, FaTruck, FaClock, FaCheck, FaTriangleExclamation } from "react-icons/fa6";

export default function Dashboard() {
    return (
        <div className="dashboard">

            <h1>Dashboard</h1>

            <div className="stats-grid">

                <div className="stat-card">
                    <FaUsers className="stat-icon" />
                    <div>
                        <h3>120</h3>
                        <p>Clients</p>
                    </div>
                </div>

                <div className="stat-card">
                    <FaBox className="stat-icon" />
                    <div>
                        <h3>350</h3>
                        <p>Products</p>
                    </div>
                </div>

                <div className="stat-card">
                    <FaTruck className="stat-icon" />
                    <div>
                        <h3>200</h3>
                        <p>Orders</p>
                    </div>
                </div>

                <div className="stat-card">
                    <FaClock className="stat-icon" />
                    <div>
                        <h3>25</h3>
                        <p>Pending Orders</p>
                    </div>
                </div>

                <div className="stat-card">
                    <FaTruck className="stat-icon" />
                    <div>
                        <h3>90</h3>
                        <p>Shipped Orders</p>
                    </div>
                </div>

                <div className="stat-card">
                    <FaCheck className="stat-icon" />
                    <div>
                        <h3>85</h3>
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

                            <tr>
                                <td>Laptop</td>
                                <td>3</td>
                            </tr>

                            <tr>
                                <td>Printer</td>
                                <td>5</td>
                            </tr>

                            <tr>
                                <td>Mouse</td>
                                <td>2</td>
                            </tr>

                        </tbody>

                    </table>

                </div>



                <div className="dashboard-card">

                    <h2>
                        Recent Orders
                    </h2>

                    <table>

                        <thead>
                            <tr>
                                <th>Customer</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>


                        <tbody>

                            <tr>
                                <td>Ahmed</td>
                                <td>04/08/2026</td>
                                <td>
                                    <span className="status delivered">
                                        DELIVERED
                                    </span>
                                </td>
                            </tr>


                            <tr>
                                <td>Sara</td>
                                <td>03/08/2026</td>
                                <td>
                                    <span className="status pending">
                                        PENDING
                                    </span>
                                </td>
                            </tr>


                            <tr>
                                <td>Yassine</td>
                                <td>02/08/2026</td>
                                <td>
                                    <span className="status shipped">
                                        SHIPPED
                                    </span>
                                </td>
                            </tr>


                        </tbody>

                    </table>

                </div>


            </div>

        </div>
    );
}