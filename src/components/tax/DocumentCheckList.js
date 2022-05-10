import React, {useEffect} from 'react';
import { useLocation } from "react-router";
import Banner from '../hero/Banner';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import SwapVerticalCircleIcon from '@mui/icons-material/SwapVerticalCircle';
import PaidIcon from '@mui/icons-material/Paid';
import StoreIcon from '@mui/icons-material/Store';
import FolderIcon from '@mui/icons-material/Folder';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import {DocumentCheckListContainer, DocumentCheckListBanner, DLBannerContent, DLBannerTitle, DLBannerBorder, DLBannerDesc, DLPersonalContent,
    DLInfoContainer, DLPeronsalIcon, DLPerosnalTitle, DLPerosnalList, DLMiniTitle, TaxCard, TaxCardContainer, TaxCardTitle, TaxIcon, TaxCardDesc,
    DLBottom
} from '../../styles/tax.styles';

const DocumentCheckList = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Tax Filing Document Checklist - Lilly Tax Corp.'
    }, [pathname]);

    return (
        <DocumentCheckListContainer>
            <DocumentCheckListBanner>
                <DLBannerContent>
                    <DLBannerTitle>Tax Preparation Checklist</DLBannerTitle>
                    <DLBannerBorder/>
                    <DLBannerDesc>
                        <span>
                            Whether you prepare your taxes in person, drop-off your documents or file online, you will need certain information and documentation to file your tax return. 
                            Having all of your documents takes time but it guarantees you the refund you deserve. We are here to help you determine what documents you need to file your taxes based on your specific situation.
                        </span>
                        <span>
                            Use the checklist below to find the tax documents and forms you will need to get started. 
                        </span>
                    </DLBannerDesc>
                </DLBannerContent>
            </DocumentCheckListBanner>

            <DLInfoContainer>
                <DLPersonalContent>
                    <DLPeronsalIcon>
                        <AccountCircleIcon />
                    </DLPeronsalIcon>

                    <DLPerosnalTitle>
                        <span>Perosnal Information</span>
                        <span>Tax Identification Numbers are mandatory items on your checklist. All taxpayers will need the following to do their taxes.</span>
                    </DLPerosnalTitle>

                    <DLPerosnalList>
                        <li>Your social security number or tax ID number</li>
                        <li>Your spouse’s full name, social security number or tax ID number, and date of birth</li>
                        <li>Information about your stimulus payment — also known as an economic impact payment (EIP) — you may have IRS Notice 1444 showing your EIP amount</li>
                        <li>Identity Protection PIN, if one has been issued to you, your spouse, or your dependent by the IRS</li>
                        <li>Routing and account numbers to receive your refund by direct deposit or pay your balance due if you choose</li>
                    </DLPerosnalList>
                </DLPersonalContent >

                <DLPersonalContent>
                    <DLPeronsalIcon>
                        <FamilyRestroomIcon />
                    </DLPeronsalIcon>

                    <DLPerosnalTitle>
                        <span>Dependents Information</span>
                        <span>If there are any dependents that you are planning to include in your tax return make sure to gather this information.</span>
                    </DLPerosnalTitle>

                    <DLPerosnalList>
                        <li>Dates of birth and social security numbers or tax ID numbers</li>
                        <li>Childcare records (including the provider’s tax ID number) if applicable</li>
                        <li>Income of dependents and of other adults in your home</li>
                        <li>Identity Protection PIN, if one has been issued to you, your spouse, or your dependent by the IRS</li>
                        <li>Form 8332 showing that the child’s custodial parent is releasing their right to claim a child to you, the noncustodial parent (if applicable)</li>
                    </DLPerosnalList>
                </DLPersonalContent >

                <DLPersonalContent>
                    <DLPeronsalIcon>
                        <PaidIcon/>
                    </DLPeronsalIcon>

                    <DLPerosnalTitle>
                        <span>Income</span>
                        <span>Gather all the documents that confirm the money you received during the previous year.</span>
                    </DLPerosnalTitle>

                    <DLMiniTitle>Employed</DLMiniTitle>
                    <DLPerosnalList>
                        <li>Forms W-2</li>
                    </DLPerosnalList>

                    <DLMiniTitle>Unemployed</DLMiniTitle>
                    <DLPerosnalList>
                        <li>Unemployment (1099-G)</li>
                    </DLPerosnalList>

                    <DLMiniTitle>Self-Employed</DLMiniTitle>
                    <DLPerosnalList>
                        <li>Forms 1099, Schedules K-1, income records to verify amounts not reported on 1099-MISC or new 1099-NEC</li>
                        <li>Records of all expenses — check registers or credit card statements, and receipts</li>
                        <li>Business-use asset information (cost, date placed in service, etc.) for depreciation</li>
                        <li>Office in home information, if applicable</li>
                        <li>Record of estimated tax payments made (Form 1040–ES)</li>
                    </DLPerosnalList>

                    <DLMiniTitle>Rental Income</DLMiniTitle>
                    <DLPerosnalList>
                        <li>Records of income and expenses</li>
                        <li>Rental asset information (cost, date placed in service, etc.) for depreciationRecord of estimated tax payments made (Form 1040–ES)</li>
                    </DLPerosnalList>

                    <DLMiniTitle>Retirement Income</DLMiniTitle>
                    <DLPerosnalList>
                        <li>Pension/IRA/annuity income (1099-R)</li>
                        <li>Traditional IRA basis (i.e., amounts you contributed to the IRA that were already taxed)</li>
                        <li>Social security/RRB income (SSA-1099, RRB-1099)</li>
                    </DLPerosnalList>

                    <DLMiniTitle>Savings and Investments or Dividends</DLMiniTitle>
                    <DLPerosnalList>
                        <li>Interest, dividend income (1099-INT, 1099-OID, 1099-DIV)</li>
                        <li>Income from sales of stock or other property (1099-B, 1099-S)</li>
                        <li>Dates of acquisition and records of your cost or other basis in property you sold (if basis is not reported on 1099-B)</li>
                        <li>Health Savings Account and long-term care reimbursements (1099-SA or 1099-LTC)</li>
                        <li>Expenses related to your investments</li>
                        <li>Record of estimated tax payments made (Form 1040–ES)</li>
                        <li>Transactions involving cryptocurrency (Virtual currency)</li>
                    </DLPerosnalList>

                    <DLMiniTitle>Other Income and Losses</DLMiniTitle>
                    <DLPerosnalList>
                        <li>Gambling income (W-2G or records showing income, as well as expense records)</li>
                        <li>Jury duty records</li>
                        <li>Hobby income and expenses</li>
                        <li>Prizes and awards</li>
                        <li>Trust income</li>
                        <li>Royalty Income 1099–MISC</li>
                        <li>Any other 1099s received</li>
                        <li>Record of alimony paid/received with ex-spouse’s name and SSN</li>
                    </DLPerosnalList>
                </DLPersonalContent>


                <DLPersonalContent>
                    <DLPeronsalIcon>
                        <SwapVerticalCircleIcon/>
                    </DLPeronsalIcon>

                    <DLPerosnalTitle>
                        <span>Deductions</span>
                        <span>Deductions can help you lower your taxable income, which generally means a reduced tax bill.</span>
                    </DLPerosnalTitle>

                    <DLMiniTitle>Home Ownership</DLMiniTitle>
                    <DLPerosnalList>
                        <li>Forms 1098 or other mortgage interest statements</li>
                        <li>Real estate and personal property tax records</li>
                        <li>Receipts for energy-saving home improvements (e.g., solar panels, solar water heater)</li>
                        <li>All other 1098 series forms</li>
                    </DLPerosnalList>

                    <DLMiniTitle>Charitable Donations</DLMiniTitle>
                    <DLPerosnalList>
                        <li>Cash amounts donated to houses of worship, schools, other charitable organizations</li>
                        <li>Records of non-cash charitable donations</li>
                        <li>Amounts of miles driven for charitable or medical purposes</li>
                    </DLPerosnalList>

                    <DLMiniTitle>Medical Expenses</DLMiniTitle>
                    <DLPerosnalList>
                        <li>Amounts paid for healthcare, insurance, and to doctors, dentists, and hospitals</li>
                    </DLPerosnalList>

                    <DLMiniTitle>Health Insurance</DLMiniTitle>
                    <DLPerosnalList>
                        <li>Form 1095-A if you enrolled in an insurance plan through the Marketplace (Exchange)</li>
                    </DLPerosnalList>

                    <DLMiniTitle>Childcare Expenses</DLMiniTitle>
                    <DLPerosnalList>
                        <li>Fees paid to a licensed day care center or family day care for care of an infant or preschooler</li>
                        <li>Amounts paid to a baby-sitter or provider care of your child under age 13 while you work</li>
                        <li>Expenses paid through a dependent care flexible spending account at work</li>
                    </DLPerosnalList>

                    <DLMiniTitle>Educational Expenses</DLMiniTitle>
                    <DLPerosnalList>
                        <li>Forms 1098-T from educational institutions</li>
                        <li>Receipts that itemize qualified educational expenses</li>
                        <li>Records of any scholarships or fellowships you received</li>
                        <li>Form 1098-E if you paid student loan interest</li>
                    </DLPerosnalList>

                    <DLMiniTitle>K-12 Educator Expenses</DLMiniTitle>
                    <DLPerosnalList>
                        <li>Receipts for classroom expenses (for educators in grades K-12)</li>
                    </DLPerosnalList>

                    <DLMiniTitle>State and Local Taxes</DLMiniTitle>
                    <DLPerosnalList>
                        <li>Amount of state and local income or sales tax paid (other than wage withholding)</li>
                        <li>Invoice showing amount of vehicle sales tax paid and / or personal property tax on vehicles</li>
                    </DLPerosnalList>

                    <DLMiniTitle>Retirement and Other Savings</DLMiniTitle>
                    <DLPerosnalList>
                        <li>Form 5498-SA showing HSA contributions</li>
                        <li>Form 5498 showing IRA contributions</li>
                        <li>All other 5498 series forms (5498-QA, 5498-ESA)</li>
                    </DLPerosnalList>

                    <DLMiniTitle>Federally Declared Disaster</DLMiniTitle>
                    <DLPerosnalList>
                        <li>City/county you lived/worked/had property in</li>
                        <li>Records to support property losses (appraisal, clean-up costs, etc.)</li>
                        <li>Records of rebuilding/repair costs</li>
                        <li>Insurance reimbursements/claims to be paid</li>
                        <li>FEMA assistance information</li>
                        <li>Check the FEMA website to see if your county has been declared a federal disaster area </li>
                    </DLPerosnalList>
                </DLPersonalContent>

                <DLBottom>
                    <DocumentCheckListBanner>
                        <DLBannerContent>
                            <DLBannerTitle>Ways To File</DLBannerTitle>
                            <DLBannerBorder/>
                            <DLBannerDesc>
                                <span>
                                    Other ways to file designed to meet your needs.
                                    We want to make preparing your return easier for you, offering different tax filing options
                                    that will help us serve you better.
                                </span>
                                <span>
                                    With every tax filing option you can be assured that we will prepare your taxes the right way and
                                    you will get the best refund possible.
                                </span>
                            </DLBannerDesc>
                        </DLBannerContent>
                    </DocumentCheckListBanner>

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
                </DLBottom>
            </DLInfoContainer>
            <Banner/>
        </DocumentCheckListContainer>
    );
};

export default DocumentCheckList;