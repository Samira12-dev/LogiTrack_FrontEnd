import api from "./Api"

export const getAllUsers = (page, size, orderBy = "id", order = "asc") => {
return api.get("/users", {
    params: { page, size, orderBy, order }
});
};

export const getMyProfile = () => {
    return api.get("/users/me");
};
