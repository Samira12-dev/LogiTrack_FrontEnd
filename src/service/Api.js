import axios from "axios";

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
            const goTo = (path) => {
                if (navigate) {
                    navigate(path);
                } else {
                    window.location.href = path;
                }
            };
            switch (error.response.status) {
                case 401:
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                    goTo("/login");
                    break
                case 403:
                    console.log("403 Forbidden on:", error.config?.method?.toUpperCase(), error.config?.url);
                    goTo("/access-denied");
                    break;
                case 404:
                    console.log("Resource not found");
                    goTo("/not-found");
                    break;
                case 500:
                    console.log("Internal server error");
                    break;
                default:
                    console.log("Unexpected error");
            }
        } else {
            console.log("Network error or no response from server");
        }
        return Promise.reject(error);
    }
)
export default api;