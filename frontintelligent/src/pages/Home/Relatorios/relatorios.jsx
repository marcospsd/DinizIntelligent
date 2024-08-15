import React from 'react'

const Relatorio = (props) => {


    return (
        <div className='container'>
            <iframe title="Dashboard" id='relatorios' src={props.relatorio} frameBorder={0} allowFullScreen={true}/>
        </div>
    )
}

export default Relatorio;