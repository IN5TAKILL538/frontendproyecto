import axios from 'axios';

// Obtener y parsear el token del localStorage
let token = JSON.parse(localStorage.getItem('store'));

if(token){
    token= token.token
}
else{
    token= ""
}

const apiClient = axios.create({
    baseURL: 'http://localhost:3999/api',
    headers: {
        "x-token": token // Si no hay token, no se agrega el header
    }
});

export default apiClient;
