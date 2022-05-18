import React from "react";
import HandShake from '../../resources/images/handshakeCirle.png'
import {TaxLowBannerMain, TaxLowBannerContent, TaxLowBannerLeft, LeftBadgeEs, LeftContent, LeftButton, TaxLowBannerRight} from '../../styles/tax.styles';

const TaxLowBannerEs = () => {
    return (
        <TaxLowBannerMain>
            <TaxLowBannerContent>
                <TaxLowBannerLeft>
                    <LeftBadgeEs>Documentos Fiscales</LeftBadgeEs>
                    <hr/>
                    <LeftContent>
                        ¿Tienes todos tus documentos fiscales listos? Podemos ayudarlo a prepararlos en función de su situación.
                    </LeftContent>
                    <LeftButton to='/es/impuestos/lista-de-documentos'>
                        Lista de Documentos
                    </LeftButton>
                </TaxLowBannerLeft>
                <TaxLowBannerRight>
                    <img src={HandShake} alt='handshake'/>
                </TaxLowBannerRight>
            </TaxLowBannerContent>
        </TaxLowBannerMain>
    )
}

export default TaxLowBannerEs;