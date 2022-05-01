import React from "react";
import HandShake from '../../resources/images/handshakeCirle.png'
import {TaxLowBannerMain, TaxLowBannerContent, TaxLowBannerLeft, LeftBadge, LeftContent, LeftButton, TaxLowBannerRight} from '../../styles/tax.styles';

const TaxLowBanner = () => {
    return (
        <TaxLowBannerMain>
            <TaxLowBannerContent>
                <TaxLowBannerLeft>
                    <LeftBadge>Tax Documents</LeftBadge>
                    <hr/>
                    <LeftContent>
                        Do you have all your tax documents ready? We can help you prepare them based on your situation.
                    </LeftContent>
                    <LeftButton to='/taxfiling/documentchecklist'>
                        Document Checklist
                    </LeftButton>
                </TaxLowBannerLeft>
                <TaxLowBannerRight>
                    <img src={HandShake} alt='handshake'/>
                </TaxLowBannerRight>
            </TaxLowBannerContent>
        </TaxLowBannerMain>
    )
}

export default TaxLowBanner;