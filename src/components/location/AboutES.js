import React, {useEffect} from 'react';
import { useLocation } from "react-router";
import BannerEs from '../hero/BannerES';
import InfoIcon from '@mui/icons-material/Info';
import LillySelf from '../../resources/images/lilly.JPG';
import LillyGroup from '../../resources/images/lillygroup.JPG';
import LillyFamily from '../../resources/images/lillyFamily.jpg';
import {LocationContainer, LocationHeader, AboutContianer, AboutTopLeft, AboutTopRight, AboutBadge, AboutDesc, AboutTitle,
    AboutSubContainer, AboutSubTitle, AboutSubDesc, AboutSubImage
} from '../../styles/location.styles.js';

const AboutEs = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Acerca - Lilly Tax Corp.'
    }, [pathname]);

    return (
        <LocationContainer>
            <LocationHeader>
                <InfoIcon sx={{ fontSize: 80 }}/>
                <span>Acerca</span>
            </LocationHeader>

            <AboutContianer>
                <AboutTopLeft>
                    <AboutBadge>Acerca de Lilly</AboutBadge>
                    <hr/>
                    <AboutTitle>Nuestro Compromiso.</AboutTitle>
                    <AboutDesc>
                        Somos su socio en sus finanzas, nos tomamos el tiempo para comprender y satisfacer sus necesidades únicas
                        y sacarlos primero en todo lo que hacemos. ¡Siempre estamos aquí para ayudarte! analizando todo lo posible
                        alternativas para su fiel satisfacción y lealtad.
                    </AboutDesc>
                </AboutTopLeft>
                <AboutTopRight>
                    <img src={LillySelf} alt='Lilly'/>
                </AboutTopRight>
            </AboutContianer>


            <AboutContianer style={{flexDirection: 'row'}}>
                <AboutTopLeft>
                    <AboutBadge>Servicio</AboutBadge>
                    <hr/>
                    <AboutTitle>Transparencia.</AboutTitle>
                    <AboutDesc>
                        Somos líderes tributarios experimentados, incansables en nuestros esfuerzos por lograr mejores resultados cuando
                        preparación de sus impuestos. Nos enorgullecemos de tener una base de clientes muy diversa, con clientes provenientes de todos los rincones del mundo que buscan nuestra ayuda con sus necesidades individuales y comerciales.
                    </AboutDesc>
                </AboutTopLeft>
                <AboutTopRight style={{justifyContent: 'flex-end'}}>
                    <img src={LillyGroup} alt='Lilly Group'/>
                </AboutTopRight>
            </AboutContianer>

            <AboutSubContainer>
                <AboutSubTitle><span>Referirnos</span> A Tu Familia Y Amigos</AboutSubTitle>
                <hr/>
                <AboutSubImage>
                    <img src={LillyFamily} alt='Garcia Family'/>
                </AboutSubImage>
                <hr/>
                <AboutSubDesc>
                    Reciba un incentivo en efectivo cuando recomiende a familiares y amigos.
                </AboutSubDesc>
            </AboutSubContainer>

            <BannerEs/>
        </LocationContainer>
    );
};

export default AboutEs;