import React from 'react'
import ResponsiveAppBar from '../../../../components/navbar/navbar'

const DashVendas = () => {


    return (
        <>
        <ResponsiveAppBar/>
        <div className='container'>
        <iframe title="Dashboard de vendas" id='relatorios' src="https://app.powerbi.com/view?r=eyJrIjoiZjY3NTAxMjAtMTBmOC00NzEzLWFhMzYtZGE5YTQzN2UzMTQxIiwidCI6IjY1OGMyZTAyLTQ5NTQtNGNhNy1iNWU5LTRlNTBlYzk3OWFlYSJ9&pageName=ReportSection1e46e08c4460cad8c089" frameborder="0" allowFullScreen="true"></iframe>
        </div>
        </>
    )
}

export default DashVendas;