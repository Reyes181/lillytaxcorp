import React from 'react';
import styled from 'styled-components';
// import {NavLink} from 'react-router-dom';
// import Logo from '../../../assets/img/new_logo_2.png';
// import Links from './Links';
import {SideNavUl, LanguageBadge} from '../../styles/sideDrawer.styles'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import EnglishLang from '../../resources/images/english.png';
import SpanishLang from '../../resources/images/spanish.png';

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
const SideDrawer = (props) => {
    
    
    return (
        <SideDrawerNav show={props.show}>
            <SideNavUl>
                <ul>
                    <li>
                        <a href='/'>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href='/taxfiling'>
                            Tax Filing
                        </a>
                    </li>
                    <li>
                        <a href='/itin'>
                            ITIN
                        </a>
                    </li>
                    <li>
                        <a href='/immigration'>
                            Immigration
                        </a>
                    </li>
                    <li>
                        <a href='/location'>
                            Location
                        </a>
                    </li>
                </ul>

                <LanguageBadge>
                    <img src={EnglishLang} alt='English'/>
                    <img src={SpanishLang} alt='Spanish'/>
                </LanguageBadge>
            </SideNavUl>
        </SideDrawerNav>
    )
}

export default SideDrawer;