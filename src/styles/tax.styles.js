import styled from "styled-components";
import { Link } from 'react-router-dom';

export const TaxMainContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    background: #fff;
`;

export const TaxFileContainer = styled.div`
    width: 80%;
    margin: 5vh auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (max-width: 1023px) {
        width: 90%;
        flex-direction: column-reverse;
        margin: 2vh auto 5vh auto;
    }
`;

export const TaxFileHeader = styled.div`
    font-size: 3vw;
    font-weight: 700;
    flex-basis: 100%;
    font-family: 'Roboto';
    text-align: center;
    align-self: center;
    margin: 0 auto 3vh auto;
`;

export const TaxFileLeft = styled.div`
    flex-basis: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 600px) {
        flex-basis: 50%;
`;

export const TaxFileSubHeader = styled.div`
    font-size: 2vw;
    font-weight: 400;
    width: 60%;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 3vh 0;

    p {
        margin: 1vh 0;
        color: #11296b;
        font-family: 'Changa One';
    }

    @media screen and (max-width: 1023px) {
        font-size: 4vw;
        width: 100%;
        text-align: center;
    }

    @media screen and (max-width: 600px) {
        font-size: 8vw;
        width: 100%;
        text-align: center;
    }
`;

export const TaxFileTerms = styled.div`
    font-size: 0.7vw;
    font-weight: 300;
    width: 60%;
    color: #d3d3d3;

    @media screen and (max-width: 1023px) {
        width: 100%;
        font-size: 2vw;
        text-align: center;
    }

    @media screen and (max-width: 600px) {
        font-size: 4vw;
    }
`;

export const TaxFileRight = styled.div`
    flex-basis: 45%;
    align-items: center;
    justify-content: center;
    display: flex;

    @media screen and (max-width: 1023px) {
        flex-basis: 50%;
        margin-bottom: 5vh;
    }
`;

export const TaxFileRightConatiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    height: 100%;
    color: #ffcb05;
    font-family: 'Changa One';

    div:nth-child(1) {
        width: 60%;
        text-align: center;
        font-size: 10vw;
        flex: 2
    }

    div:nth-child(2) {
        flex: 1;
        font-size: 2vw;
        color: #11296b;
    }

    @media screen and (max-width: 1023px) {
        width: 100%;

        div:nth-child(1){
            flex: none;
            font-size: 18vw;
            margin: 0 0 2vh 0;
        }

        div:nth-child(2){
            font-size: 4vw;
            width: 100%;
            text-align: center;
        }
    }

    @media screen and (max-width: 600px) {
        width: 100%;

        div:nth-child(1){
            width: 100%;
            font-size: 30vw;
        }

        div:nth-child(2){
            font-size: 8vw;
        }
    }
`;

export const TaxCardContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin: 5vh auto;

    @media screen and (max-width: 1023px){
        width: 90%;
    }

    @media screen and (max-width: 600px){
        flex-direction: column;
        align-items: space-between;
    }
`;

export const TaxCard = styled(Link)`
    text-decoration: none;
    color: #0c0c0c;
    flex-basis: 25%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0px;
    background: #fff;
    box-shadow: rgb(0 0 0 / 45%) 0px 25px 20px -20px;
    cursor: pointer;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
    }

    @media screen and (max-width: 1023px){
        flex-basis: 30%;
    }

    @media screen and (max-width: 600px){
        margin: 3vh auto;
        width: 100%;
        flex-basis: 50%;
    }
}
`;

export const TaxIcon = styled.div`
    flex: 1;
    margin-bottom: 2vh;

    svg {
        color: #11296b;
    }
`;

export const TaxCardTitle = styled.div`
    flex: 1;
    color: #0c0c0c;
    font-family: 'Roboto';
    font-size: 1.15vw;
    margin-bottom: 2vh;
    font-weight: 700;

    @media screen and (max-width: 1023px){
        font-size: 2vw;
    }

    @media screen and (max-width: 600px){
        font-size: 6vw;
    }
