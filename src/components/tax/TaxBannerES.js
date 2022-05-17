import React from 'react';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import {TaxBannerMain, TaxBannerContent, TaxBannerTitle } from '../../styles/tax.styles'

const TaxBannerEs = () => {
    return (
        <TaxBannerMain>
            <TaxBannerContent>
                <AssignmentTurnedInIcon sx={{ fontSize: 80 }}/>
                <TaxBannerTitle>Presentación de Impuestos, Ahora Más Fácil</TaxBannerTitle>
            </TaxBannerContent>
        </TaxBannerMain>
    )
}

export default TaxBannerEs;