import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import LoginPage from "../pages/Auth/auth";
import HomeView from "../pages/Home/home";
import { AuthProvicer, AuthContext } from "../services/auth";
import React, { useContext } from "react";



const AppRoutes = () => {
    const Private = ({children}) =>{
        const { authenticated, loading } = useContext(AuthContext);
        if (loading) {
            return <div className="loading">Carregando...</div>
        }


        if(!authenticated) {
            return <Navigate to="/login" />
        }

        return children;
    }


    return (
        <BrowserRouter>
            <AuthProvicer>
                <Routes>
                    <Route exact path="/login" element={<LoginPage/>} />
                    <Route exact path="/" element={<Private><HomeView/></Private>} />

                    
                </Routes>
            </AuthProvicer>
        </BrowserRouter>
    );
};

export default AppRoutes;