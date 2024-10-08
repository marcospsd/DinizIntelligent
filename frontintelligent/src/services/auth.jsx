import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import {api, createSession } from "../services/api";


export const AuthContext = createContext();


export const AuthProvicer = ({children}) => {
    const navigate = useNavigate();
    const [activo, setActivo] = useState(null)
    const [user, setUser]= useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUser = localStorage.getItem('di@nome');
        const getToken = localStorage.getItem('di@token');
        const getCodUser = localStorage.getItem('di@coduser')

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
            const setName = response.data.nome
            const setToken = response.data.token
            const setPK = response.data.id
            
            localStorage.setItem("di@nome", JSON.stringify(setName));
            localStorage.setItem("di@token", setToken);
            localStorage.setItem('di@coduser', setPK);
            api.defaults.headers.Authorization = `token ${setToken}`

            setActivo(setName);
            api.get(`/auth/create/${response.data.id}/`)
            .then((res) => 
                setUser(res.data))
            
            navigate("/")
        } catch(e){
            window.alert("Login ou senha Incorretos")
        };
    };
    
    const logout = () => {
        localStorage.removeItem("di@nome")
        localStorage.removeItem("di@token")
        localStorage.removeItem('di@coduser')
        api.defaults.headers.Authorization = null;

        setActivo(null);
        setUser(null)
        navigate("/login")
    };

    return (
        <AuthContext.Provider value={{ authenticated: !!activo, activo, loading, login, logout, user

        }}>{children}</AuthContext.Provider>
    )
}