`;

export const TaxCardDesc = styled.div`
    flex: 2;
    text-align: center;
    width: 90%;
    line-height: 30px;
    font-size: 0.9vw;
    display: flex;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 10px;

    @media screen and (max-width: 1023px){
        font-size: 1.25vw;
    }

    @media screen and (max-width: 600px){
        font-size: 4vw;
    }
`;

export const TaxBannerMain = styled.div`
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(17,41,96);
    background: radial-gradient(circle, rgba(17,41,96,1) 17%, rgba(0,39,76,1) 77%);
    color: #fff;

    @media screen and (max-width: 1023px) {
        height: 30vh;
        align-items: flex-end;
    }

    @media screen and (max-width: 600px) {
        height: 50vh;
        align-items: center;
    }
`;

export const TaxBannerContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 60%;

    @media screen and (max-width: 600px) {

        svg {
            font-size: 80px !important;
        }
    }
`;

export const TaxBannerTitle = styled.div`
    font-size: 2vw;
    font-family: 'Roboto';
    letter-spacing: 5px;
    font-weight: 700;

    @media screen and (max-width: 1023px) {
        font-size: 4vw;
        margin-bottom: 2.5vh;
    }

    @media screen and (max-width: 600px) {
        font-size: 8vw;
        text-align: center;
        margin-top: 2vh;
        margin-bottom: 0;
    }
`;

export const TaxBannerTitleEs = styled.div`
    font-size: 2vw;
    font-family: 'Roboto';
    letter-spacing: 5px;
    font-weight: 700;

    @media screen and (max-width: 1023px) {
        font-size: 3vw;
        margin-bottom: 2.5vh;
        text-align: center;
    }

    @media screen and (max-width: 600px) {
        font-size: 8vw;
        text-align: center;
        margin-top: 2vh;
        margin-bottom: 0;
    }
`;

export const TaxLowBannerMain = styled.div`
    height: 65vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1023px){
        height: 40vh;
    }

    @media screen and (max-width: 600px){
        height: auto;
    }
`;

export const TaxLowBannerContent = styled.div`
    height: 80%;
    width: 80%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1023px) {
        width: 90%;
        height: 70%;
    }

    @media screen and (max-width: 600px){
        flex-direction: column-reverse;
        width: 80%;
        height: 80%;
    }
`;

export const TaxLowBannerLeft = styled.div`
    flex-basis: 55%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    hr {
        width: 60%;
        margin-top: 3.5vh;
        margin-right: 40%;
    }

    @media screen and (max-width: 600px){
        margin: 1vh 0 5vh 0;
        hr {
            width: 100%;
            margin-right: 0%;
        }
    }
`;

export const LeftBadge = styled.div`
    flex: 1;
    width: 40%;
    background: #00274c;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-family: 'Changa One';

    @media screen and (max-width: 600px){
        width: 100%;
        flex: none;
        height: 5vh;
        font-size: 5vw;
    }
`;

export const LeftBadgeEs = styled.div`
    flex: 1;
    width: 40%;
    background: #00274c;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-family: 'Changa One';

    @media screen and (max-width: 1023px){
        width: 50%;
    }

    @media screen and (max-width: 600px){
        width: 100%;
        flex: none;
        height: 5vh;
        font-size: 5vw;
    }
`;

export const LeftContent = styled.div`
    flex: 5;
    font-size: 2.5vw;
    color: #0c0c0c;
    font-weight: 300;
    font-family: 'Roboto';
    width: 100%;
    display: flex;
    align-items: center;
    line-height: 60px;

    @media screen and (max-width: 600px){
        font-size: 8vw;
        flex: none;
        margin: 5vh 0;
        text-align: center;
    }
`;

export const LeftButton = styled(Link)`
    flex: 1;
    width: 60%;
    background: #5f5e5e;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-family: 'Changa One';
    text-decoration: none;
    text-transform: uppercase;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 5px 5px;

    @media screen and (max-width: 600px){
        flex: none;
        height: 8vh;
        width: 100%;
        border-radius: 10px;
    }
`;

