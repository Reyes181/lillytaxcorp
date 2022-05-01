import React, {useEffect} from 'react';
import { useLocation } from "react-router";
import ReUsableBanner from './ReUsableBanner';
import WaysToFile from './WaysToFile';
import Banner from '../hero/Banner';
import StoreIcon from '@mui/icons-material/Store';
import CheckIcon from '@mui/icons-material/Check';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import FolderIcon from '@mui/icons-material/Folder';
import OfficeImg from '../../resources/images/scott-graham-unsplash.jpg';
import {InPersonContainer, InPersonMain, InPersonLeft, InPersonRight, InPersonBadge, InPersonTitle, InPersonContent,
    InPersonCheckList
} from '../../styles/tax.styles';

const InPersonTax = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const navList = [
        {
            name: 'Virtual Tax Preparation',
            link: '/taxfiling/virtual-preparation',
            icon: <ImportantDevicesIcon/>
        },
        {
            name: 'Drop-off Tax Preparation',
            link: '/taxfiling/dropoff-preparation',
            icon: <FolderIcon/>
        }
    ]


    return(
        <InPersonContainer>
            <ReUsableBanner
                icon={<StoreIcon/>}
                title={'In-Person Tax Preparation'}
                desc={'File your taxes directly in our offices. Ask any questions you have and work alongside our experienced tax preparers to get the best possible refund.'}
            />
            <InPersonMain>
                <InPersonLeft>
                    <img src={OfficeImg} alt='Office'/>
                </InPersonLeft>
                <InPersonRight>
                    <InPersonBadge>Filing with a tax preparer</InPersonBadge>
                    <hr/>
                    <InPersonTitle>
                        File in-person with our experienced preparer.
                    </InPersonTitle>

                    <InPersonContent>
                        Our team has the knowledge and the necessary experience when it comes to tax preparation. When you come to our office you can
                        count on us to get the best refund possible based on your situation.
                    </InPersonContent>

                    <InPersonContent>
                        Receive profesional advice and ask the questions you have when you file in with us. We will take care of your tax return and 
                        then we will explain yout numbers when everything is ready.
                    </InPersonContent>

                    <InPersonCheckList>
                        <li>
                            <CheckIcon />
                            Advisory
                        </li>
                        <li>
                            <CheckIcon />
                            Filing the right way
                        </li>
                        <li>
                            <CheckIcon />
                            Get every deduction and credit
                        </li>
                        <li>
                            <CheckIcon />
                            Valuable service
                        </li>
                    </InPersonCheckList>
                </InPersonRight>
            </InPersonMain>

            <WaysToFile
                navigations={navList}
            />

            <Banner/>
        </InPersonContainer>
    )
};

export default InPersonTax;