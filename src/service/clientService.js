import api from "./Api"

export const getAllClients =()=>{
    return api.get("/clients")
}


export const getTotalClient=()=>{
    return api.get("/clients/count")
}