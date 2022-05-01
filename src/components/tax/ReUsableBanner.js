import React from 'react';
import {ReuseContainer, ReuseContent, ReuseLeft, ReuseRight} from '../../styles/tax.styles'

const ReUsableBanner = ({icon, title, desc}) => {
    return (
        <ReuseContainer>
            <ReuseContent>
                <ReuseLeft>
                    <div>{title}</div>
                    <div>{desc}</div>
                </ReuseLeft>

                <ReuseRight>
                    {icon}
                </ReuseRight>
            </ReuseContent>
        </ReuseContainer>
    )
};

export default ReUsableBanner;