import axios from 'axios'

const token = localStorage.getItem('token')

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        "token":token
    }
});

export default {
    apiClient
}