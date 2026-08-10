import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllClients } from "../../service/clientService";
import { createOrder } from "../../service/orderService";

export default function OrdersForm() {
    const navigate = useNavigate();
    const [clients, setClients] = useState([]);
    const [clientId, setClientId] = useState("");

   const getClients = async () => {
    try {
        const res = await getAllClients(0, 10);

        console.log("DATA:", res.data);
        console.log("CONTENT:", res.data.content);

        setClients(res.data.content);
    } catch (error) {
        console.log("ERROR:", error);
    }
};



    useEffect(() => {
        getClients();
    }, []);

  
  
    const handleSubmit = async (e) => {
    e.preventDefault();

    if (!clientId) {
        console.log("No client selected");
        return;
    }

    try {
        const res = await createOrder(Number(clientId));
        navigate("/dashboard/orders");
    } catch (error) {
        console.log(error);
    
    }
};


    return (
        <form className="order-form" onSubmit={handleSubmit}>
            <h2>Add Order</h2>
            <label>Client</label>
            <select value={clientId} onChange={(e) => setClientId(e.target.value)}>
                <option value="">Select Client</option>
                {clients.map((client) => (
                    <option key={client.id} value={client.id}>
                        {client.nom}
                    </option>
                ))}
            </select>
            <button type="submit" >Save Order</button>
        </form>
    );
}