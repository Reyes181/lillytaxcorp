import styled from "styled-components";
import { Link } from 'react-router-dom';

export const HeroContainer = styled.div`
    width: 100%;
    height: 80vh;
    margin: 1vh auto 0 auto;
    display: flex;
    background: rgb(17,41,96);
    background: radial-gradient(circle, rgba(17,41,96,1) 17%, rgba(0,39,76,1) 77%);

    @media screen and (max-width: 1023px) {
        height: 60vh;
        flex-direction: column-reverse;
    }

    @media screen and (max-width: 600px) {
        height: 100vh;
    }
`;

export const HeroLeftContainer = styled.div`
    flex-basis: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 1023px) {
        width: 100%;
        justify-content: flex-start;
    }
`;

export const HeroListItem = styled.div`
    color: #fff;
    display: flex;
    justify-content: flex-start;
    width: 50%;
    margin: 2vh auto;
    font-size: 2vw;
    line-height: 60px;
    font-family: 'Roboto';
    
    div {
        padding-left: 10px;
    }

    @media screen and (max-width: 1023px) {
        font-size: 4vw;
        width: 50%;
    }

    @media screen and (max-width: 600px) {
        font-size: 6vw;
        width: 80%;
    }
`;

export const HeroRightContainer = styled.div`
    flex-basis: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media screen and (max-width: 1023px) {
        justify-content: center;
        flex-basis: 30%;
    }
`;

export const HeroImgBox = styled.img`
    width: 60%;
    height: auto;

    @media screen and (max-width: 600px) {
        width: 80%;
    }
`;

export const DeadlineWrapper = styled.div`
    position:absolute;
    bottom: 0px;
    color:#ffffff;
    font-family: 'Roboto';
`;

export const DeadlineTop = styled.div`
    background: #ff4800;
    font-size: 19px;
    padding: 10px;
    display: inline-block;
    text-transform: uppercase;
`;

export const DeadlineBottom = styled.div`
    display: flex;
    background: #d93d00;
    padding: 10px 20px;
`;

export const DeadlineTime = styled.div`
    font-size: 70px;
    border-right: 1px solid #F44336;
    margin-right: 14px;
    padding-right: 49px;
`;

export const DeadlineItem = styled.div`
    &:last-child {
        div {
            border: none;
        }
    }
`;

export const BannerContainer = styled.div`
    height: 50vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-position: bottom !important;

    @media screen and (max-width: 1023px) {
        height: 30vh;
        background-position: left !important;
    }

    @media screen and (max-width: 600px) {
        height: 80vh;
        background-position: right !important;
    }

`;

export const BannerContent = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 50%;
   justify-content: space-around;

    div {
        font-family: 'Roboto';
        font-wight: 700;
        color: #414a4c;
    }

    @media screen and (max-width: 1023px) {
        width: 90%;
        height: 75%;

        div {
            font-size: 3vw;
            font-weight: 700;
            text-align: center;
        }
    }

    @media screen and (max-width: 600px) {
        div {
            font-size: 5vw;
        }
    }
`;

export const BannerHeader = styled.div`
    text-transform: uppercase;
    font-size: 3vw;
    color: #00274c !important;
    font-weight: 700 !important;
    font-family: 'Changa One' !important;

    @media screen and (max-width: 1023px) {
        font-size: 4vw !important;
        text-align: center;
        color: #fff !important;
    }

    @media screen and (max-width: 600px) {
        font-size: 12vw !important;
    }
`;

export const BannerButton = styled(Link)`
    text-decoration: none;
    text-transform: uppercase;
    color: #fff;
    padding: 15px;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffcb05;
    font-family: 'Changa One';
    border-radius: 50px;
    font-size: 1.25vw;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;

    @media screen and (max-width: 1023px) {
        width: 30%;
        padding: 0px;
        height: 4vh;
        border-radius: 5px;
        font-size: 2.5vw;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
        height: 8vh;
        font-size: 8vw;
    }
`;

export const SliderContainer = styled.div`
    width: 100%;
    height: 90vh;
    background: #fff;

    @media screen and (max-width: 1023px) {
        display: none;
    }
`;

export const SliderItemContainer = styled.div`
    width: 90% !important;
    height: 100%;
    display: flex !important;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background: #fff;

    @media screen and (max-width: 1023px) {
        height: auto;
        margin: 5vh auto;
    }

    @media screen and (max-width: 600px) {
        width: 100% !important;
        flex-direction: column !important;
    }
`;

export const SliderImg = styled.div`
    flex-basis: 50%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 50%;
        height: auto;
    }

    @media screen and (max-width: 1023px) {
        img {
            width: 80%;
        }
    }

    @media screen and (max-width: 600px) {
        img {
            width: 50%;
        }
    }
`;

export const SliderDetails = styled.div`
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: flex-start;
    padding: 0 0 1vh 0;

    hr {
        width: 100%;
    }

    div {
        margin: 5vh 0;
    }

    @media screen and (max-width: 1023px) {
        padding: 15px;
    }
`;

export const SliderTitle = styled.div`
    font-size: 3vw;
    font-family: 'Changa One';
    text-transform: Capitalize;

    @media screen and (max-width: 1023px) {
        font-size: 5vw;
        margin: 3vh 0 !important;
        text-align: left;
    }

    @media screen and (max-width: 600px) {
        font-size: 8vw;
    }
`;

export const SliderDesc = styled.div`
    font-family: 'Roboto';
    color: #333333;
    width: 80%;
    line-height: 40px;

    @media screen and (max-width: 1023px) {
        width: 100%;
        text-align: left;
        font-size: 2vw;
    }

    @media screen and (max-width: 600px) {
        font-size: 5vw;
    }
`;

export const SliderBadge =  styled.div`
    width: 10%;
    padding: 10px;
    border-radius: 20px;
    background: #00274c;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Changa One';

    @media screen and (max-width: 1023px) {
        width: 50%;
        align-self: center;
        border-radius: 10px;
        font-size: 2vw;   
    }

    @media screen and (max-width: 600px) {
        font-size: 9vw;
    }
`;

export const SliderButton = styled(Link)`
    text-decoration: none;
    color: #fff;
    padding: 20px;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffcb05;
    font-family: 'Changa One';
    border-radius: 20px;
    font-size: 1.25vw;

    @media screen and (max-width: 1023px) {
        width: 100%;
        padding: 0px;
        height: 5vh;
        border-radius: 5px;
        font-size: 4vw;
    }

    @media screen and (max-width: 600px) {
        font-size: 8vw;
        height: 8vh;
    }
`;

export const MobileSliderContainer = styled.div`
    display: none;

    @media screen and (max-width: 1023px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        background: #fff;
        height: auto;
        padding: 5vh 0;
    }
`