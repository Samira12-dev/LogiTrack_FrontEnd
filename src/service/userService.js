import api from "./Api"

export const getAllUsers = (page, size, orderBy = "id", order = "asc") => {
return api.get("/users", {
    params: { page, size, orderBy, order }
});
};

export const getMyProfile = () => {
    return api.get("/users/me");
};

export const getUserById = (id) => {
    return api.get(`/users/${id}`);
};

export const updateUser = (id, user) => {
    return api.put(`/users/${id}`, user);
};

export const deleteUser = (id) => {
    return api.delete(`/users/${id}`);
};

export const updateProfile = (data) => {
    return api.put("/users/me", data);
};
