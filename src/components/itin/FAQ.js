import React from 'react';
import {FaqContainer, FaqHeader, FaqContent, FaqBox, FaqTitle, FaqDesc} from '../../styles/itin.styles';

const FAQ = () => {
    return (
        <FaqContainer>
            <hr/>
            <FaqHeader>Frequently Asked ITIN Questions</FaqHeader>
            <FaqContent>
                <FaqBox>
                    <FaqTitle>Who needs an ITIN?</FaqTitle>
                    <FaqDesc>
                        Taxpayers who are not eligible for a Social Security Number can apply for an 
                        ITIN for tax filing and reporting purposes.
                    </FaqDesc>
                </FaqBox>

                <FaqBox>
                    <FaqTitle>How long does it take to get an ITIN?</FaqTitle>
                    <FaqDesc>
                        It usually takes about seven weeks if you qualify for an ITIN and your application is complete
                        , but processing can take longer.
                    </FaqDesc>
                </FaqBox>

                <FaqBox>
                    <FaqTitle>Do I send my orginal documents when applying for an ITIN?</FaqTitle>
                    <FaqDesc>
                        No, as a Certified Acceptance Agent (CAA), we will attach a Certificate of Accuracy (COA)
                        with a copy of your original documents so you do not worry about losing your documents on the mail.
                    </FaqDesc>
                </FaqBox>

                <FaqBox>
                    <FaqTitle>Can I apply for an ITIN online?</FaqTitle>
                    <FaqDesc>
                        No, in order to apply for an ITIN you will need to mail your tax return with the FORM W-7 in paper.
                    </FaqDesc>
                </FaqBox>
            </FaqContent>
        </FaqContainer>
    )
};

export default FAQ;