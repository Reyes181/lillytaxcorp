import React from 'react';
import { connect } from 'react-redux';
import { getLanguageChangeStart } from '../../redux/language.action';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import { NavLink } from 'react-router-dom';
import EnglishFlag from '../../resources/images/english.png';
import SpanishFlag from '../../resources/images/spanish.png';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import {HeaderBar, HeaderLogoBox, HeaderLogo, HeaderContainer, HeaderContent, HeaderLanguage, HeaderNav, MobileBurger} from '../../styles/header.styles'


const Header = ({drawerToggleHandler, getLanguageChangeStart}) => {
    return (
        <Box sx={{flexGrow: 1}}>
            <HeaderBar>
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
                                <NavLink to={{pathname: '/taxfiling'}} activeStyle={{fontWeight: "bold", color: "#ffcb05"}}>
                                    Tax Filing
                                </NavLink>
                                <NavLink to={{pathname: '/itin'}} activeStyle={{fontWeight: "bold", color: "#ffcb05"}}>
                                    ITIN
                                </NavLink>
                                <NavLink to={{pathname: '/location'}} activeStyle={{fontWeight: "bold", color: "#ffcb05"}}>
                                    Location
                                </NavLink>
                            </HeaderNav>

                            <HeaderLanguage>
                                <a href='/' onClick={() => getLanguageChangeStart(true)}>
                                    <img src={EnglishFlag} alt='English'/>
                                </a>
                                <a href='/' onClick={() => getLanguageChangeStart(false)} style={{opacity: '0.5'}}>
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
            </HeaderBar>
        </Box>
    )
}

const mapDispatchToProps = dispatch => ({
    getLanguageChangeStart: (lang) => dispatch(getLanguageChangeStart(lang))
});

export default connect(null, mapDispatchToProps)(Header);