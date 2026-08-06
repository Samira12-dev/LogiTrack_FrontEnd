import api from "./Api"

export const getAllUsers= ()=>{
    return api.get("/users")
}
