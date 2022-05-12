import React from 'react';
import { Link } from 'react-router-dom';
import { FooterContainer, FooterCopyRight, FooterContent, FooterLogo, FooterBottom } from '../../styles/footer.styles';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterLogo>LILLY TAX</FooterLogo>
                <div>
                    <span>Tax Services</span>
                    <ul>
                        <li><Link to='/taxfiling/documentchecklist'>Document Checklist</Link></li>
                        <li><Link to='/taxfiling/in-person-preparation'>In-Person Filing</Link></li>
                        <li><Link to='/taxfiling/dropoff-preparation'>Drop-off Filing</Link></li>
                        <li><Link to='/taxfiling/virtual-preparation'>Virtual Filing</Link></li>
                    </ul>
                </div>
                <div>
                    <span>ITIN Solutions</span>
                    <ul>
                        <li><Link to='/itin'>Required Documents</Link></li>
                        <li><Link to='/itin'>Proccess</Link></li>
                        <li><Link to='/itin'>Who needs an ITIN?</Link></li>
                    </ul>
                </div>
                <div>
                    <span>About</span>
                    <ul>
                        <li><Link to='/location'>Contact Us</Link></li>
                        <li><Link to='/location'>Location</Link></li>
                        <li><Link to='/location/about'>About Lilly Tax</Link></li>
                    </ul>
                </div>
            </FooterContent>
            
            <FooterCopyRight>
                <div>
                    Copyright © 2021 Lilly Tax Corp. All Rights Reserved.
                </div>
            </FooterCopyRight>

            <FooterBottom>
                <div>Established 2011</div>
            </FooterBottom>
        </FooterContainer>
    )
};

// Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a>

export default Footer;