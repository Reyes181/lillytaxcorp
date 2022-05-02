import styled from "styled-components";

export const HeaderBar = styled.div`
    @media screen and (max-width: 600px) {
        header {
            background-color: #00274c !important;
            box-shadow: none !important;
        }
    } 
`;

export const HeaderContainer = styled.div`
    width: 60%;
    margin:  0 auto;

    button {
        font-size: 1vw;
        padding-top: 2vh;
        font-weight: 700;
        font-family: 'Roboto';
        color: #11296b;
    }
    
    @media screen and (max-width: 1024px) {
        width: 100%;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
        margin: auto;

        button {
            font-size: 3vw;
            color: #fff;
        }
    }
`;

export const HeaderContent = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderLogoBox = styled.div`
    flex-basis: 20%;
    height: 100%;
    display: flex;
    align-items: center;

    a {
        text-decoration: none;
    }

    @media screen and (max-width: 600px) {
        flex-basis: 80%;
    }
`;

export const HeaderLogo = styled.div`
    font-family: 'Nauman';
    font-size: 2vw;
    color: #11296b;
    word-spacing: -5px;

    @media screen and (max-width: 600px) {
        color: #fff;
        font-size: 4vw;
    }
`;

export const HeaderNav = styled.div`
    flex-basis: 60%;
    display: flex;
    justify-content: space-around;
    font-weight: 500;
    font-family: 'Roboto';
    padding: 10px 0px 0px 0px;
    height: 100%;

    a {
        text-decoration: none;
        color: #5f5e5e;
    }

    @media screen and (max-width: 600px) {
        display: none;
    }
`;

export const HeaderLanguage = styled.div`
    flex-basis: 10%;
    display: flex;
    justify-content: space-evenly;
    padding: 10px 0px 0px 0px;

    @media screen and (max-width: 600px) {
        display: none
    }
`;

export const MobileBurger = styled.div`
    height: 100%;
    flex-basis: 15%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        color: #fff;
    }

    @media screen and (min-width: 600px) {
        display: none;
    }
`;