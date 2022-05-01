import styled from "styled-components";

export const PlaceholderContainer = styled.div`
    height: 80vh;
    margin: 0 auto 5vh auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1023px) {
        margin: 0;
    }

`;

export const PlaceholderContent = styled.div`
    height: 60%;
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media screen and (max-width: 1023px) {
        width: 90%;
        height: 80%;
    }
`;

export const PlaceholderImg = styled.div`
    flex-basis: 80%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: auto;
        width: 50%;
    }


    @media screen and (max-width: 600px) {
        img {
            width: 80%;
        }
    }
`;

export const PlaceholderTitle = styled.div`
    flex-basis: 20%;
    width: 100%;
    text-align: center;
    font-family: 'Roboto';
    font-size: 2vw;
    text-transform: capitalize;

    @media screen and (max-width: 1023px) {
        font-size: 4.75vw;
    }

    @media screen and (max-width: 600px) {
        font-size: 7vw;
    }
`;