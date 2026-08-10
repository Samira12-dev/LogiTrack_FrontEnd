import {useEffect,useState} from "react";
import {useNavigate,useParams} from "react-router-dom";
import {getOrderById,updateOrderStatus} from "../../service/orderService";

export default function OrderDetails(){

const {id}=useParams();
const navigate=useNavigate();

const [order,setOrder]=useState({});
const [newStatus,setNewStatus]=useState("");

const getOrder=async()=>{
try{
const res=await getOrderById(id);
setOrder(res.data);
setNewStatus(res.data.commandeStatut);
}catch(error){
console.log(error);
}
};

useEffect(()=>{
getOrder();
},[id]);

const handleSave=async()=>{
try{
await updateOrderStatus(id,newStatus);
navigate("/dashboard/orders");
}catch(error){
console.log(error);
}
};

return(

<div className="order-details">

<h2>Order Details</h2>

<div className="item">
<label>Order ID</label>
<p>#{order.id}</p>
</div>

<div className="item">
<label>Client ID</label>
<p>{order.clientId}</p>
</div>

<div className="item">
<label>Date</label>
<p>{order.datecommand}</p>
</div>

<div className="item">
<label>Status</label>

<select
value={newStatus}
onChange={(e)=>setNewStatus(e.target.value)}

>

<option value="EN_ATTENTE">EN_ATTENTE</option>
<option value="EXPEDIEE">EXPEDIEE</option>
<option value="LIVREE">LIVREE</option>
</select>

</div>

<div className="details-actions">

<button
className="btn-back"
onClick={()=>navigate("/dashboard/orders")}

>

Back </button>

<button
className="btn-update"
onClick={handleSave}

>

Save </button>

</div>

</div>
);
}
