import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { SliderContainer, SliderItemContainer, SliderImg, SliderDetails, SliderTitle, SliderDesc, SliderBadge, SliderButton } from '../../styles/hero.styles';
import Bank from '../../resources/images/Bank.png';
import ManMoney from '../../resources/images/ManMoney.png';

const SliderContentEs = () => {

    const settings = {
        dots: true,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }

    const Items = [
        {
            title: 'Sin Pagar de Sus Bolsillos',
            description: 'Use su reembolso para pagar sus tarifas de preparación de impuestos. ¡Es fácil! Con E-file, recupere su dinero rápido y fácil.',
            image: ManMoney,
            badge: 'Impuestos',
            link: '/es/impuestos'
        },
        {
            title: 'Solicita tu Numero ITIN',
            description: 'En Lilly Tax somos expertos en la elaboración de formularios 7-W, correspondientes al número de identificación personal del contribuyente (ITIN) otorgado por el IRS. Ven y aprovecha los beneficios que te ofrece esta identificación.',
            image: Bank,
            badge: 'ITIN',
            link: '/es/itin'
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
                            <SliderButton to={item.link}>Aprende Más</SliderButton>
                        </SliderDetails>
                    </SliderItemContainer>
                ))}
            </Slider>
        </SliderContainer>
    )
};

export default SliderContentEs;