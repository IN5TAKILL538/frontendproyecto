import axios from "axios";

// Obtener y parsear el token del localStorage
let token = JSON.parse(localStorage.getItem("store"));

if (token) {
    token = token.token;
} else {
    token = "";
}
const apiClient = axios.create({
/*     baseURL: "http://localhost:3999/api", */
   baseURL:"https://backend-inventario-3dv3.onrender.com/api", 
    headers: {
        "x-token": token,
    },
});

export default apiClient;
