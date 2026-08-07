import api from "./Api"

export const getAllProducts= ()=>{
    return api.get("/produit")
}
export const deleteProduct =(id)=>{
    return api.delete(`/produit/${id}`)
}
export const getProductById = (id) => {
    return api.get(`/produit/${id}`);
};
