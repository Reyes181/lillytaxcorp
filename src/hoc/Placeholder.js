import React, {useEffect} from 'react';
import { useLocation } from "react-router";
import { PlaceholderContainer, PlaceholderContent, PlaceholderImg, PlaceholderTitle } from '../styles/placeholder.styles';
import CuationImg from '../resources/images/Caution Tape-big.png';

const Placeholder = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <PlaceholderContainer>
            <PlaceholderContent>
                <PlaceholderImg>
                    <img src={CuationImg} alt='Page Coming Soon'/>
                </PlaceholderImg>
                
                <PlaceholderTitle>Page still in-development.</PlaceholderTitle>
            </PlaceholderContent>
        </PlaceholderContainer>
    );
};

export default Placeholder;