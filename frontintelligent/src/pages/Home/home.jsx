import React, {useState, useContext} from 'react'
import './home.css'
import IMGIcon from '../../assets/dinizintelligence.png'
import { AuthContext } from '../../services/auth'
import Relatorio from './Relatorios/relatorios'
import { useAxios } from '../../services/api'
import MenuView from '../../components/navbar/menu'

const HomeView = () => {
    const [departamento, setDepartamento] = useState(0)
    const [url, setUrl] = useState("")
    const { data } = useAxios('/pages/departamentos/')
    const { user } = useContext(AuthContext)
    if (!user) {
        return <p>Carregando ...</p>
    }
    if (!data) {
        return <p>Carregando ...</p>
    }
    

    return (
        <>
            <MenuView setDepartamento={setDepartamento} data={data} url={setUrl}/>
            { departamento == 0 ?  <div className='container-index'>
                        <div className='content'>
                            <div className='superios-content'>
                            <img src={IMGIcon} />
                            <h3>Bem Vindo(a) {user.first_name} ao Diniz Intelligence</h3>
                            <p>Esperamos que sua experiência em nosso portal</p>
                            <p>seja algo inexplicavelmente fantástico...</p>
                            
                            </div>
                            <div className='inferior-content'>
                                <p>Desenvolvido por <b>M&M Consutoria em B.I.</b></p>
                            </div>
                        </div>
                    </div> : <Relatorio relatorio={url}/>}
        </>
    )
}

export default HomeView;