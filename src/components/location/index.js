import React, {useEffect} from 'react';
import { useLocation } from "react-router";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {LocationContainer, LocationTop, LocationTopLeft, LocationTopRight, LocationHeader, LocationContent, 
    LocationAddress, LocationHours, LocationContact, ContactTitle, ContactWays, ContactDesc} from '../../styles/location.styles.js';


const Location = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <LocationContainer>
            <LocationHeader>
                <CalendarMonthIcon sx={{ fontSize: 80 }}/>
                <span>Location & Hours</span>
            </LocationHeader>
            <LocationContent>
                <LocationTop>
                    <LocationTopLeft>
                        
                        <LocationAddress>
                            <div>
                                Address
                            </div>
                            <div>
                                <span>213 E 181ST Street</span>
                                <span>Bronx, NY 10453</span>
                            </div>
                        </LocationAddress>
                        <LocationHours>
                            <div>
                                Normal Bussiness Hours
                            </div>
                            <ul>
                                <li>
                                    <span>Sunday</span>
                                    <span>Closed</span>
                                </li>

                                <li>
                                    <span>Monday</span>
                                    <span>12:00PM to 5:00PM</span>
                                </li>

                                <li>
                                    <span>Tuesday</span>
                                    <span>Closed</span>
                                </li>

                                <li>
                                    <span>Wednesday</span>
                                    <span>12:00PM to 5:00PM</span>
                                </li>

                                <li>
                                    <span>Thursday</span>
                                    <span>Closed</span>
                                </li>

                                <li>
                                    <span>Friday</span>
                                    <span>12:00PM to 5:00PM</span>
                                </li>

                                <li>
                                    <span>Saturday</span>
                                    <span>Closed</span>
                                </li>
                            </ul>
                        </LocationHours>
                        <LocationHours>
                            <div>
                                Tax Season Bussiness Hours
                            </div>
                            <ul>
                                <li>
                                    <span>Sunday</span>
                                    <span>12:00PM to 5:00PM</span>
                                </li>

                                <li>
                                    <span>Monday</span>
                                    <span>09:00AM to 8:00PM</span>
                                </li>

                                <li>
                                    <span>Tuesday</span>
                                    <span>09:00AM to 8:00PM</span>
                                </li>

                                <li>
                                    <span>Wednesday</span>
                                    <span>09:00AM to 8:00PM</span>
                                </li>

                                <li>
                                    <span>Thursday</span>
                                    <span>09:00AM to 8:00PM</span>
                                </li>

                                <li>
                                    <span>Friday</span>
                                    <span>09:00AM to 8:00PM</span>
                                </li>

                                <li>
                                    <span>Saturday</span>
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
                            <ContactTitle>Contact</ContactTitle>
                            <ContactWays>
                                <div>Phone: <span>(718)-555-5555</span></div>
                                <div>WhatsApp: <span>(929)-444-4444</span></div>
                                <div>Email: <span>info@lillytaxny.com</span></div>
                            </ContactWays>
                            <ContactDesc>
                                 Bussiness hours are subject to change upon reuqest made by appointment during regular bussiness hours or tax season hours.
                            </ContactDesc>
                        </LocationContact>
                        
                    </LocationTopRight>
                </LocationTop>

            </LocationContent>
        </LocationContainer>
    )
}

export default Location;