import React from 'react';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import {TaxBannerMain, TaxBannerContent, TaxBannerTitle } from '../../styles/tax.styles'
const TaxBanner = () => {
    return (
        <TaxBannerMain>
            <TaxBannerContent>
                <AssignmentTurnedInIcon sx={{ fontSize: 80 }}/>
                <TaxBannerTitle>Tax Filing, Now Made Easier</TaxBannerTitle>
            </TaxBannerContent>
        </TaxBannerMain>
    )
}

export default TaxBanner;