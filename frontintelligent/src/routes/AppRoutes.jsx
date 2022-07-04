import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import LoginPage from "../pages/Auth/auth";
import HomeView from "../pages/Home/home";
import AlterarSenha from "../pages/AlterarSenha/auterarsenha";
import { AuthProvicer, AuthContext } from "../services/auth";
import React, { useContext } from "react";
// TELEVENDAS
import DesemprenhoTelevendas from "../pages/Home/Relatorios/TELEVENDAS/DesemprenhoTelevendas";
// DIRETORIA
import DashVendas from "../pages/Home/Relatorios/DIRETORIA/DashboardVendas";
// ADMINISTRATIVO
import Exagerado2021 from "../pages/Home/Relatorios/ADM/Exagerado2021";
import Exageradocaxu2021 from "../pages/Home/Relatorios/ADM/Exageradocaxu2021"
import Exagerado2022 from "../pages/Home/Relatorios/ADM/Exagerado2022";
// TI
import ChamadosTI from "../pages/Home/Relatorios/TI/ChamadosTI";
//ESTOQUE
import LevantamentoEstoque from "../pages/Home/Relatorios/ESTOQUE/LevEstoque";
//LOJAS
import VendasPeriodoCaxu from "../pages/Home/Relatorios/LOJAS/vendasperiodocaxu";
import MetasLais from "../pages/Home/Relatorios/RH/MetasLais";
import DesempenhoLoja from "../pages/Home/Relatorios/LOJAS/desempenholojas"


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
                    <Route exact path="/alterarsenha" element={<Private><AlterarSenha/></Private>} />
                    {/* TELEVENDAS */}
                    <Route exact path="/desempenhotelevendas" element={<Private><DesemprenhoTelevendas/></Private>} />
                    {/* DIRETORIA */}
                    <Route exact path="/dashvendasdir" element={<Private><DashVendas/></Private>} />
                    {/* RECURSOS HUMANOS */}
                    <Route exact path="/metasrh" element={<Private><MetasLais/></Private>} />
                    {/* ADMINISTRATIVO */}
                    <Route exact path="/exagerado2021" element={<Private><Exagerado2021/></Private>} />
                    <Route exact path="/exageradocaxu2021" element={<Private><Exageradocaxu2021/></Private>} />
                    <Route exact path="/exagerado2022" element={<Private><Exagerado2022/></Private>} />
                    {/* T.I. */}
                    <Route exact path="/chamadosti" element={<Private><ChamadosTI/></Private>} />
                    {/* ESTOQUE */}
                    <Route exact path="/levantamentoestoque" element={<Private><LevantamentoEstoque/></Private>} />
                    {/* LOJAS */}
                    <Route exact path="/vendasperiodocaxu" element={<Private><VendasPeriodoCaxu/></Private>} />
                    <Route exact path="/desempenholoja" element={<Private><DesempenhoLoja/></Private>} />

                    
                </Routes>
            </AuthProvicer>
        </BrowserRouter>
    );
};

export default AppRoutes;