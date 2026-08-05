import axios from "axios";
import { useNavigate } from "react-router-dom";

const api = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json"
    }
})
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    }

)
let navigate;

export const setupNavigate = (nav) => {
    navigate = nav;
};
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                    navigate("/login");
                    break
                case 403:
                    navigate("/access-denied");
                    break;
                case 404:
                    console.log("Resource not found");
                    navigate("/not-found")
                    break;
                case 500:
                    console.log("Internal server error");
                    break;
                default:
                    console.log("Unexpected error");
            }
            throw error;
        }
    }
)
export default api;