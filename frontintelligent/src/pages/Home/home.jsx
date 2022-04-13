import React, {useState, useEffect, useContext} from 'react'
import './home.css'
import IMGIcon from '../../assets/dinizintelligence.png'
import { AuthContext } from '../../services/auth'
import ResponsiveAppBar from '../../components/navbar/navbar'

const HomeView = () => {
    const { user } = useContext(AuthContext)

    return (
        <>
        <ResponsiveAppBar/>
        <div className='container-index'>
            <div className='content'>
                <div className='superios-content'>
                <img src={IMGIcon} />
                <h3>Bem Vindo(a) {user} ao Diniz Intelligence</h3>
                <p>Esperamos que sua experiência em nosso portal</p>
                <p>seja algo inexplicavelmente fantástico...</p>
                
                </div>
                <div className='inferior-content'>
                    <p>Desenvolvido por <b>M&M Consutoria em B.I.</b></p>
                </div>
            </div>
        </div>
        </>
    )
}

export default HomeView;