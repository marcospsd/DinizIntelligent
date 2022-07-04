import React, {useState, useEffect, useContext} from 'react'
import IMGIcon from '../../assets/dinizintelligence.png'
import { AuthContext } from '../../services/auth'
import ResponsiveAppBar from '../../components/navbar/navbar'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { api } from '../../services/api'

import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const AlterarSenha = () => {
    const { user } = useContext(AuthContext)
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")
    const [alert, setAlert]= useState("")
    const [bolalert, setBolalert] = useState(null)
    const [coralert, setCorAlert] = useState("error")



    const Enviar = (password1, password2) => {
        const id = localStorage.getItem('id')
        if (password1 == password2 ) {
            api.put(`/auth/alterar/${id}/`, {"password": password1})
            .then((res) => {
                if (res.status == 200) {
                    setPassword1("")
                    setPassword2("")
                    setCorAlert("success")
                    setAlert("Alterado com sucesso !")
                    setBolalert(true)
                    
                } else {
                    setPassword1("")
                    setPassword2("")
                    setCorAlert("error")
                    setAlert("Algo deu errado com sua requisição ...")
                    setBolalert(true)
                }
            })
            .catch((err) => {
                setPassword1("")
                setPassword2("")
                setCorAlert("error")
                setAlert("Algo deu errado com sua requisição ...")
                setBolalert(true)
            })
        } else {
            setPassword1("")
            setPassword2("")
            setCorAlert("error")
            setAlert("As senhas não são iguais, por favor tente novamente")
            setBolalert(true)
        }

    }

    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setBolalert(false);
      };
    return (
        <>
        <ResponsiveAppBar/>
        <div className='container-index'>
            <div className='content'>
                <div className='superios-content'>
                <img src={IMGIcon} />
                <h3>{user}, deseja alterar sua senha do Diniz Intelligence ?</h3>
                <p>Se sim, complete os campos abaixo, e clique em Alterar.</p>
                <TextField id="outlined-basic" type='password' label="Senha" variant="outlined" sx={{ m: 1, width: '100%'}} onChange={(e) => setPassword1(e.target.value)} value={password1}/>
                <TextField id="outlined-basic" type='password' security label="Confirme sua Senha" variant="outlined" sx={{ m: 1, width: '100%'}}  onChange={(e) => setPassword2(e.target.value)} value={password2}/>
                <Button variant="contained" id="buttons" onClick={() => Enviar(password1, password2)}>Alterar</Button>
                </div>
                <Snackbar open={bolalert} autoHideDuration={3000} onClose={handleClose} fullWidth>
                    <Alert onClose={handleClose} severity={coralert} sx={{ width: '100%' }}>
                        {alert}
                    </Alert>
                </Snackbar>
            </div>
        </div>
        </>
    )
}

export default AlterarSenha;   