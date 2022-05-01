import styled from "styled-components";

export const BackdropContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 100;
    top: 0;
    left: 0;

    @media screen and (min-width: 600px) {
        display: none;
    }
`;

export const SideNavUl = styled.div`
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 10vh 0 0 0;

    ul {
        padding: 0px;
    }

    li {
        flex: 17;
        padding: 10px;
        border-bottom: 1px solid #E0E0E0;
        display: grid;
        margin: 2vh 0;

        a {
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-family: 'Roboto';
            letter-spacing: .035em;
            text-transform: uppercase;
            font-size: 4vw;
            color: #707070;
        }
    }

    @media screen and (min-width: 600px) {
        display: none;
    }

`;

export const LanguageBadge = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    height: 10%;
    justify-content: space-between;

    img {
        height: auto;
        width: 5%;
    }
`;