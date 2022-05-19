import React from 'react';
import BlurBck from '../../resources/images/Blur.jpg';
import { BannerContainer, BannerHeader, BannerContent, BannerButton } from '../../styles/hero.styles';

const BannerEs = () => {
    return (
        <BannerContainer style={{background: `url(${BlurBck})`}}>
            
            <BannerContent>
                <div>¿Alguna pregunta? Póngase en contacto con nosotros.</div>
                <BannerHeader>Estamos aqui para ayudar</BannerHeader>

                <BannerButton to={'/es/localizacion'}>
                    Contacto
                </BannerButton>
            </BannerContent>
        </BannerContainer>
    )
};

export default BannerEs;