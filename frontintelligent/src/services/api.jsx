import axios from "axios";
import useSWR from 'swr'

export const api = axios.create({
    baseURL: "https://di.dinizvitoria.com.br",
});

export const createSession = (username, password) => {
    return api.post('/auth/', { username, password });
};

     

/// SWR

export const useAxios = (url) => {
    //const { mutate } = useSWRConfig()
    const { data, mutate} = useSWR(url, async url => {
        const response = await api.get(url);

        return response.data
        
    //  }, { refreshInterval: 10000 })
    })
    return {data, mutate}
}
