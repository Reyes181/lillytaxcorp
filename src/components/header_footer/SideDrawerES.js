import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getLanguageChangeStart } from '../../redux/language.action';
import {NavLink} from 'react-router-dom';
import {SideNavUl, LanguageBadge} from '../../styles/sideDrawer.styles'
import EnglishFlag from '../../resources/images/english.png';
import SpanishFlag from '../../resources/images/spanish.png';

const SideDrawerNav = styled.nav`
        height: 100%;
        background: white;
        box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        width: 80%;
        max-width: 400px;
        z-index: 200;
        transform: ${props => props.show ? 'translateX(0)' : 'translateX(-100%)'};
        transition: transform 0.3s ease-out;

        @media screen and (max-width: 1024px) {
            box-shadow: 1px 0px 2px rgba(0, 0, 0, 0.5)
        }
    `;
const SideDrawerEs = ({getLanguageChangeStart, ...props}) => {
    
    
    return (
        <SideDrawerNav show={props.show}>
            <SideNavUl>
                <ul>
                    <li>
                        <NavLink to={{pathname: '/'}}>
                            Página Principal
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={{pathname: '/es/impuestos'}} activeStyle={{fontWeight: "bold", color: "#ffcb05"}}>
                            Impuestos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={{pathname: '/es/itin'}} activeStyle={{fontWeight: "bold", color: "#ffcb05"}}>
                            ITIN
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={{pathname: '/es/localizacion'}} activeStyle={{fontWeight: "bold", color: "#ffcb05"}}>
                            Localización
                        </NavLink>
                    </li>
                </ul>

                <LanguageBadge>
                    <a href='/' onClick={() => getLanguageChangeStart(true)} style={{opacity: '0.5'}}>
                        <img src={EnglishFlag} alt='English'/>
                    </a>
                    <a href='/' onClick={() => getLanguageChangeStart(false)}>
                        <img src={SpanishFlag} alt='Spanish'/>
                    </a>
                </LanguageBadge>
            </SideNavUl>
        </SideDrawerNav>
    )
};

const mapDispatchToProps = dispatch => ({
    getLanguageChangeStart: (lang) => dispatch(getLanguageChangeStart(lang))
});

export default connect(null, mapDispatchToProps)(SideDrawerEs);