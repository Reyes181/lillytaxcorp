import React, {useEffect} from 'react';
import { useLocation } from "react-router";
import Banner from '../hero/Banner';
import InfoIcon from '@mui/icons-material/Info';
import LillySelf from '../../resources/images/lilly.JPG';
import LillyGroup from '../../resources/images/lillygroup.JPG';
import {LocationContainer, LocationHeader, AboutContianer, AboutTopLeft, AboutTopRight, AboutBadge, AboutDesc, AboutTitle,
    AboutSubContainer, AboutSubTitle, AboutSubDesc, AboutSubImage
} from '../../styles/location.styles.js';

const About = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <LocationContainer>
            <LocationHeader>
                <InfoIcon sx={{ fontSize: 80 }}/>
                <span>About</span>
            </LocationHeader>

            <AboutContianer>
                <AboutTopLeft>
                    <AboutBadge>About Lilly</AboutBadge>
                    <hr/>
                    <AboutTitle>Our Commitment.</AboutTitle>
                    <AboutDesc>
                        We are your partner in your finances, we take the time to understand and meet your unique needs
                        and out them first in everything we do. We are always here to help you! Analyzing all possible
                        alternatives for your faithful satisfaction and loyalty.
                    </AboutDesc>
                </AboutTopLeft>
                <AboutTopRight>
                    <img src={LillySelf} alt='Lilly'/>
                </AboutTopRight>
            </AboutContianer>


            <AboutContianer style={{flexDirection: 'row'}}>
                <AboutTopLeft>
                    <AboutBadge>Service</AboutBadge>
                    <hr/>
                    <AboutTitle>Transparency.</AboutTitle>
                    <AboutDesc>
                        We are experienced tax leaders, tireless in our efforts to achieve better results when
                        preparing your taxes. We pride ourselves in having a very diverse client base, with customers coming from every corner of the world seeking our assistance with their individual and business needs. 
                    </AboutDesc>
                </AboutTopLeft>
                <AboutTopRight style={{justifyContent: 'flex-end'}}>
                    <img src={LillyGroup} alt='Lilly Group'/>
                </AboutTopRight>
            </AboutContianer>

            <AboutSubContainer>
                <AboutSubTitle><span>Refer Us</span> To Your Family & Friends</AboutSubTitle>
                <hr/>
                <AboutSubImage>
                    <img src={LillyGroup} alt='Garcia Family'/>
                </AboutSubImage>
                <hr/>
                <AboutSubDesc>
                    Receive cash incentive when you refer families and friends.
                </AboutSubDesc>
            </AboutSubContainer>

            <Banner/>
        </LocationContainer>
    );
};

export default About;