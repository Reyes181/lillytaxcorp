import React, {useEffect} from 'react';
import { useLocation } from "react-router";
import {HeroContainer, HeroLeftContainer, HeroRightContainer, HeroImgBox, HeroListItem} from '../../styles/hero.styles';
import HeroImg from '../../resources/images/Hero_Img.png';
import Banner from './Banner';
import MobileSlider from './MobileSlider';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SliderContent from './Slider';

const Hero = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <HeroContainer>
                <HeroLeftContainer>
                    <HeroListItem>
                        <CheckCircleOutlineIcon sx={{ fontSize: 60 }}/>
                        <div>New ITIN Applications</div>
                    </HeroListItem>
                    <HeroListItem>
                        <CheckCircleOutlineIcon sx={{ fontSize: 60 }}/>
                        <div>ITIN Renewal</div>
                    </HeroListItem>
                    <HeroListItem>
                        <CheckCircleOutlineIcon sx={{ fontSize: 60 }}/>
                        <div>Tax Amendments</div>
                    </HeroListItem>
                </HeroLeftContainer>
                <HeroRightContainer>
                    <HeroImgBox src={HeroImg} alt='Lilly'/>
                </HeroRightContainer>
            </HeroContainer>
            <SliderContent/>
            <MobileSlider/>
            <Banner/>
        </>

    )
}

export default Hero;