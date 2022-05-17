import React, {useEffect} from 'react';
import { useLocation } from "react-router";
import {HeroContainer, HeroLeftContainer, HeroRightContainer, HeroImgBox, HeroListItem} from '../../styles/hero.styles';
import HeroImg from '../../resources/images/Hero_Img.png';
import BannerEs from './BannerES';
import MobileSliderEs from './MobileSliderES';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SliderContentEs from './SliderES';

const HeroEs = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Página Principal - Lilly Tax Corp.'
    }, [pathname]);

    return (
        <>
            <HeroContainer>
                <HeroLeftContainer>
                    <HeroListItem>
                        <CheckCircleOutlineIcon sx={{ fontSize: 60 }}/>
                        <div>Aplicaciones de ITIN</div>
                    </HeroListItem>
                    <HeroListItem>
                        <CheckCircleOutlineIcon sx={{ fontSize: 60 }}/>
                        <div>Renovaciones de ITIN</div>
                    </HeroListItem>
                    <HeroListItem>
                        <CheckCircleOutlineIcon sx={{ fontSize: 60 }}/>
                        <div>Preparacion de Impuestos</div>
                    </HeroListItem>
                </HeroLeftContainer>
                <HeroRightContainer>
                    <HeroImgBox src={HeroImg} alt='Lilly'/>
                </HeroRightContainer>
            </HeroContainer>
            <SliderContentEs/>
            <MobileSliderEs/>
            <BannerEs/>
        </>

    )
}

export default HeroEs;