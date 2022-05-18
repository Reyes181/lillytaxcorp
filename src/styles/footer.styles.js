import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    background: #00274c;
    color: #0c0c0c;
    height: 60vh;

    @media screen and (max-width: 600px) {
        height: 125vh;
    }
`;

export const FooterContent = styled.div`
    flex: 6;
    display: flex;
    width: 80%;
    align-items: center;
    justify-content: space-around;

    div {
        flex-basis: 25%;
        height: 60%;
        line-height: 40px;
        font-family: 'Roboto';
        font-weight: 700;
        color: #F1F4F6;

        span {
            font-size: 1.25vw;
        }

        ul {
            list-style: none;
            padding-left: 0;
            font-weight: 400 !important;

            a {
                text-decoration: none;
                color: inherit !important;
            }
        }
    }

    @media screen and (max-width: 1023px) {
        width: 90%;
        div {
            width: 100%;

            span {
                font-size: 2vw; 
            }

            ul {
                color: #bfc1c2;
            }
        }
    }

    @media screen and (max-width: 600px) {
        width: 90%;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        flex: 8;

        div {
            width: 100%;

            span {
                font-size: 6vw; 
            }

            ul {
                color: #bfc1c2;
            }
        }
    }
`;


export const FooterLogo = styled.div`
    font-family: 'Nauman' !important;
    font-size: 2vw;
    color: #F1F4F6 !important;
    word-spacing: -5px;
    line-height: none;

    @media screen and (max-width: 600px) {
        width: 100%;
        font-size: 8vw;
        line-height: normal;
        display: flex;
        align-items: center;
    }
`;

export const FooterLogoEs = styled.div`
    font-family: 'Nauman' !important;
    font-size: 2vw;
    color: #F1F4F6 !important;
    word-spacing: -5px;
    line-height: none;

    @media screen and (max-width: 1023px) {
        flex-basis: 15% !important;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
        font-size: 8vw;
        line-height: normal;
        display: flex;
        align-items: center;
    }
`;

export const FooterCopyRight = styled.div`
    width: 80%;
    flex: 2;
    border-top: 1px solid #bfc1c2;
    color: #bfc1c2;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media screen and (max-width: 600px) {
       flex: 1;
       width: 90%;
       justify-content: center;
       font-size: 3vw;
    }
`;

export const FooterBottom = styled.div`
    flex: 1;
    width: 100%;
    background: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #bfc1c2;
    font-size: 0.9vw;

    @media screen and (max-width: 600px) {
        font-size: 5vw;
    }
`;

// div:nth-child(1) {
//     font-family: 'Nauman';
//     font-size: 2vw;
//     color: #fff;
//     word-spacing: -5px;
// }
