import React, {useContext, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import './navbar.css'
import { useNavigate } from "react-router-dom";
import IMGIcon from '../../assets/dinizintelligencebranca.png'
import { AuthContext } from '../../services/auth';

const diretoria = [
  { nome: 'Dashboard de Vendas', rota: '/dashvendasdir'},
]

const estoque = [
  { nome: 'Levantamento Estoque', rota: '/levantamentoestoque'},
]

const rh = [
  { nome: 'Metas Lojas', rota: '/metasrh'},
]

const lojas = [
  { nome: 'Vendas por Periodo - CAXU', rota: '/vendasperiodocaxu'},
  { nome: 'Desempenho Loja', rota: '/desempenholoja'},
]

const financeiro = [

]

const televendas = [
  {nome: 'Desempenho Televendas', rota: '/desempenhotelevendas'},

]
const administrativo = [
  { nome: 'Exagerado 2021', rota: '/exagerado2021'},
  { nome: 'Exagerado Caxu 2021', rota: '/exageradocaxu2021'},
  { nome: 'Exagerado 2022', rota: '/exagerado2022'},
  
]

const ti = [
  { nome: 'Chamados T.I.', rota: '/chamadosti'},
]

const pages = [
  { page: 'DIRETORIA', setor: '1', dados :[ ...diretoria ] },
  { page: 'ESTOQUE', setor: '6', dados:[ ...estoque ]},
  { page: 'R.H.', setor: '2', dados: [...rh ]},
  { page: 'LOJAS', setor: '8', dados: [...lojas ]},
  { page: 'FINANCEIRO', setor: '4', dados: [...financeiro ]},
  { page: 'TELEVENDAS', setor: '3', dados: [...televendas ]},
  { page: 'ADMINISTRATIVO', setor: '1', dados: [...administrativo]},
  { page: 'T.I.', setor: '1', dados: [ ...ti ]},
]



const ResponsiveAppBar = () => {
  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()
  const [diretoria, setDiretoria] = useState(null)
  const [estoque, setEstoque ] = useState(null)
  const [rh, setRh] = useState(null)
  const [lojas, setLojas] = useState(null)
  const [financeiro, setFinanceiro] = useState(null)
  const [televendas, setTelevendas] = useState(null)
  const [administrativo, setAdministrativo] = useState(null)
  const [ti, setTi] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [ menuresponsive, setMenuresponsive] = useState(null);
  const [ options, setOptions ] = useState(null)
  const acesso = user.setor


  const NewPages = () => {
    switch (acesso.toString()) {
      case '1':
        return pages
      case '2':
        return pages.filter((page) => page.setor === acesso)
      case '3':
        return pages.filter((page) => page.setor === acesso)
      case '4':
        return pages.filter((page) => page.setor === acesso)
      case '6':
        return pages.filter((page) => page.setor === acesso)
      case '7':
        return pages.filter((page) => page.setor === acesso)
      case '8':
        return pages.filter((page) => page.setor === acesso)
      case '9':
        return pages.filter((page) => page.setor === acesso)
    }
  }
  
  const newdado = NewPages()

  const handleOpenUserMenu = (event, page) => {
    setAnchorElUser(event.currentTarget);
    switch (page) {
      case 'DIRETORIA':
        return setDiretoria(true)
      case 'ESTOQUE':
        return setEstoque(true)
      case 'R.H.':
        return setRh(true)
      case 'LOJAS':
        return setLojas(true)
      case 'FINANCEIRO':
        return setFinanceiro(true)
      case 'TELEVENDAS':
        return setTelevendas(true)
      case 'ADMINISTRATIVO':
        return setAdministrativo(true)
      case 'T.I.':
        return setTi(true)
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    setDiretoria(null)
    setEstoque(null)
    setRh(null)
    setLojas(null)
    setFinanceiro(null)
    setTelevendas(null)
    setAdministrativo(null)
    setTi(null)
  };

  const abrir = (dado) =>{
    switch (dado) {
      case 'DIRETORIA':
        return diretoria
      case 'ESTOQUE':
        return estoque
      case 'R.H.':
        return rh
      case 'LOJAS':
        return lojas
      case 'FINANCEIRO':
        return financeiro
      case 'TELEVENDAS':
        return televendas
      case 'ADMINISTRATIVO':
        return administrativo
      case 'T.I.':
        return ti
    }
  }

  return (
    <AppBar position="static" id='appbar'>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  id="menulist"
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                  onClick={() => setMenuresponsive(true)}
                >
                  <MenuIcon />
                </IconButton>
                        <Menu
                        sx={{ mt: '45px' }}
                        id="menu-resposive"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                        open={menuresponsive}
                        onClose={() => setMenuresponsive(null)}
                        >
                          <MenuItem onClick={() => navigate('/')}> HOME </MenuItem>
                          { newdado.map((page) => (
                            <MenuItem key={page.page} onClick={ (event) => handleOpenUserMenu(event, page.page)}>{page.page}</MenuItem>
                          ))}
                      </Menu>
                      { newdado.map((page) => (
                          <Menu
                          key={page.page}
                          sx={{ mt: '45px' }}
                          id={page.page}
                          anchorEl={anchorElUser}
                          anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          keepMounted
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          open={abrir(page.page)}
                          onClose={() => handleCloseUserMenu(page.page)}
                          >
                              
                            {page.dados.map((dados) => (
                              <MenuItem key={dados.nome} onClick={() => { 
                                navigate(dados.rota)
                                handleCloseUserMenu()
                              } }>{dados.nome}</MenuItem>
                            ))}
                        </Menu>
                    ))}
          

              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button
                      onClick={() => navigate('/')}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                     HOME
                    </Button>
                  { newdado.map((page) => (
                    <Button
                      key={page.page}
                      arial-label={page.page}
                      arial-controls={page.page}
                      onClick={(event) => handleOpenUserMenu(event, page.page)}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      {page.page}
                    </Button>
                    ))}

                    { newdado.map((page) => (
                          <Menu
                          key={page.page}
                          sx={{ mt: '45px' }}
                          id={page.page}
                          anchorEl={anchorElUser}
                          anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          keepMounted
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          open={abrir(page.page)}
                          onClose={() => handleCloseUserMenu(page.page)}
                          >
                            {page.dados.map((dados) => (
                              <MenuItem key={dados.nome} onClick={() => { 
                                navigate(dados.rota)
                                handleCloseUserMenu()
                              } }>{dados.nome}</MenuItem>
                            ))}
                        </Menu>
                    ))}
                     
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Logout">
                      <IconButton onClick={(event) => {
                        setAnchorElUser(event.currentTarget)
                        setOptions(true)
                      
                      }} sx={{ p: 0 }}>
                        <img width='150' height='100%' alt="Remy Sharp" src={IMGIcon} />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ flexGrow: 1, mt: '45px' }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={options}
                      onClose={() => {
                        setOptions(null)
                        setAnchorElUser(null)
                      }}
                    >
                        <MenuItem onClick={() => {navigate("/alterarsenha")}}>
                          <Typography textAlign="center">Alterar Senha</Typography>
                        </MenuItem>
                        <MenuItem onClick={() => {logout()}}>
                          <Typography textAlign="center">Sair</Typography>
                        </MenuItem>
                    </Menu>
                </Box>
          </Toolbar>
        </Container>
      </AppBar>
  );
};
export default ResponsiveAppBar;