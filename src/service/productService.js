import api from "./Api"

export const getAllProducts = (page, size, orderBy = "id", order = "asc") => {
    return api.get("/produit", {
        params: { page, size, orderBy, order }
    })
}
export const deleteProduct =(id)=>{
    return api.delete(`/produit/${id}`)
}
export const getProductById = (id) => {
    return api.get(`/produit/${id}`);
};

export const updateProduct =(id,product)=>{
    return api.put(`/produit/${id}`,product)
}
export const addProduct= (product)=>{
 return api.post("/produit",product)
}

export const searchByCategory = (category) => {
    return api.get(`/produit/category?category=${category}`);
}

export const searchByPrice = (price) => {
    return api.get(`/produit/price?prix=${price}`);
}

export const getLowStock = () => {
    return api.get("/produit/low-stock");
};

export const getTotalProduct=()=>{
    return api.get("/produit/count")
}
