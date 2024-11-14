import axios from 'axios'

const token = JSON.parse(localStorage.getItem('store'))
console.log(token.token);


const apiClient = axios.create({
    baseURL: 'http://localhost:3999/api',
    headers: {
        "x-token":token.token
    }
}); 

export default apiClient
