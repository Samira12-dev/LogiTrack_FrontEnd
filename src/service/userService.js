import api from "./Api"

export const getAllUsers= ()=>{
    return api.get("/users")
}

export const getMyProfile = () => {
    return api.get("/users/me");
};
