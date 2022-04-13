import React from 'react';
import ResponsiveAppBar from '../../../../components/navbar/navbar'


const ChamadosTI = () => {

    return (
    <>
        <ResponsiveAppBar/>
        <div className='container'>
        <iframe title="Chamados TI" id="relatorios" src="https://app.powerbi.com/view?r=eyJrIjoiOWJhNmEyMWQtZGFhZS00MWNiLWJjZDgtZjQ1MTI5OWQzOTFkIiwidCI6IjY1OGMyZTAyLTQ5NTQtNGNhNy1iNWU5LTRlNTBlYzk3OWFlYSJ9&pageName=ReportSection" frameborder="0" allowFullScreen="true"></iframe>        </div>
    
    </>

    
    )
}

export default ChamadosTI;