import React, {useEffect} from 'react';
import { useLocation } from "react-router";
import ReUsableBanner from './ReUsableBanner';
import WaysToFile from './WaysToFile';
import Banner from '../hero/Banner';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import CheckIcon from '@mui/icons-material/Check';
import StoreIcon from '@mui/icons-material/Store';
import FolderIcon from '@mui/icons-material/Folder';
import DropOffImg from '../../resources/images/kelly-sikkema-unsplash.jpg';
import {InPersonContainer, InPersonMain, InPersonLeft, InPersonRight, InPersonBadge, InPersonTitle, InPersonContent,
    InPersonCheckList
} from '../../styles/tax.styles';


const DropoffTax = () => {
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
            name: 'Virtual Tax Preparation',
            link: '/taxfiling/virtual-preparation',
            icon: <ImportantDevicesIcon/>
        }
    ]
    return (
        <InPersonContainer>
            <ReUsableBanner
                icon={<FolderIcon/>}
                title={'Drop-Off Tax Preparation'}
                desc={'No time to wait? Gather all of your tax documents and drop them off at our office. If we have any questions or need additional information we will contact you via phone or email.'}
            />
            <InPersonMain>
                <InPersonLeft>
                    <img src={DropOffImg} alt='Virtual'/>
                </InPersonLeft>
                <InPersonRight>
                    <InPersonBadge>Drop Your documents Off</InPersonBadge>
                    <hr/>
                    <InPersonTitle>
                        No appointments and no waiting time, we'll take care of your tax return.
                    </InPersonTitle>

                    <InPersonContent>
                        With this option our clients can opt to drop-off all of their tax documents in our office without having to make an appointment
                        or to wait for a for the preparer to be available.
                    </InPersonContent>

                    <InPersonContent>
                       Once we receive your documents we will work on your tax return and once everyhting is ready, we will contact you so you can review it and approve it.
                    </InPersonContent>

                    <InPersonCheckList>
                        <li>
                            <CheckIcon />
                            Convenient
                        </li>
                        <li>
                            <CheckIcon />
                            Quick and easy
                        </li>
                        <li>
                            <CheckIcon />
                            Time-saving
                        </li>
                        <li>
                            <CheckIcon />
                            Effortless
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

export default DropoffTax;