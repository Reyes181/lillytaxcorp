import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import { NavLink } from 'react-router-dom';
import EnglishFlag from '../../resources/images/english.png';
import SpanishFlag from '../../resources/images/spanish.png';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import {HeaderLogoBox, HeaderLogo, HeaderContainer, HeaderContent, HeaderLanguage, HeaderNav, MobileBurger} from '../../styles/header.styles'


const Header = ({drawerToggleHandler}) => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar
                position='fixed'
                style={{
                    backgroundColor: '#fff',
                    padding: '5px 0',
                    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 8px 10px, rgba(0, 0, 0, 0.09) 0px 3px 3px'
                }}
            >
                <HeaderContainer>
                    <Toolbar>
                        <HeaderContent>
                            <HeaderLogoBox>
                                <NavLink to={{pathname: '/'}}>
                                    <HeaderLogo>LILLY TAX</HeaderLogo>
                                </NavLink>
                            </HeaderLogoBox>

                            <HeaderNav>
                                {/* <NavLink to={{pathname: '/'}} activeStyle={{fontWeight: "bold", color: "red"}}>
                                    Home
                                </NavLink> */}
                                <NavLink to={{pathname: '/taxfiling'}} activeStyle={{fontWeight: "bold", color: "#ffcb05"}}>
                                    Tax Filing
                                </NavLink>
                                <NavLink to={{pathname: '/itin'}} activeStyle={{fontWeight: "bold", color: "#ffcb05"}}>
                                    ITIN
                                </NavLink>
                                <NavLink to={{pathname: '/immigration'}} activeStyle={{fontWeight: "bold", color: "#ffcb05"}}>
                                    Immigration
                                </NavLink>
                                <NavLink to={{pathname: '/location'}} activeStyle={{fontWeight: "bold", color: "#ffcb05"}}>
                                    Location
                                </NavLink>
                            </HeaderNav>

                            <HeaderLanguage>
                                <a href='/'>
                                    <img src={EnglishFlag} alt='English'/>
                                </a>
                                <a href='/'>
                                    <img src={SpanishFlag} alt='Spanish'/>
                                </a>
                            </HeaderLanguage>
                            <MobileBurger>
                                <MenuIcon sx={{ fontSize: 20 }} onClick={drawerToggleHandler}/>
                            </MobileBurger>
                        </HeaderContent>

                    </Toolbar>
                </HeaderContainer>
                
            </AppBar>
        </Box>
    )
}

export default Header;