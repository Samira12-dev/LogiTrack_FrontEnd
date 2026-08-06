import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
export default function Orders() {
    const navigate =useNavigate();
    
    const [orders,setOrders] =useState([])

    const getOrders = async () => {
    try {
      const res = await getAllOrders()
      setOrders(res.data)

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getOrders();
  },[])
    return (
        <>
            <div className="orders-page">
                <div className="page-header">
                    <h1>Orders</h1>
                    <button onClick={()=>navigate('/dashboard/orders/ajouter-order')} className="add-order-btn">+ Add Order</button>
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
                        {orders.map((o)=>(
                            <OrdersList key={o.id} command={o}/>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}