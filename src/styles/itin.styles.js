import styled from "styled-components";
import { Link } from 'react-router-dom';

export const ITINContainer =  styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: 'Roboto';
    width: 100%;
`;

export const ITINHeader = styled.div`
    height: 50vh;
    background: rgb(17,41,96);
    background: radial-gradient(circle, rgba(17,41,96,1) 17%, rgba(0,39,76,1) 77%);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-family: 'Roboto';
    font-size: 2vw;
    letter-spacing: 5px;
    font-weight: 700;;
    width: 100%;
    flex-direction: column;

    svg {
        margin-bottom: 5vh;
    }

    
    @media screen and (max-width: 1023px) {
        height: 30vh;
        justify-content: flex-end;
        font-size: 4vw;

        svg {
            margin-bottom: 2.5vh;
        }

        span {
            margin-bottom: 5vh;
        }
    }

    @media screen and (max-width: 600px) {
        height: 50vh;
        justify-content: center;
        font-size: 8vw;
        text-align: center;

        svg {
            font-size: 80px !important;
            margin-bottom: 5vh;
        }

        span {
            margin-bottom: 0;
        }
    }

`;

export const ITINlogoContainer = styled.div`
    width: 60%;
    margin: 10vh auto;
    display: flex;
    justify-content: flex-start;

    @media screen and (max-width: 1023px) {
        width: 90%;
    }

    @media screen and (max-width: 600px) {
        width: 90%;
        justify-content: center;
        height: 15vh;
    }
`;

export const ITINimg = styled.img`
    width: 25%;
    height: auto;

    @media screen and (max-width: 1023px) {
        width: 35%;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`;

export const ITINMainContainer = styled.div`
    width: 60%;
    margin: 0 auto;
    display: flex;

    @media screen and (max-width: 1023px) {
        width: 90%;
    }

    @media screen and (max-width: 600px) {
        width: 90%;
        flex-direction: column;
    }
`;

export const ITINLeft = styled.div`
    flex-basis: 60%;
    display: flex;
    flex-direction: column;
    border-right: solid 1px #dcdcdc;

    div {
        width: 90%;
        font-weight: 300;
        line-height: 25px;
        word-spacing: 2px;
        margin-bottom: 2vh;
    }

    h3 {
        margin: 4vh 0;
    }

    li {
        padding: 5px 0;
    }


    @media screen and (max-width: 600px) {
        border-right: none;
        border-bottom: solid 1px #dcdcdc;

        div {
            width: 100%;
            font-size: 5vw;
            line-height: 30px;
        }
    }
`;

export const ITINBottom = styled.div`
    width: 100% !important;
    margin: 5vh 0;
`;

export const ITINBottomHeader = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    border-bottom: 2px solid #ffcb05;
    align-items: center;
    font-size: 1vw;
    font-weight: 700 !important;
    color: #00274c;
    line-height: 40px !important;

    svg {
        color: #00274c;
        margin-right: 0.8vw;
    }

    @media screen and (max-width: 1023px) {
       font-size: 3vw;
    }
`;

export const ITINBottomBody = styled.div`
    width: 100% !important;
`;

export const ITINRight = styled.div`
    flex-basis: 40%;
    diplay: flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (max-width: 600px) {
        width: 100%;
        align-items: center;
        margin: 5vh auto;
    }
`;

export const ITINRibbon = styled.div`
    width: 100%;
    height: 30vh;
    margin-left: 1vw;

    img {
        height: auto;
        width: 80%;
    }

    @media screen and (max-width: 1023px) {
        height: 20vh;
        display: flex;
        justify-content: center;

        img {
            width: 100%;
        }
    }

    @media screen and (max-width: 600px) {
        display: flex;
        justify-content: center;
        height: 30vh;
        img {
            width: 100%;
        }
    }
`;

export const ITINHelp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 30vh;
    background: #00274c;
    color: #fff;
    justify-content: space-evenly;
    font-size: 1vw;
    font-weight: 700;
    margin: 5vh 0 0 1vw;

    div:nth-child(2) {
        width: 60%;
        text-align: center;
    }

    @media screen and (max-width: 1023px) {
        height: 20vh;
        width: 100%;
        font-size: 2.5vw;

        div:nth-child(2) {
            width: 90%;
        }
    }

    @media screen and (max-width: 600px) {
        height: 30vh;
        width: 100%;
        font-size: 5vw;

        div:nth-child(2) {
            width: 80%;
        }
    }
`;

export const ITINHelpButton = styled(Link)`
    text-decoration: none;
    background: #fff;
    color: #00274c;
    padding: 6.75px;
    border-radius: 10px;
    font-size: 0.9vw;
    cursor: pointer;

    @media screen and (max-width: 1023px) {
        font-size: 2.5vw;
    }

    @media screen and (max-width: 600px) {
        padding: 8.75px;
        font-size: 5vw;
    }
`;

export const FaqContainer = styled.div`
    margin: 5vh auto;
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-family: 'Roboto';
`;

export const FaqHeader = styled.div`
    font-weight: 700;
    font-size: 2.5vw;

    @media screen and (max-width: 1023px) {
        font-size: 4vw;
    }

    @media screen and (max-width: 600px) {
        font-size: 9vw;
        text-align: center;
        width: 90%;
    }
`;

export const FaqContent = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    
    @media screen and (max-width: 1023px) {
        flex-direction: column;  
        width: 90%;
    }
`;

export const FaqBox = styled.div`
    flex-basis: 45%;
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    margin: 5vh 0;
    height: 15vh;

    @media screen and (max-width: 1023px) {
        height: 10vh;
        margin: 1.5vh 0;
    }

    @media screen and (max-width: 600px) {
        height: 15vh;
        margin: 5vh 0;
    }
`;

export const FaqTitle = styled.div`
    font-weight: 500;
    font-size: 1.25vw;
    flex: 1;
    display: flex;
    align-items: center;
    padding: 10px;
    color: #696969;

    @media screen and (max-width: 1023px) {
        font-size: 2.5vw;
    }

    @media screen and (max-width: 600px) {
        font-size: 5.75vw;
    }
`;

export const FaqDesc = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    border-top: 1px solid #bfc1c2;
    padding: 10px;
    font-weight: 300;

    @media screen and (max-width: 1023px) {
        font-size: initial;
        line-height: 40px;
    }

    @media screen and (max-width: 600px) {
       font-size: 5.75vw;
       line-height: 30px;   
    }
`;