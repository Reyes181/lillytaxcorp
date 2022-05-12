import React from 'react';
import { Link } from 'react-router-dom';
import { FooterContainer, FooterCopyRight, FooterContent, FooterLogo, FooterBottom } from '../../styles/footer.styles';

const FooterEs = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterLogo>LILLY TAX</FooterLogo>
                <div>
                    <span>Servicios de Impuestos</span>
                    <ul>
                        <li><Link to='/taxfiling/documentchecklist'>Lista de Documentos</Link></li>
                        <li><Link to='/taxfiling/in-person-preparation'>Declaración En Persona</Link></li>
                        <li><Link to='/taxfiling/dropoff-preparation'>Declaración "Drop-Off"</Link></li>
                        <li><Link to='/taxfiling/virtual-preparation'>Declaración Virtual</Link></li>
                    </ul>
                </div>
                <div>
                    <span>Soluciones de ITIN</span>
                    <ul>
                        <li><Link to='/itin'>Documentos Requeridos</Link></li>
                        <li><Link to='/itin'>Proceso</Link></li>
                        <li><Link to='/itin'>¿Quién necesita un ITIN?</Link></li>
                    </ul>
                </div>
                <div>
                    <span>Acerca de</span>
                    <ul>
                        <li><Link to='/location'>Contacta Con Cosotros</Link></li>
                        <li><Link to='/location'>Localización</Link></li>
                        <li><Link to='/location/about'>Acerca de Lilly Tax</Link></li>
                    </ul>
                </div>
            </FooterContent>
            
            <FooterCopyRight>
                <div>
                    Copyright © 2021 Lilly Tax Corp. Todos Los Derechos Reservados.
                </div>
            </FooterCopyRight>

            <FooterBottom>
                <div>Establecido 2011</div>
            </FooterBottom>
        </FooterContainer>
    )
};

// Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a>

export default FooterEs;