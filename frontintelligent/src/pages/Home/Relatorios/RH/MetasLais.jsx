import React from 'react'
import ResponsiveAppBar from '../../../../components/navbar/navbar'

const MetasLais = () => {


    return (
        <>
        <ResponsiveAppBar/>
        <div className='container'>
        <iframe title="Metas Lais - Dashboard" id='relatorios' src="https://app.powerbi.com/view?r=eyJrIjoiODgxYmI0YzAtNmZjNi00YzAwLTliNjUtNDkwNWU3YTNlZDcyIiwidCI6IjY1OGMyZTAyLTQ5NTQtNGNhNy1iNWU5LTRlNTBlYzk3OWFlYSJ9" frameborder="0" allowFullScreen="true"></iframe>
        </div>
        </>
    )
}

export default MetasLais;