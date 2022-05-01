import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { SliderContainer, SliderItemContainer, SliderImg, SliderDetails, SliderTitle, SliderDesc, SliderBadge, SliderButton } from '../../styles/hero.styles';
import Bank from '../../resources/images/Bank.png';
import ManMoney from '../../resources/images/ManMoney.png';

const SliderContent = () => {

    const settings = {
        dots: true,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }

    const Items = [
        {
            title: 'Pay Nothing Now',
            description: 'Use your refund to pay your tax prep fees. Its easy! E-file, get back your money Fast & Easy.',
            image: ManMoney,
            badge: 'Taxes',
            link: '/taxfiling'
        },
        {
            title: 'Request your ITIN number',
            description: 'At Lilly Tax, we are experts in preparing 7-W forms, corresponding to the individual taxpayer identification number (ITIN) granted by the IRS. Come and take advantage of the benefits offered by this identification.',
            image: Bank,
            badge: 'ITIN',
            link: '/itin'
        }
    ]

    return (
        <SliderContainer>
            <Slider {...settings}>
                {Items.map((item, i) => (
                    <SliderItemContainer key={i}>
                        <SliderImg>
                            <img src={item.image} alt={item.title}/>
                        </SliderImg>

                        <SliderDetails>
                        
                            <SliderBadge>{item.badge}</SliderBadge>
                            <hr/>
                            <SliderTitle>{item.title}</SliderTitle>
                            <SliderDesc>{item.description}</SliderDesc>
                            <SliderButton to={item.link}>Learn More</SliderButton>
                        </SliderDetails>
                    </SliderItemContainer>
                ))}
            </Slider>
        </SliderContainer>
    )
};

export default SliderContent;