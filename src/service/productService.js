import api from "./Api"

export const getAllProducts= ()=>{
    return api.get("/produit")
}