import React, {useState, useContext} from 'react'
import IMGRed from '../../assets/dinizintelligence.png'
import "./auth.css"
import { AuthContext } from '../../services/auth'

import TextField from '@mui/material/TextField'
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const AuthPage = () => {
    const { login } = useContext(AuthContext);
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const HandleLogin = () => {
        login(username, password);
    }


    return (
        <div className='container-login'>
            <div className='caixa-login'>
                <img src={IMGRed}/>
                <Stack id="box-login" component="form" spacing={2} autoComplete="off">
                        <TextField id="login-usuario" label="Usuário" variant="outlined" fullWidth onChange={(e) => setUsername(e.target.value)} value={username}
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                            }}/>

                        <TextField id="login-senha" label="Password" type='password' variant="outlined" fullWidth onChange={(e) => setPassword(e.target.value)} value={password}
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <VpnKeyIcon />
                                </InputAdornment>
                            ),
                            }}/>
                        <div className="buttons-login">
                        <Button variant="contained" onClick={() => HandleLogin()}>Entrar</Button>
                        </div>
                        <div className="esquecisenha-login">
                        <Button variant="text" id="buttonesqueceusenha">Esqueceu sua senha ?</Button>
                        </div>
                </Stack>
            </div>
        </div>
    )
}

export default AuthPage;