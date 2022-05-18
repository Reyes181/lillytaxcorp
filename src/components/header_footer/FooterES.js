import React from 'react';
import { Link } from 'react-router-dom';
import { FooterContainer, FooterCopyRight, FooterContent, FooterLogoEs, FooterBottom } from '../../styles/footer.styles';

const FooterEs = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterLogoEs>LILLY TAX</FooterLogoEs>
                <div>
                    <span>Servicios de Impuestos</span>
                    <ul>
                        <li><Link to='/es/impuestos/lista-de-documentos'>Lista de Documentos</Link></li>
                        <li><Link to='/es/impuestos/declaración-en-persona'>Declaración En Persona</Link></li>
                        <li><Link to='/es/impuestos/declaración-drop-off'>Declaración "Drop-Off"</Link></li>
                        <li><Link to='/es/impuestos/declaración-virtual'>Declaración Virtual</Link></li>
                    </ul>
                </div>
                <div>
                    <span>Soluciones de ITIN</span>
                    <ul>
                        <li><Link to='/es/itin'>Documentos Requeridos</Link></li>
                        <li><Link to='/es/itin'>Proceso</Link></li>
                        <li><Link to='/es/itin'>¿Quién necesita un ITIN?</Link></li>
                    </ul>
                </div>
                <div>
                    <span>Acerca de</span>
                    <ul>
                        <li><Link to='/es/localización'>Contacta Con Cosotros</Link></li>
                        <li><Link to='/es/localización'>Localización</Link></li>
                        <li><Link to='/es/localización/acerca'>Acerca de Lilly Tax</Link></li>
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