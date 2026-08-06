import api from "./Api"

export const getAllClients =()=>{
    return api.get("/clients")
}