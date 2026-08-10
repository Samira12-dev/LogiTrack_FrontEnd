import { useEffect, useState } from "react";
import { FaUsers, FaBox, FaTruck, FaClock, FaCheck, FaTriangleExclamation } from "react-icons/fa6";
import { getTotalClient } from "../service/clientService";
import { getTotalProduct } from "../service/productService";
import { getTotalOrders } from "../service/orderService";

export default function Dashboard() {

    const [totalClients, setTotalClients] = useState(0)
    const [totalProducts,setTotalProducts]=useState(0)

    const[totalCommands, setTotalCommands] = useState(0);

    const totalClient = async ()=>{
        try{
            const res = await getTotalClient()
            setTotalClients(res.data)
        }catch(error){
            console.log(error);
        }
        
    }

    const totalProduct= async ()=>{
        try{
            const res= await getTotalProduct()
            setTotalProducts(res.data)
        }catch (error){
            console.log(error);
        }
    }

    const totalOrders= async() =>{
        try{
            const res= await getTotalOrders()
            setTotalCommands(res.data);
        }catch(error){
            console.log(error);
        }
    }


    useEffect(()=>{
        totalClient()
    },[])

    useEffect(()=>{
        totalProduct();
    },[])

    useEffect(()=>{
        totalOrders();
    },[])
    return (
        <div className="dashboard">

            <h1>Dashboard</h1>

            <div className="stats-grid">

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