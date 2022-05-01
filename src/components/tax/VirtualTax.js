import React, {useEffect} from 'react';
import { useLocation } from "react-router";
import ReUsableBanner from './ReUsableBanner';
import WaysToFile from './WaysToFile';
import Banner from '../hero/Banner';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import CheckIcon from '@mui/icons-material/Check';
import StoreIcon from '@mui/icons-material/Store';
import FolderIcon from '@mui/icons-material/Folder';
import VirtualImg from '../../resources/images/kaitlyn-baker-unsplash.jpg';
import {InPersonContainer, InPersonMain, InPersonLeft, InPersonRight, InPersonBadge, InPersonTitle, InPersonContent,
    InPersonCheckList
} from '../../styles/tax.styles';

const VirtualTax = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    
    const navList = [
        {
            name: 'In-Person Preparation',
            link: '/taxfiling/in-person-preparation',
            icon: <StoreIcon/>
        },
        {
            name: 'Drop-off Tax Preparation',
            link: '/taxfiling/dropoff-preparation',
            icon: <FolderIcon/>
        }
    ]
    return (
        <InPersonContainer>
            <ReUsableBanner
                icon={<ImportantDevicesIcon/>}
                title={'Virtual Tax Preparation'}
                desc={'Upload your information and tex documents to our WhatsApp or send them to our secure email address. All from the comfort of your home.'}
            />
            <InPersonMain>
                <InPersonLeft>
                    <img src={VirtualImg} alt='Virtual'/>
                </InPersonLeft>
                <InPersonRight>
                    <InPersonBadge>Filing Your Taxes Virtually</InPersonBadge>
                    <hr/>
                    <InPersonTitle>
                        File your taxes without leaving home with our virtual option.
                    </InPersonTitle>

                    <InPersonContent>
                        Filing you taxes is easy now. We want to make our clients lives easier and the process of preparing your taxes effortless. When you choose to file your taxes with our
                        virtual option you can upload your documents to our WhatsApp or email, review and sign your tax return, pay and get a copy of your return without leaving home.
                    </InPersonContent>

                    <InPersonContent>
                        Even if you do not come to our office, you will get the same results and we will take care of your tax return the same way as if you did.
                    </InPersonContent>

                    <InPersonCheckList>
                        <li>
                            <CheckIcon />
                            Fast and Easy
                        </li>
                        <li>
                            <CheckIcon />
                            Save time
                        </li>
                        <li>
                            <CheckIcon />
                            From the comfort of your home
                        </li>
                        <li>
                            <CheckIcon />
                            Follow the status of your return from your phone
                        </li>
                    </InPersonCheckList>
                </InPersonRight>
            </InPersonMain>

            <WaysToFile
                navigations={navList}
            />

            <Banner/>
        </InPersonContainer>
    );
};

export default VirtualTax;