import api from "./Api"

export const getAllUsers = (page, size) => {
return api.get(`/users?page=${page}&size=${size}`);
};

export const getMyProfile = () => {
    return api.get("/users/me");
};
