import React, {useEffect} from 'react';
import { useLocation } from "react-router";
import StoreIcon from '@mui/icons-material/Store';
import FolderIcon from '@mui/icons-material/Folder';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import {TaxFileContainer, TaxMainContainer, TaxFileSubHeader, TaxFileTerms, TaxCard, TaxCardContainer, TaxCardDesc, TaxCardTitle, TaxIcon, TaxFileLeft, TaxFileRight, TaxFileRightConatiner} from '../../styles/tax.styles';

const TaxMainEs = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Servicio de Declaración de Impuestos - Lilly Tax Corp.'
    }, [pathname]);
    
    return (
        <TaxMainContainer>
            <TaxFileContainer>
              
                <TaxFileLeft>
                    <TaxFileSubHeader>
                        <p>Presente Sus Impuestos Ahora.</p>
                        <p>¡Presente ahora y pague después!</p>
                    </TaxFileSubHeader>
                    <TaxFileTerms>
                        Se aplica una tarifa adicional de $ 39.95 al usar este servicio. La transferencia de reembolso es un producto opcional relacionado con el reembolso de impuestos que ofrece MetaBank, N.A., miembro de la FDIC.
                        La transferencia de reembolso no es un préstamo. Se requiere la presentación electrónica de una declaración de impuestos para ser elegible para el producto. Sujeto a aprobación. Se aplican tarifas.
                        Ver términos y condiciones para más detalles.
                    </TaxFileTerms>
                </TaxFileLeft>
                <TaxFileRight>
                    <TaxFileRightConatiner>
                        <div>$0</div>
                        <div>de su bolsillo, hoy.</div>
                    </TaxFileRightConatiner>
                </TaxFileRight>
            </TaxFileContainer>

            <TaxCardContainer>
                <TaxCard to={'/es/impuestos/declaracion-en-persona'}>
                    <TaxIcon>
                        <StoreIcon  sx={{ fontSize: 80 }}/>
                    </TaxIcon>
                    <TaxCardTitle>
                        Declaración En Persona
                    </TaxCardTitle>
                    <TaxCardDesc>
                        Prepara tus impuestos directamente en nuestras oficinas con nosotros. 
                        Haga cualquier pregunta que tenga y trabaje junto con nuestro experimentado preparador de impuestos.
                    </TaxCardDesc>
                </TaxCard>

                <TaxCard to={'/es/impuestos/declaracion-drop-off'}>
                    <TaxIcon>
                        <FolderIcon sx={{ fontSize: 80 }}/>
                    </TaxIcon>
                    <TaxCardTitle>
                        Declaración "Drop-Off"
                    </TaxCardTitle>
                    <TaxCardDesc>
                        Reúna todos sus documentos fiscales y déjelos en nuestra oficina, nosotros nos encargaremos del resto.
                    </TaxCardDesc>
                </TaxCard>

                <TaxCard to={'/es/impuestos/declaracion-virtual'}>
                    <TaxIcon>
                        <ImportantDevicesIcon sx={{ fontSize: 80 }}/>
                    </TaxIcon>
                    <TaxCardTitle>
                        Declaración Virtual
                    </TaxCardTitle>
                    <TaxCardDesc>
                        Cargue su información y documentos fiscales a nuestra dirección de correo electrónico segura y al mensajero de WhatsApp. Todo desde la comodidad de su hogar.
                    </TaxCardDesc>
                </TaxCard>
            </TaxCardContainer>
        </TaxMainContainer>
    )
};

export default TaxMainEs;