import React, {useEffect} from 'react';
import { useLocation } from "react-router";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import {LocationContainer, LocationTop, LocationTopLeft, LocationTopRight, LocationHeader, LocationContent, 
    LocationAddress, LocationHours, LocationContact, ContactTitle, ContactWays, ContactDesc, ContactWaysContent} from '../../styles/location.styles.js';

const LocationEs = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Ubicación y Horario - Lilly Tax Corp.'
    }, [pathname]);
    return (
        <LocationContainer>
            <LocationHeader>
                <CalendarMonthIcon sx={{ fontSize: 80 }}/>
                <span>Ubicación y Horario</span>
            </LocationHeader>
            <LocationContent>
                <LocationTop>
                    <LocationTopLeft>
                        
                        <LocationAddress>
                            <div>
                                Dirección
                            </div>
                            <div>
                                <span>213 E 181ST Street</span>
                                <span>Bronx, NY 10453</span>
                            </div>
                        </LocationAddress>
                        <LocationHours>
                            <div>
                                Horario Normal de Trabajo
                            </div>
                            <ul>
                                <li>
                                    <span>Domingo</span>
                                    <span>Cerrado</span>
                                </li>

                                <li>
                                    <span>Lunes</span>
                                    <span>12:00PM to 5:00PM</span>
                                </li>

                                <li>
                                    <span>Martes</span>
                                    <span>Cerrado</span>
                                </li>

                                <li>
                                    <span>Miércoles</span>
                                    <span>12:00PM to 5:00PM</span>
                                </li>

                                <li>
                                    <span>Jueves</span>
                                    <span>Cerrado</span>
                                </li>

                                <li>
                                    <span>Viernes</span>
                                    <span>12:00PM to 5:00PM</span>
                                </li>

                                <li>
                                    <span>Sábado</span>
                                    <span>Cerrado</span>
                                </li>
                            </ul>
                        </LocationHours>
                        <LocationHours>
                            <div>
                                Horario Comercial de La Temporada de Impuestos
                            </div>
                            <ul>
                                <li>
                                    <span>Domingo</span>
                                    <span>12:00PM to 5:00PM</span>
                                </li>

                                <li>
                                    <span>Lunes</span>
                                    <span>9:00AM to 8:00PM</span>
                                </li>

                                <li>
                                    <span>Martes</span>
                                    <span>9:00AM to 8:00PM</span>
                                </li>

                                <li>
                                    <span>Miércoles</span>
                                    <span>9:00AM to 8:00PM</span>
                                </li>

                                <li>
                                    <span>Jueves</span>
                                    <span>9:00AM to 8:00PM</span>
                                </li>

                                <li>
                                    <span>Viernes</span>
                                    <span>9:00AM to 8:00PM</span>
                                </li>

                                <li>
                                    <span>Sábado</span>
                                    <span>12:00PM to 5:00PM</span>
                                </li>
                            </ul>
                        </LocationHours>
                    </LocationTopLeft>
                    <LocationTopRight>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d754.4507560174618!2d-73.90142096600471!3d40.854248269454814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f597339e8dc3%3A0x188b32c9c400655f!2sLILLY%20TAX%20Service%20-%20Income%20Tax%20In%20The%20Bronx%2C%20New%20York%2C%20Hablamos%20Espa%C3%B1ol%20Call%20(718)%20365-1595!5e0!3m2!1sen!2sus!4v1649108124050!5m2!1sen!2sus" 
                            width="100%" 
                            height="100%" 
                            style={{border: '0'}}
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"></iframe>

                        <LocationContact>
                            <ContactTitle>Contacto</ContactTitle>
                            <ContactWays>
                                <ContactWaysContent>
                                    <div>
                                        <LocalPhoneIcon/>
                                        <span>Teléfono</span>    
                                    </div> 
                                    <div>(718)-365-1595</div>
                                </ContactWaysContent>
                                <ContactWaysContent>
                                    <div>
                                        <WhatsAppIcon/>
                                        <span>WhatsApp</span>    
                                    </div> 
                                    <div>(929)-412-9401</div>
                                </ContactWaysContent>
                                <ContactWaysContent>
                                    <div>
                                        <MailOutlineIcon/>
                                        <span>Email</span>    
                                    </div> 
                                    <div>info@lillytaxny.com</div>
                                </ContactWaysContent>
                            </ContactWays>
                            <ContactDesc>
                                El horario de atención está sujeto a cambios previa solicitud realizada con cita previa.
                            </ContactDesc>
                        </LocationContact>
                        
                    </LocationTopRight>
                </LocationTop>

            </LocationContent>
        </LocationContainer>
    )
}

export default LocationEs;