import api from "./Api";

export const getAllOrders = (page, size, statut = "", orderBy = "id", order = "asc") => {
    const params = { page, size, orderBy, order };
    if (statut !== "") {
        params.statut = statut;
    }
    return api.get("/commands", { params });
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

export const deleteOrder = (id) => {
    return api.delete(`/commands/${id}`);
};

export const getTotalOrders=()=>{
    return api.get("/commands/count")
}

export const getPendingOrders = () => {
return api.get("/commands/count/pending");
};

export const getShippedOrders = () => {
return api.get("/commands/count/shipped");
};

export const getDeliveredOrders = () => {
return api.get("/commands/count/delivered");
};