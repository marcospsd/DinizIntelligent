import axios from "axios";


export const api = axios.create({
    baseURL: "",
});

export const createSession = (username, password) => {
    return api.post('/auth/', { username, password });
};

     

/// SWR