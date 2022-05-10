import React, {useEffect} from 'react';
import { useLocation } from "react-router";
import ITINImage from '../../resources/images/itin.png';
import Ribbon from '../../resources/images/Ribbon.png';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import FAQ from './FAQ';
import {ITINContainer, ITINHeader, ITINlogoContainer, ITINimg, ITINMainContainer, ITINLeft, ITINRight, ITINHelp, 
    ITINRibbon, ITINBottom, ITINBottomHeader, ITINBottomBody, ITINHelpButton} from '../../styles/itin.styles';

const ITINSection = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'ITIN Service - Lilly Tax Corp.'
    }, [pathname]);
    return (
        <ITINContainer>
            <ITINHeader>
                <AssuredWorkloadIcon sx={{ fontSize: 80 }}/>
                <span>ITIN Application (TAX ID)</span>
            </ITINHeader>
            <ITINlogoContainer>
                <ITINimg src={ITINImage} alt='ITIN'/>
            </ITINlogoContainer>
            <ITINMainContainer>
                <ITINLeft>
                    <div>
                        If you are not eligible for a Social Security Number, you can apply for an Individual Taxpayer Identification Number (ITIN) and file your tax return with it. 
                        In addition, when you prepare your tax return with us, you can also fill out an application for an ITIN for your spouse and/or dependents.
                    </div>
                    <div>
                        <h2>Apply for an ITIN</h2>
                        <div>
                            You can apply for an ITIN and we, as the Certified Acceptance Agent (CAA), will verify your supporting documents and issue a Certificate of Accuracy (CoA). 
                            The benefit is that you do not need to send original documents to the IRS. We will submit copies of your documents along with your ITIN application to the IRS for you. 
                        </div>
                    </div>
                    <div>
                        <h2>What are the required documents for an ITIN?</h2>
                        <div>
                            Your Passport or TWO (2) of the following documents: (including at least one proving identification with photo and one proving foreign status from your country):
                        </div>
                        <ul>
                            <li>National Identification Document (this must be current, and include your name, photo, address, date of birth, and expiration date)</li>
                            <li>U.S. driver’s license</li>
                            <li>Foreign driver’s license</li>
                            <li>Birth Certificate (required for a dependent unless a passport is being submitted and the passport has a date of entry into the U.S.)</li>
                            <li>U.S. State I.D.</li>
                            <li>Foreign Voter’s Registration card</li>
                            <li>Visa issued by the U.S. Department of State</li>
                            <li>U.S Military ID card</li>
                            <li>Foreign Military ID card</li>
                            <li>U.S. Citizenship and Immigration Services photo I.D.</li>
                            <li>Medical (for dependents under age 6 only)</li>
                            <li>School records (for dependents who are students under age 18 only)</li>
                        </ul>
                    </div>

                    <ITINBottom>
                        <ITINBottomHeader>
                         <HelpOutlineIcon sx={{ fontSize: 30 }}/>
                          How it works?
                        </ITINBottomHeader>
                        <ITINBottomBody>
                            <div>
                                As an IRS-authorized Certifying Acceptance Agent we will revise your proof of identity and foreign status documents so that you don't have to send the originals, but instead we will attached certified copies.
                            </div>
                            <div>
                                After reviewing your documents, for first time applicants, we will start with your federal income tax return and we will file Form W-7, Application for IRS Individual Taxpayer Identification Number (ITIN).
                                We will attached a Certificate of Accuracy (COA) with your certified copies to prove identity and foreign status.
                            </div>
                            <div>
                                If you are renewing your ITIN you won't have to file a federal income tax return, but we will still need to check your documents in order to attach a COA with your certified copies and Form W-7.
                            </div>
                            <div>
                                Once we have your application package ready you will need to sign a couple of forms and we'll prepare all necessary information for you to send your application to the IRS. 
                            </div>
                        </ITINBottomBody>
                    </ITINBottom>
                </ITINLeft>
                <ITINRight>
                    <ITINRibbon>
                        <img src={Ribbon} alt='IRS certified agent'/>
                    </ITINRibbon>

                    <ITINHelp>
                        <QuestionMarkIcon sx={{ fontSize: 55 }}/>
                        <div>
                            Have a question about Taxes or ITIN?
                        </div>
                        <ITINHelpButton to={'/location'}>
                            Contact Us
                        </ITINHelpButton>
                    </ITINHelp>
                </ITINRight>
            </ITINMainContainer>
            <FAQ/>
        </ITINContainer>
    )
}

export default ITINSection;