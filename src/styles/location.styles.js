import styled from "styled-components";

export const LocationContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #fff;
`;

export const LocationHeader = styled.div`
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

export const LocationContent = styled.div`
    height: auto;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10vh auto 5vh auto;

    @media screen and (max-width: 1023px) {
        width: 90%;
    }
`;

export const LocationTop = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    height: auto;
    
    @media screen and (max-width: 1023px) {
        
    }

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

export const LocationTopLeft = styled.div`
    flex-basis: 50%;
    height: 100vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 1023px) {
        height: auto;
        justify-content: flex-start;
        width: 80%;
    }

    @media screen and (max-width: 600px) {
        height: auto;
        justify-content: space-evenly;
        width: 100%;
    }
`;

export const LocationAddress = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;

    div:nth-child(1){
        font-size: 1.25vw;
        font-family: 'Roboto';
        font-weight: 700;
    }

    div:nth-child(2){
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 1.25vw;
        font-family: 'Roboto';
        margin: 2vh 0 0 0;
        color: #5f5e5e;
        font-weight: 500;
    }

    @media screen and (max-width: 1023px) {
        width: 90%;

        div:nth-child(1){
            font-size: 1.75vw;        }
    
        div:nth-child(2){
            font-size: 1.75vw;
            margin: 2vh 0 3vh 0;
        }
    }

    @media screen and (max-width: 600px) {
        width: 100%;

        div:nth-child(1){
            font-size: 7vw;
        }
    
        div:nth-child(2){
            font-size: 7vw;
        }
    }
`;

export const LocationHours = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;

    div {
        font-size: 1.25vw;
        font-family: 'Roboto';
        font-weight: 700;
    }

    ul {
        list-style: none;
        padding: 0;
        width: 100%;

        li {
            width: 100%;
            font-size: 0.95vw;
            font-family: 'Roboto';
            font-weight: 500;
            display: flex;
            justify-content: space-between;
            align-content: flex-end;
            margin: 1vh 0;

            span:nth-child(1){
                color: #5f5e5e;
                font-size: 1.25vw;
            }

            span:nth-child(2){
                padding: 0.8vh 0 0 0;
            }
        }
    }

    @media screen and (max-width: 1023px) {
        width: 90%;
        margin: 2vh auto;

        div {
            font-size: 1.75vw;
            font-weight: 300;
        }
    
        ul {
            li {
                font-size: 1.75vw;

                span:nth-child(2){
                    padding: 0;
                }
            }
        }
    }

    @media screen and (max-width: 600px) {
        width: 100%;

        div {
            font-size: 7vw;
        }
    
        ul {
            li {
                font-size: 5vw;
            }
        }
    }
`;

export const LocationTopRight = styled.div`
    flex-basis: 45%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    iframe {
        flex-basis: 50%;
    }

    @media screen and (max-width: 1023px) {
        height: 50vh;
        width: 100%;

        iframe {
            flex-basis: 60%;
            margin: 2vh 0;
        }
    }

    @media screen and (max-width: 600px) {
        flex-direction: column-reverse;
        flex-basis: 50%;
        height: auto;

        iframe {
            height: 30vh !important;
            margin: 2vh 0;
        }
    }
`;

export const LocationContact = styled.div`
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    font-family: 'Roboto';
    font-size: 1.25vw;

    @media screen and (max-width: 1023px) {
        width: 100%;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`;

export const ContactTitle = styled.div`
    font-size: 1.25vw;
    font-family: 'Roboto';
    font-weight: 700;

    @media screen and (max-width: 1023px) {
        font-size: 1.75vw;
    }

    @media screen and (max-width: 600px) {
        font-size: 7vw;
        margin: 2vh 0 0 0;
    }
`;

export const ContactWays = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    font-family: 'Roboto';
    font-weight: 500;
    color: #5f5e5e;
                

    div {
        flex-basis: 50%;
        margin: 0 0 2vh 0;
        font-size: 0.95vw;

        span {
            font-size: 1.25vw;
        }
    }

    @media screen and (max-width: 1023px) {

        div {
            flex-basis: 100%;
            margin: 1vh 0;
            font-size: 1.75vw;
        }
    }

    @media screen and (max-width: 600px) {
        flex-direction: column;
        margin: 2vh 0;

        div {
            flex-basis: 50%;
            margin: 0 0 2vh 0;
            font-size: 5vw;
        }
    }
