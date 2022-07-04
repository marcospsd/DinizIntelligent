import React, { useContext } from 'react';
import ResponsiveAppBar from '../../../../components/navbar/navbar'
import { AuthContext } from '../../../../services/auth';


const DesempenhoLoja = () => {
    const { user } = useContext(AuthContext)

    if (!user) {
        return <p>Carregando ....</p>
    }
    
    const loja = () => {
        switch (user.filial) {
            case "0101":
                return "https://app.powerbi.com/view?r=eyJrIjoiNTQ4N2EwNDEtMjhiZC00MTEwLTkwZGUtNTE0MjcxNmRjNDMwIiwidCI6IjY1OGMyZTAyLTQ5NTQtNGNhNy1iNWU5LTRlNTBlYzk3OWFlYSJ9"
            case "0201":
                return "https://app.powerbi.com/view?r=eyJrIjoiMDU1NDBiNmMtZjJjMi00Mjc5LWI0ZDUtZmU5N2QzMTFjMTU0IiwidCI6IjY1OGMyZTAyLTQ5NTQtNGNhNy1iNWU5LTRlNTBlYzk3OWFlYSJ9"
            case "0302":
                return "https://app.powerbi.com/view?r=eyJrIjoiOTc3NjVhMmUtNDAyZC00N2ExLWExNjItNmQ0YmI0M2Q2ZGVjIiwidCI6IjY1OGMyZTAyLTQ5NTQtNGNhNy1iNWU5LTRlNTBlYzk3OWFlYSJ9"
            case "0401":
                return "https://app.powerbi.com/view?r=eyJrIjoiZjY5YWRiMTMtOTgxYi00MDljLThlNjItM2NhMzhlZGU4Y2UxIiwidCI6IjY1OGMyZTAyLTQ5NTQtNGNhNy1iNWU5LTRlNTBlYzk3OWFlYSJ9"
            case "0501":
                return "https://app.powerbi.com/view?r=eyJrIjoiNjI2NTJlYWUtOWRkZi00Y2YxLTk4ZjQtMTVjOTgwNmZiMThlIiwidCI6IjY1OGMyZTAyLTQ5NTQtNGNhNy1iNWU5LTRlNTBlYzk3OWFlYSJ9"
            case "0601":
                return "https://app.powerbi.com/view?r=eyJrIjoiMjM3MWQxNDctODFiOS00ODkzLWFhYTgtOWJjZmY4YTEzOGZhIiwidCI6IjY1OGMyZTAyLTQ5NTQtNGNhNy1iNWU5LTRlNTBlYzk3OWFlYSJ9"
            case "0701":
                return "https://app.powerbi.com/view?r=eyJrIjoiOTlhNGZiNTktZWYzMS00MGU0LTlmM2YtOWQ1NzgxY2EwYzlhIiwidCI6IjY1OGMyZTAyLTQ5NTQtNGNhNy1iNWU5LTRlNTBlYzk3OWFlYSJ9"
            case "0802":
                return "https://app.powerbi.com/view?r=eyJrIjoiMjFiZTk3NmYtYmVhZi00ZTQyLWJkYWYtNWE1ZmIwMTdkYWQ5IiwidCI6IjY1OGMyZTAyLTQ5NTQtNGNhNy1iNWU5LTRlNTBlYzk3OWFlYSJ9"
            case "1101":
                return "https://app.powerbi.com/view?r=eyJrIjoiMGMzMWEyYTgtZjkzOS00OGQ0LTgxZmUtYzY5NWY5ODc1MzI3IiwidCI6IjY1OGMyZTAyLTQ5NTQtNGNhNy1iNWU5LTRlNTBlYzk3OWFlYSJ9"
            case "2001":
                return "https://app.powerbi.com/view?r=eyJrIjoiNTgyOTY5NTAtNDZhNi00MzAzLWFhM2UtZTRjNzBkYWQzNjEzIiwidCI6IjY1OGMyZTAyLTQ5NTQtNGNhNy1iNWU5LTRlNTBlYzk3OWFlYSJ9"
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

export default DesempenhoLoja;