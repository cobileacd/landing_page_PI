import * as React from 'react';
import {Box,Button,Toolbar, AppBar, Typography, IconButton, useTheme } from '@mui/material';
import Logo from '../../assets/logo.svg';
import { useContext } from "react";
import { ColorModeContext,  tokens } from "../../theme";
import  LightModeOutlinedIcon  from "@mui/icons-material/LightModeOutlined";
import  DarkModeOutlinedIcon  from "@mui/icons-material/DarkModeOutlined";


const Navbar = () => {

    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    const colors = tokens(theme.palette.mode);


    const handleButtonClick = (url) => {
        window.location.href = url;
    };



    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color={theme.palette.mode === 'dark' ? 'default' : 'primary'} style={{ backgroundColor: theme.palette.mode === 'dark' ? '#005067' : null }}>
                <Toolbar>
                    <img src={Logo} alt="Logo" style={{ maxWidth: '50px', height: 'auto', marginRight: '10px' }} />
                    <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                        JAQKDRA
                    </Typography>

                    <Button
                        color="inherit"
                        onClick={() => handleButtonClick('https://www.ua.pt/')}
                    >
                        UA
                    </Button>

                    <Button
                        color="inherit"
                        onClick={() => handleButtonClick('https://ptqci.av.it.pt/')}
                    >
                        PTQCI
                    </Button>

                    <Button
                        color="inherit"
                        onClick={() => handleButtonClick('https://example.com')}
                    >
                        Docs
                    </Button>


                    <IconButton onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode === 'dark' ?(
                            <LightModeOutlinedIcon />
                        ) : (
                                <DarkModeOutlinedIcon sx={{color:'white'}}/>                            )}
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
