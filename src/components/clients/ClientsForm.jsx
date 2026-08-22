import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addClient,updateClient,getClientById } from "../../service/clientService";
export default function ClientsForm() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [client, setClient] = useState({
        nom:"",
        email:"",
        telephone:"",
        ville:""
    });


    const getClient = async() =>{
            if(!id) return
            try{
                const res= await getClientById(id)
                setClient(res.data)
            }catch(error){
                console.log(error)
            }
        }

    useEffect(()=>{
        getClient();
    },[id])


    const handleSubmit= async(e)=>{
        e.preventDefault();
        try{
            if(id){
                await updateClient(id, client)
            }else{
                await addClient(client)
            }
            navigate("/dashboard/clients")
        }catch(error){
            console.log(error);
        }
    }


    return (
        <form className="client-form" onSubmit={handleSubmit}>
            <h2>{id ? "Edit client" : "Add client"}</h2>

            <label>Nom</label>
            <input type="text" value={client.nom}  onChange={(e)=>
                setClient({...client, nom:e.target.value})
            } />

            <label>Email</label>
            <input type="email" value={client.email}  onChange={(e)=>
                setClient({...client, email:e.target.value})
            } />

            <label>Téléphone</label>
            <input type="text"  value={client.telephone} onChange={
                (e)=>setClient({...client, telephone:e.target.value})} />

            <label>Ville</label>
            <input type="text" value={client.ville} onChange={(e)=>setClient({...client, ville:e.target.value})}/>

            <button type="submit">{id ? "update Client": "sava Client"}</button>
        </form>
    );
}