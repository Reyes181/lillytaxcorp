import React from 'react';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import {TaxBannerMain, TaxBannerContent, TaxBannerTitleEs } from '../../styles/tax.styles'

const TaxBannerEs = () => {
    return (
        <TaxBannerMain>
            <TaxBannerContent>
                <AssignmentTurnedInIcon sx={{ fontSize: 80 }}/>
                <TaxBannerTitleEs>Presentación de Impuestos, Ahora Más Fácil</TaxBannerTitleEs>
            </TaxBannerContent>
        </TaxBannerMain>
    )
}

export default TaxBannerEs;