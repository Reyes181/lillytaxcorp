import React, {useEffect} from 'react';
import { useLocation } from "react-router";
import ITINImage from '../../resources/images/itin.png';
import Ribbon from '../../resources/images/Ribbon.png';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import FAQEs from './FAQES';
import {ITINContainer, ITINHeader, ITINlogoContainer, ITINimg, ITINMainContainer, ITINLeft, ITINRight, ITINHelp, 
    ITINRibbon, ITINBottom, ITINBottomHeader, ITINBottomBody, ITINHelpButton} from '../../styles/itin.styles';

const ITINSectionEs = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Servicio de ITIN - Lilly Tax Corp.'
    }, [pathname]);
    return (
        <ITINContainer>
            <ITINHeader>
                <AssuredWorkloadIcon sx={{ fontSize: 80 }}/>
                <span>Solicitud de ITIN (TAX ID)</span>
            </ITINHeader>
            <ITINlogoContainer>
                <ITINimg src={ITINImage} alt='ITIN'/>
            </ITINlogoContainer>
            <ITINMainContainer>
                <ITINLeft>
                    <div>
                        Si no es elegible para un Número de Seguro Social, puede solicitar un Número de Identificación Personal del Contribuyente (ITIN) y presentar su declaración de impuestos con él.
                        Además, cuando prepare su declaración de impuestos con nosotros, también puede completar una solicitud de ITIN para su cónyuge y/o dependientes.
                    </div>
                    <div>
                        <h2>Aplique para un ITIN</h2>
                        <div>
                            Puede solicitar un ITIN y nosotros, como Agente de aceptación certificado (CAA), verificaremos sus documentos de respaldo y emitiremos un Certificado de precisión (CoA).
                            El beneficio es que no necesita enviar documentos originales al IRS. Enviaremos copias de sus documentos junto con su solicitud de ITIN al IRS por usted. 
                        </div>
                    </div>
                    <div>
                        <h2>¿Cuáles son los documentos requeridos para un ITIN?</h2>
                        <div>
                            Su pasaporte o DOS (2) de los siguientes documentos: (incluyendo al menos una identificación acreditativa con foto y una acreditación de la condición de extranjero de su país):
                        </div>
                        <ul>
                            <li>Documento de identificación nacional (debe estar actualizado e incluir su nombre, foto, dirección, fecha de nacimiento y fecha de vencimiento)</li>
                            <li>Licencia de conducir de EE. UU</li>
                            <li>Licencia de conducir extranjera</li>
                            <li>Certificado de nacimiento (requerido para un dependiente a menos que se presente un pasaporte y el pasaporte tenga una fecha de entrada a los EE. UU.)</li>
                            <li>Identificación del estado de EE. UU.</li>
                            <li>Tarjeta de registro de votante extranjero</li>
                            <li>Visa emitida por el Departamento de Estado de EE. UU.</li>
                            <li>Tarjeta de identificación militar de EE. UU.</li>
                            <li>Tarjeta de identificación militar extranjera</li>
                            <li>Identificación con foto del Servicio de Ciudadanía e Inmigración de EE. UU.</li>
                            <li>Registros Médicos  (solo para dependientes menores de 6 años)</li>
                            <li>Registros escolares (solo para dependientes que sean estudiantes menores de 18 años)</li>
                        </ul>
                    </div>

                    <ITINBottom>
                        <ITINBottomHeader>
                         <HelpOutlineIcon sx={{ fontSize: 30 }}/>
                            ¿Cómo funciona?
                        </ITINBottomHeader>
                        <ITINBottomBody>
                            <div>
                                Como Agente Certificador de Aceptación autorizado por el IRS, revisaremos su prueba de identidad y documentos de condición de extranjero para que no tenga que enviar los originales, sino que adjuntaremos copias certificadas.
                            </div>
                            <div>
                                Después de revisar sus documentos, para los solicitantes por primera vez, comenzaremos con su declaración de impuestos federales y presentaremos el Formulario W-7, Solicitud del Número de Identificación Personal del Contribuyente (ITIN) del IRS.
                                Adjuntaremos un Certificado de Precisión (COA) con sus copias certificadas para probar su identidad y condición de extranjero.
                            </div>
                            <div>
                                Si está renovando su ITIN, no tendrá que presentar una declaración de impuestos federales, pero igual necesitaremos verificar sus documentos para adjuntar un COA con sus copias certificadas y el Formulario W-7.
                            </div>
                            <div>
                                Una vez que tengamos listo su paquete de solicitud, deberá firmar un par de formularios y prepararemos toda la información necesaria para que envíe su solicitud al IRS.
                            </div>
                        </ITINBottomBody>
                    </ITINBottom>
                </ITINLeft>
                <ITINRight>
                    <ITINRibbon>
                        <img src={Ribbon} alt='IRS certified agent'/>
                    </ITINRibbon>

                    <ITINHelp>
                        <QuestionMarkIcon sx={{ fontSize: 55 }}/>
                        <div>
                            ¿Tiene alguna pregunta sobre impuestos o ITIN?
                        </div>
                        <ITINHelpButton to={'/es/localizacion'}>
                            Contacta con nosotros
                        </ITINHelpButton>
                    </ITINHelp>
                </ITINRight>
            </ITINMainContainer>
            <FAQEs/>
        </ITINContainer>
    )
}

export default ITINSectionEs;