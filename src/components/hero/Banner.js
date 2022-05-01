import React from 'react';
import BlurBck from '../../resources/images/Blur.jpg';
import { BannerContainer, BannerHeader, BannerContent, BannerButton } from '../../styles/hero.styles';

const Banner = () => {
    return (
        <BannerContainer style={{background: `url(${BlurBck})`}}>
            
            <BannerContent>
                <div>Any questions? Get in touch with us.</div>
                <BannerHeader>We Are Here To Help</BannerHeader>

                <BannerButton to={'/location'}>
                    Contact
                </BannerButton>
            </BannerContent>
        </BannerContainer>
    )
};

export default Banner;