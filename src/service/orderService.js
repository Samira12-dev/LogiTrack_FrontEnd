import api from "./Api";

export const getAllOrders = (page, size) => {
    return api.get(`/commands?page=${page}&size=${size}`);
};

export const getOrderById = (id) => {
    return api.get(`/commands/${id}`);
};

export const createOrder = (clientId) => {
    return api.post(`/commands?clientId=${clientId}`);
};

export const addProductToOrder=(orderId,productId,quantity)=>{
return api.post(`/commands/${orderId}/produit`,{ produitId:productId, quantity:quantity });
};

export const updateOrderStatus = (orderId, status) => {
    return api.put(`/commands/${orderId}/status?status=${status}`);
};

export const getOrdersByClient = (clientId) => {
    return api.get(`/commands/client/${clientId}`);
};

export const getOrdersByStatus=(status,page,size)=>{
return api.get(`/commands?statut=${status}&page=${page}&size=${size}`);
};

export const getTotalOrders=()=>{
    return api.get("/commands/count")
}