import api from "./Api"

export const getAllOrders = ()=>{
    return api.get("/commands")
}