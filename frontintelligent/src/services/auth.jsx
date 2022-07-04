import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import {api, createSession } from "../services/api";


export const AuthContext = createContext();


export const AuthProvicer = ({children}) => {
    const navigate = useNavigate();
    const [activo, setActivo] = useState(null)
    const [user, setUser]= useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUser = localStorage.getItem('nome');
        const getToken = localStorage.getItem('token');
        const getCodUser = localStorage.getItem('coduser')

        if(getUser && getToken) {
            setActivo(JSON.parse(getUser));
            api.defaults.headers.Authorization = `token ${getToken}`
            api.get(`/auth/create/${getCodUser}/`)
            .then((res) => 
                setUser(res.data))
        }
        setLoading(false);
    }, []);


    const login = async (username, password) => {
        try{
            const response = await createSession(username, password)
            if(response.status !== 200){
                setError('Deu erro no coisa');
            }
            const setName = response.data.nome
            const setToken = response.data.token
            const setPK = response.data.id
            
            localStorage.setItem("nome", JSON.stringify(setName));
            localStorage.setItem("token", setToken);
            localStorage.setItem('coduser', setPK);
            api.defaults.headers.Authorization = `token ${setToken}`

            setActivo(setName);
            setUser(response.data)
            
            navigate("/")
        } catch(e){
            window.alert("Login ou senha Incorretos")
        };
    };
    
    const logout = () => {
        localStorage.removeItem("nome")
        localStorage.removeItem("token")
        localStorage.removeItem('coduser')
        api.defaults.headers.Authorization = null;

        setActivo(null);
        navigate("/login")
    };

    return (
        <AuthContext.Provider value={{ authenticated: !!activo, activo, loading, login, logout, user }}>{children}</AuthContext.Provider>
    )
}