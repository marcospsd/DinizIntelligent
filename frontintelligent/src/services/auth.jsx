import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import {api, createSession } from "../services/api";


export const AuthContext = createContext();


export const AuthProvicer = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUser = localStorage.getItem('nome');
        const getToken = localStorage.getItem('token');

        if(getUser && getToken) {
            setUser(JSON.parse(getUser));
            api.defaults.headers.Authorization = `token ${getToken}`
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
            const setCargo = response.data.cargo
            const setSetor = response.data.setor
            const setFilial = response.data.filial
            const setPK = response.data.id

            localStorage.setItem("nome", JSON.stringify(setName));
            localStorage.setItem("token", setToken);
            localStorage.setItem('cargo', JSON.stringify(setCargo));
            localStorage.setItem('setor', setSetor);
            localStorage.setItem('id', setPK);
            localStorage.setItem('filial', JSON.stringify(setFilial));

            api.defaults.headers.Authorization = `token ${setToken}`

            setUser(setName);
            navigate("/")
        } catch(e){
            window.alert("Login ou senha Incorretos")
        };
    };
    
    const logout = () => {
        localStorage.removeItem("nome")
        localStorage.removeItem("token")
        localStorage.removeItem("cargo")
        localStorage.removeItem("setor")
        localStorage.removeItem("filial")
        localStorage.removeItem("id")

        api.defaults.headers.Authorization = null;

        setUser(null);
        navigate("/login")
    };

    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, loading, login, logout }}>{children}</AuthContext.Provider>
    )
}