export const TaxLowBannerRight = styled.div`
    flex-basis: 45%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: auto;
        width: 60%;
    }

    @media screen and (max-width: 600px){
        margin: 0 0 5vh 0;

        img {
            width: 80%;
        }
    }
`;

export const ReuseContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
    width: 100%;
    background: rgb(17,41,96);
    background: radial-gradient(circle, rgba(17,41,96,1) 17%, rgba(0,39,76,1) 77%);

    @media screen and (max-width: 1023px) {
        height: 30vh;
        margin-top: 5vh;
    }

    @media screen and (max-width: 600px) {
        height: 60vh;
        margin-top: 0;
    }
`;

export const ReuseContent = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    @media screen and (max-width: 1023px) {
        width: 80%;
        align-items: center;
    }

    @media screen and (max-width: 600px){
        flex-direction: column-reverse;
        align-items: center;
        justify-content: flex-end;
        height: 70%;
    }
`;

export const ReuseLeft = styled.div`
    flex-basis: 50%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    div:nth-child(1){
        width: 80%;
        color: #fff;
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 3.25vw;
    }

    div:nth-child(2){
        width: 90%;
        color: #fff;
        font-family: 'Roboto';
        margin-top: 3vh;
        line-height: 30px;
    }

    @media screen and (max-width: 1023px) {
        height: 90%;

        div:nth-child(1){
            width: 100%;
        }
    
        div:nth-child(2){
            width: 100%;
            margin-top: 3vh;
            line-height: 30px;
        }
    }

    @media screen and (max-width: 600px){
        flex-basis: 60%;
        width: 100%;
        align-items: center;
        text-align: center;
        height: 80%;

        div:nth-child(1){
            width: 100%;
            font-size: 5.25vw;
        }
    
        div:nth-child(2){
            width: 100%;
            margin-top: 3vh;
            line-height: 30px;
            font-size: 5vw;
        }
    }
`;

export const ReuseRight = styled.div`
    flex-basis: 50%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        color: #fff;
        font-size: 250px;
    }

    @media screen and (max-width: 1023px) {
        svg {
            font-size: 200px;
        }
    }

    @media screen and (max-width: 600px){
        flex-basis: 40%;
        width: 100%;
        align-items: flex-end;

        svg {
            font-size: 150px;
        }
    }
`;

export const InPersonContainer = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
`;

export const InPersonMain = styled.div`
    height: 90vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1023px){
        height: auto;
        align-items: flex-start;
        flex-direction: row-reverse;
    }

    @media screen and (max-width: 600px){
        height: 150vh;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
`;

export const InPersonMainEs = styled.div`
    height: 90vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1023px){
        height: auto;
        align-items: flex-start;
        flex-direction: row-reverse;
    }

    @media screen and (max-width: 600px){
        height: auto;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin: 10vh 0;s
    }
`;

export const InPersonLeft = styled.div`
    flex-basis: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40%;

    img {
        height: auto;
        width: 80%;
    }

    @media screen and (max-width: 1023px){
        height: auto;
        margin: 11vh 0 0 0;
        justify-content: flex-end;

        img {
            width: 90%;
        }
    }

    @media screen and (max-width: 600px){
        flex-basis: 20%;
        justify-content: center;
        margin: 0;

        img {
            width: 90%;
        }
    }
`;

export const InPersonRight = styled.div`
    height: 90%;
    flex-basis: 45%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;

    hr {
        width: 100%;
    }

    @media screen and (max-width: 1023px){
        height: auto;
        margin: 5vh 0 0 0;
    }

    @media screen and (max-width: 600px){
        flex-basis: 75%;
        width: 90%;
        justify-content: space-evenly;
        margin: 0;
    }