`;

export const ContactDesc = styled.div`
    width: 90%;
    font-size: 1.10vw;
    font-family: 'Roboto';
    line-height: 40px;
    font-weight: 700;
    border: solid 4px #11296b;
    text-align: center;
    color: #0c0c0c;
    padding: 20px;

    @media screen and (max-width: 1023px) {
        padding: 0;
        height: 10vh;
        width: 100%;
        font-size: 1.75vw;
        font-weight: 500;
        display: flex;
        align-items: center;
        margin: 2vh 0 0 0;
    }

    @media screen and (max-width: 600px) {
        height: 30vh;
        font-size: 5vw;
        margin: 0;
    }
`;

export const AboutContianer = styled.div`
    width: 80%;
    margin: 10vh auto;
    height: auto;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

    @media screen and (max-width: 1023px){
        width: 90%;
        margin: 3vh auto;
    }

    @media screen and (max-width: 600px) {
        flex-direction: column !important;
    }
`;

export const AboutTopLeft = styled.div`
    flex-basis: 45%;
    display: flex;
    flex-direction: column;
    margin: 5vh 0;

    hr {
        width: 100%;
        margin: 2vh 0;
    }

    @media screen and (max-width: 600px) {
        flex-basis: 50%;
        margin: 3vh auto;
    }
`;

export const AboutTopRight = styled.div`
    flex-basis: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    img {
        height: auto;
        width: 90%;
    }

    @media screen and (max-width: 1023px){
        img {
            width: 100%;
        }
    }

    @media screen and (max-width: 600px) {
        margin: 3vh auto;
        justify-content: center !important;

        img {
            width: 100%;
        }
    }
`;

export const AboutBadge = styled.div`
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
        height: 6vh;
        font-size: 5.5vw;
    }
`;

export const AboutTitle = styled.div`
    width: 80%;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 2.50vw;
    color: #0c0c0c;
    margin:  2vh 0;

    @media screen and (max-width: 1023px){
        width: 100%;
        margin: 1vh 0 2vh 0;
    }

    @media screen and (max-width: 600px){
        font-size: 9.5vw;
    }
`;

export const AboutDesc = styled.div`
    width: 100%;
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
        text-align: justify-content;
    }
`;

export const AboutSubContainer = styled.div`
    width: 40%;
    margin: 5vh auto 10vh auto;
    height: auto;
    display: flex;
    flex-direction: column;

    hr {
        width: 50%;
        margin: 5vh auto;
    }

    @media screen and (max-width: 1023px){
        width: 60%;
        margin: 5vh auto;

        hr {
            margin: 2vh auto;
        }
    }

    @media screen and (max-width: 600px){
        width: 100%;
        margin: 5vh auto 10vh auto;

        hr {
            margin: 5vh auto;
        }
    }
`;

export const AboutSubTitle = styled.div`
    width: 100%;
    font-family: 'Roboto';
    font-weight: 700;
    text-align: center;
    font-size: 2.25vw;

    span {
        color: rgb(255, 203, 5);
    }

    @media screen and (max-width: 1023px){
        font-size: 3.5vw;
    }

    @media screen and (max-width: 600px){
        font-size: 7vw;
    }
`;

export const AboutSubDesc = styled.div`
    width: 60%;
    font-family: 'Roboto';
    font-size: 300;
    text-align: center;
    margin: 0 auto;
    font-size: 1.5vw;

    @media screen and (max-width: 1023px){
        width: 80%;
        font-size: 2.5vw;
    }

    @media screen and (max-width: 600px){
        width: 100%;
        font-size: 5vw;
    }
`;

export const AboutSubImage = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: 90%;
        width: 90%;
    }

    @media screen and (max-width: 1023px){
        height: 25vh;

        img {
            height: 90%;
            width: 80%;
        }
    }

    @media screen and (max-width: 600px){
        width: 100%;
        height: 35vh;

        img {
            height: 90%;
            width: 90%;
        }
    }
`;