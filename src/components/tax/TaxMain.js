import React, {useEffect} from 'react';
import { useLocation } from "react-router";
import StoreIcon from '@mui/icons-material/Store';
import FolderIcon from '@mui/icons-material/Folder';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import {TaxFileContainer, TaxMainContainer, TaxFileSubHeader, TaxFileTerms, TaxCard, TaxCardContainer, TaxCardDesc, TaxCardTitle, TaxIcon, TaxFileLeft, TaxFileRight, TaxFileRightConatiner} from '../../styles/tax.styles';

const TaxMain = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Tax Filing Service - Lilly Tax Corp.'
    }, [pathname]);
    
    return (
        <TaxMainContainer>
            <TaxFileContainer>
              
                <TaxFileLeft>
                    <TaxFileSubHeader>
                        <p>File Your Taxes Now.</p>
                        <p>File now, and pay later!</p>
                    </TaxFileSubHeader>
                    <TaxFileTerms>
                        Additional fee of $39.95 applied on using this service. The Refund Transfer is an optional tax refund-related product offered by MetaBank, N.A., Member FDIC.
                        The Refund Transfer is not a loan. E-filing of a tax return is required to be eligible for the product. Subject to approval. Fees apply.
                        See terms and conditions for details.
                    </TaxFileTerms>
                </TaxFileLeft>
                <TaxFileRight>
                    <TaxFileRightConatiner>
                        <div>$0</div>
                        <div>out of pocket, today.</div>
                    </TaxFileRightConatiner>
                </TaxFileRight>
            </TaxFileContainer>

            <TaxCardContainer>
                <TaxCard to={'/taxfiling/in-person-preparation'}>
                    <TaxIcon>
                        <StoreIcon  sx={{ fontSize: 80 }}/>
                    </TaxIcon>
                    <TaxCardTitle>
                        In-person Tax Preparation
                    </TaxCardTitle>
                    <TaxCardDesc>
                        Prepare your taxes directly in our offices with us. 
                        Ask any questions you have and work alongside our experienced tax preparer.
                    </TaxCardDesc>
                </TaxCard>

                <TaxCard to={'/taxfiling/virtual-preparation'}>
                    <TaxIcon>
                        <FolderIcon sx={{ fontSize: 80 }}/>
                    </TaxIcon>
                    <TaxCardTitle>
                        Drop-off Tax Preparation
                    </TaxCardTitle>
                    <TaxCardDesc>
                        Gather all of your tax documents and drop them off at our office, we will take care of the rest.
                    </TaxCardDesc>
                </TaxCard>

                <TaxCard to={'/taxfiling/dropoff-preparation'}>
                    <TaxIcon>
                        <ImportantDevicesIcon sx={{ fontSize: 80 }}/>
                    </TaxIcon>
                    <TaxCardTitle>
                        Virtual Tax Preparation
                    </TaxCardTitle>
                    <TaxCardDesc>
                        Upload your information and tax documents to our secure email address and WhatsApp messenger. All from the comfort of your home.
                    </TaxCardDesc>
                </TaxCard>
            </TaxCardContainer>
        </TaxMainContainer>
    )
};

export default TaxMain;