`;

export const InPersonRightEs = styled.div`
    height: auto;
    flex-basis: 45%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;

    hr {
        width: 100%;
    }

    @media screen and (max-width: 1023px){
        height: auto;
        margin: 5vh 0 0 0;
    }

    @media screen and (max-width: 600px){
        flex-basis: 75%;
        width: 90%;
        justify-content: space-evenly;
        margin: 0;
    }
`;

export const InPersonBadge = styled.div`
    width: 30%;
    height: 5vh;
    background: #5f5e5e;
    color: #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-family: 'Roboto';
    font-size: 0.775vw;

    @media screen and (max-width: 1023px){
        width: 50%;
        height: 3vh;
        font-size: 1vw;
    }

    @media screen and (max-width: 600px){
        width: 100%;
        height: 8vh;
        font-size: 5.5vw;
    }
`;

export const InPersonBadgeEs = styled.div`
    width: 50%;
    height: 5vh;
    background: #5f5e5e;
    color: #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-family: 'Roboto';
    font-size: 0.775vw;

    @media screen and (max-width: 1023px){
        width: 80%;
        height: 3vh;
        font-size: 1vw;
    }

    @media screen and (max-width: 600px){
        width: 100%;
        height: 8vh;
        font-size: 4.5vw;
        text-align: center;
        margin: 5vh auto;
        box-sizing: border-box;
        padding: 25px;
    }
`;

export const InPersonTitle = styled.div`
    width: 80%;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 2.50vw;
    color: #0c0c0c;
    margin: 0 0 2vh 0;

    @media screen and (max-width: 1023px){
        width: 100%;
        margin: 1vh 0 2vh 0;
    }

    @media screen and (max-width: 600px){
        font-size: 9.5vw;
        margin: 0;
    }
`;

export const InPersonTitleEs = styled.div`
    width: 80%;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 2.50vw;
    color: #0c0c0c;
    margin: 0 0 2vh 0;

    @media screen and (max-width: 1023px){
        width: 100%;
        margin: 1vh 0 2vh 0;
    }

    @media screen and (max-width: 600px){
        font-size: 8.5vw;
        margin: 1vh auto 2vh auto;
    }
`;

export const InPersonContent = styled.div`
    width: 90%;
    font-family: 'Roboto';
    font-weight: 300;
    font-size: 1.25vw;
    line-height: 30px;

    @media screen and (max-width: 1023px){
        width: 100%;
        font-size: 2vw;
        line-height: 40px;
    }

    @media screen and (max-width: 600px){
        width: 100%;
        font-size: 5vw;
    }
`;

export const InPersonContentEs = styled.div`
    width: 90%;
    font-family: 'Roboto';
    font-weight: 300;
    font-size: 1.25vw;
    line-height: 30px;

    @media screen and (max-width: 1023px){
        width: 100%;
        font-size: 2vw;
        line-height: 40px;
    }

    @media screen and (max-width: 600px){
        width: 100%;
        font-size: 5vw;
        margin: 1vh 0;
    }
`;

export const InPersonCheckList = styled.ul`
    list-style: none;
    padding-left: 0;
    width: 80%;
    font-family: 'Roboto';
    font-weight: 300;
    font-size: 1.25vw;

    li {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        padding: 5px 0;

        svg {
            margin-right: 1vh;
            color: rgb(255, 203, 5);
        }
    }

    @media screen and (max-width: 1023px){
        width: 100%;
        font-size: 2vw;
    }

    @media screen and (max-width: 600px){
        width: 100%;
        font-size: 5vw;
        font-weight: 500;
    }
`;

export const WaysToFileContainer = styled.div`
    height: 100vh;
    width: 80%;
    display: flex;
    align-items: center;
    margin: 10vh auto;

    @media screen and (max-width: 1023px){
        width: 90%;
        height: 60vh;
    }

    @media screen and (max-width: 600px){
        height: 200vh;
        margin: 5vh auto 5vh auto;
        flex-direction: column;
    }
