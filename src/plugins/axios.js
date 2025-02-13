import axios from "axios";

const apiClient = axios.create({
/*     baseURL: "http://localhost:3999/api", */
  baseURL:"https://backend-inventario-3dv3.onrender.com/api", 
});

apiClient.interceptors.request.use(
    (config) => {
        const dataStore = JSON.parse(localStorage.getItem("store"));
        const token = dataStore?.token || "";
        config.headers["x-token"] = token;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
  
export default apiClient;




