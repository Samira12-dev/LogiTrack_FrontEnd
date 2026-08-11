import api from "./Api"

export const getAllClients = (page, size, nom = "", orderBy = "id", order = "asc") => {
    return api.get("/clients", {
        params: { page, size, nom, orderBy, order }
    })
}

export const getTotalClient=()=>{
    return api.get("/clients/count")
}

export const getClientById = (id) => {
    return api.get(`/clients/${id}`);
};

export const updateClient =(id,client)=>{
    return api.put(`/clients/${id}`,client)
}
export const addClient= (client)=>{
 return api.post("/clients",client)
}
export const deleteClient=(id)=>{
    return api.delete(`/clients/${id}`)
}