`;

export const WaysToFileLeft = styled.div`
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    height: auto;

    hr {
        width: 60%;
        margin: 5vh 40% 5vh 0;
    }

    ul {
        width: 80% !important;

        li {
            width: 100% !important;
        }
    }

    @media screen and (max-width: 1023px){
        flex-basis: 50%;

        hr {
            margin: 2vh 40% 2vh 0;
        }
    }

    @media screen and (max-width: 600px){
        width: 100%;
        flex-basis: 50%;
        justify-content: space-evenly;
        align-items: flex-start;

        hr {
            width: 100%;
            margin: 2vh 0;
        }
    }
`;

export const WaysToFileBadge = styled.div`
    width: 40%;
    height: 5vh;
    background: #5f5e5e;
    color: #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-family: 'Roboto';
    font-size: 0.775vw;

    @media screen and (max-width: 1023px){
        width: 50%;
        height: 3vh;
        font-size: 1vw;
    }

    @media screen and (max-width: 600px){
        width: 100%;
        height: 8vh;
        font-size: 5.5vw;
    }
`;

export const WaysToFileBadgeEs = styled.div`
    width: 50%;
    height: 5vh;
    background: #5f5e5e;
    color: #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-family: 'Roboto';
    font-size: 0.775vw;

    @media screen and (max-width: 1023px){
        width: 50%;
        height: 3vh;
        font-size: 1vw;
    }

    @media screen and (max-width: 600px){
        width: 100%;
        height: 8vh;
        font-size: 5.5vw;
    }
`;

export const WaysToFileTitle = styled.div`
    width: 90%;
    font-family: 'Roboto';
    font-size: 2.25vw;
    font-weight: 500;
    margin-bottom: 2.5vh;

    span {
        text-decoration: underline;
        font-weight: 700;
        color: rgb(255, 203, 5);
    }

    

    @media screen and (max-width: 600px){
        width: 100%;
        font-size: 9.5vw;
    }
`;

export const WaysToFileDesc = styled.div`
    width: 90%;
    font-family: 'Roboto';
    font-weight: 300;
    font-size: 1.25vw;
    line-height: 30px;
    margin: 2.5vh 0;

    @media screen and (max-width: 1023px){
        font-size: 2vw;
        margin: 1vh 0;
    }

    @media screen and (max-width: 600px){
        width: 100%;
        font-size: 5vw;
        line-height: 40px;
    }
`;

export const WaysToFileRight = styled.div`
    flex-basis: 60%;
    display: flex;
    flex-direction: column;
    height: 90%;

    @media screen and (max-width: 1023px){
        flex-basis: 50%;
    }

    @media screen and (max-width: 600px){
        width: 100%;
    }
`;

export const WaysToFileNav = styled.div`
    flex-basis: 50%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media screen and (max-width: 600px){
        justify-content: center !important;
    }
`;

export const WaysToFileNavContent = styled(Link)`
    flex-basis: 50%;
    height: 80%;
    background: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    cursor: pointer;
    text-decoration: none;
    color: #0c0c0c;

    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }

    @media screen and (max-width: 1023px){
        flex-basis: 65%;
    }

    @media screen and (max-width: 600px){
        flex-basis: 100%;
    }
`;

export const WaysToFileNavName = styled.div`
    flex-basis: 40%;
    display: flex;
    width: 80%;
    margin: 0 auto;
    align-items: flex-start;
    justify-content: center;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 1.5vw;
    color: #00274c;

    @media screen and (max-width: 1023px){
        font-size: 2vw;
        width: 90%;
    }

    @media screen and (max-width: 600px){
        font-size: 6vw;
        text-align: center;
    }
`;

export const WaysToFileNavIcon = styled.div`
    flex-basis: 60%;
    display: flex;
    width: 80%;
    margin: 0 auto;
    align-items: center;
    justify-content: flex-start;

    svg {
        font-size: 80px;
        color: #00274c;
    }

    @media screen and (max-width: 600px){
        justify-content: center;

        svg {
            font-size: 125px;
        }
    }
