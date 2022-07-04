import React from 'react';
import { useContext } from 'react';
import ResponsiveAppBar from '../../../../components/navbar/navbar'
import { AuthContext } from '../../../../services/auth';


const VendasPeriodoCaxu = () => {
    const { user } = useContext(AuthContext)

    const loja = () => {
        switch (user.setor) {
            case "2001":
                return "https://app.powerbi.com/view?r=eyJrIjoiNTZjYTMwMjEtZmQ2ZC00YjU3LWEyMTEtOGFjOGRmMDk2NDFhIiwidCI6IjY1OGMyZTAyLTQ5NTQtNGNhNy1iNWU5LTRlNTBlYzk3OWFlYSJ9&pageName=ReportSectionb94c3f676cb056712910"
            default:
                return;
            }
    }

    return (
    <>
        <ResponsiveAppBar/>
        <div className='container'>
        <iframe title="xavier" id='relatorios' src={loja()} frameborder="0" allowFullScreen="true"></iframe>
        </div>
    
    </>

    
    )
}

export default VendasPeriodoCaxu;