import apiClient from "../plugins/axios";

export async function getData(url) {
    try {
        
        const response = await apiClient.get(url);
        return response.data;
    } catch (error) {
        console.errot('erro en la peticion GET', error);
        throw error;
    }
}

export async function postData(url, data) {
    try {
        console.log(data)
        const response = await apiClient.get(url, data);
        return response.data;
    } catch (error) {
        console.errot('erro en la peticion POST', error);
        throw error;
    }
}

export async function putData(url, data) {
    try {
        
        const response = await apiClient.get(url);
        return response.data;
    } catch (error) {
        console.errot('erro en la peticion PUT', error);
        throw error;
    }
}

