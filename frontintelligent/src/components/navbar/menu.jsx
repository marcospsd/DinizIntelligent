import React, {useContext, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import './navbar.css'
import IMGIcon from '../../assets/dinizintelligencebranca.png'
import { AuthContext } from '../../services/auth';
import MenuIcon from '@mui/icons-material/Menu';

const MenuView = ({setDepartamento, data, url}) => {
  const { user, logout } = useContext(AuthContext)
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [open, setOpen] = useState("")
  const [options, setOptions] = useState(false)
  const [menuresponsive, setMenuresponsive] = useState(false)
 

  const handleOpenUserMenu = (event, page) => {
    setAnchorElUser(event.currentTarget);
    setOpen(page.departamento)
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    setOpen("")
  };

  const handleOpenUserMenuBig = (event, page) => {
    setAnchorElUser(event.currentTarget);
    if (page) {
      setOpen(page.departamento)
    }
    setMenuresponsive(!menuresponsive)
  };

  const handleCloseUserMenuBig = () => {
    setAnchorElUser(null);
    setOpen("")
    setMenuresponsive(!menuresponsive)
  };


  const openview = (page) => {
    if (page.departamento === open) {
        return true
    } else {
        return false
    }
  }

  return (
    <AppBar position="static" id='appbar'>
        <Container maxWidth="xl">
          <Toolbar disableGutters>

{/*               Layout Celular                  */}
          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  id="menulist"
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                  onClick={(event) => handleOpenUserMenuBig(event)}
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
                        onClose={handleCloseUserMenuBig}
                        >
                          <MenuItem onClick={() => {
                              setDepartamento(0)
                              setMenuresponsive(!menuresponsive)}
                              }> HOME </MenuItem>
                          { data.map((page) => (
                            <MenuItem key={page.id} onClick={ (event) => handleOpenUserMenuBig(event, page)}>{page.departamento}</MenuItem>
                          ))}
                      </Menu>
                       { data.map((page) => (
                          <Menu
                          key={page.id}
                          sx={{ mt: '45px' }}
                          id={page.id}
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
                          open={openview(page)}
                          onClose={() => handleCloseUserMenuBig()}
                          >
                              
                            {page.relatorios.map((dados) => (
                              <MenuItem key={dados.nome} onClick={() => { 
                                url(dados.link)
                                handleCloseUserMenu()
                              } }>{dados.nome}</MenuItem>
                            ))}
                        </Menu>
                    ))} 
          

              </Box>

{/*                  Layout PC                         */}


              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button
                      onClick={() => setDepartamento(0)}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                     HOME
                    </Button>
                  { data.map((page) => (
                    <Button
                      key={page.id}
                      arial-label={page.id}
                      arial-controls={page.id}
                      onClick={(event) => handleOpenUserMenu(event, page)}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      {page.departamento}
                    </Button>
                    ))}

                    { data.map((page) => (
                          <Menu
                          key={page.id}
                          sx={{ mt: '45px' }}
                          id={page.id}
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
                          open={openview(page)}
                          onClose={() => handleCloseUserMenu()}
                          >
                            {page.relatorios.map((dados) => (
                              <MenuItem key={dados.nome} onClick={() => { 
                                url(dados.link)
                                setDepartamento(1)
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
export default MenuView;