`;

export const DocumentCheckListContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin: 5vh 0 0 0;
`;

export const DocumentCheckListBanner = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;

    @media screen and (max-width: 1023px) {
        height: 40vh;
    }
    
    @media screen and (max-width: 600px) {
        height: auto;
    }
`;

export const DLBannerContent = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-family: 'Roboto';

    @media screen and (max-width: 1023px) {
        width: 90%;
    }

    @media screen and (max-width: 600px) {
        height: 90%;
        align-items: center;
        margin: 10vh 0;
    }
`;

export const DLBannerTitle = styled.div`
    font-weight: 500;
    font-size: 2.5vw;
    width: 100%;
    text-align: left;

    @media screen and (max-width: 1023px) {
        font-size: 3vw;
    }

    @media screen and (max-width: 600px) {
        text-align: center;
        font-size: 7vw;
    }
`;

export const DLBannerBorder = styled.div`
    margin: 2vh 0;
    width: 10%;
    border-bottom: 3px solid #00274c;
    display: flex;
    justify-self: flex-start;

    @media screen and (max-width: 1023px) {
        width: 30%;
    }

    @media screen and (max-width: 600px) {
        width: 40%;
    }
`;

export const DLBannerDesc = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 30px;
    width: 90%;
    font-size: 1.25vw;
    
    span {
        margin: 1vh 0;
    }

    @media screen and (max-width: 1023px) {
        font-size: 2.5vw;
        width: 100%;
    }

    @media screen and (max-width: 600px) {
        text-align: justify;
        font-size: 5vw;
    }
`;

export const DLInfoContainer = styled.div`
    height: auto;
    width: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const DLPersonalContent = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    height: auto;
    margin: 2vh auto;
    align-items: center;

    @media screen and (max-width: 1023px) {
        width: 90%;
    }
`;

export const DLPeronsalIcon = styled.div`
    width: 40%;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 2px solid rgb(255, 203, 5);
    margin-top: 2vh;

    svg {
        #00274c;
        font-size: 60px;
    }

    @media screen and (max-width: 1023px) {
        svg {
            font-size: 80px;
        }
    }

    @media screen and (max-width: 600px) {
        height: 20vh;
        width: 50%;
    }
`;

export const DLPerosnalTitle = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    font-family: 'Roboto';
    font-size: 1.05vw;
    font-weight: 500;
    color: #5f5e5e;
    
    span:nth-child(1){
        font-weight: 300;
        font-size: 1.75vw;
        margin: 0 0 5vh 0;
        color: #0c0c0c;
        margin-bottom: 2vh;
    }

    @media screen and (max-width: 1023px) {
        font-size: 2vw;

        span:nth-child(1){
            font-size: 2.5vw;
        }
    }

    @media screen and (max-width: 600px) {
        font-size: 5vw;
        line-height: 40px;

        span:nth-child(1){
            font-size: 5.75vw;
            line-height: normal;
        }
    }
`;

export const DLPerosnalList = styled.div`
    font-family: 'Roboto';
    font-size: 1.05vw;
    font-weight: 300;
    color: #5f5e5e;
    width: 100%;
    margin: 2vh 0;

    li {
        margin: 1vh 0;
    }

    @media screen and (max-width: 1023px) {
        font-size: 2vw;
        
        li {
            margin: 2vh 0;
        }
    }

    @media screen and (max-width: 600px) {
        font-size: 5vw;
        margin: 5vh 0;

        li {
            margin: 2vh 0;
            text-align: justify;
        }
    }
`;

export const DLMiniTitle = styled.div`
    font-family: 'Roboto';
    font-size: 1.40vw;
    font-weight: 700;
    width: 100%;
    text-align: left;

    @media screen and (max-width: 1023px) {
        font-size: 2.5vw;
        margin: 2vh 0 -2vh 0;
    }

    @media screen and (max-width: 600px) {
        font-size: 5.75vw;
    }
`;

export const DLBottom = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    background: #F1F4F6;
`;