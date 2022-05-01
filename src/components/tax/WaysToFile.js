import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import {WaysToFileContainer, WaysToFileLeft, WaysToFileRight, WaysToFileBadge, WaysToFileTitle,
    WaysToFileDesc, InPersonCheckList, WaysToFileNav, WaysToFileNavContent, WaysToFileNavName,
    WaysToFileNavIcon
} from '../../styles/tax.styles';

const WaysToFile = ({navigations}) => {
    return (
        <WaysToFileContainer>
            <WaysToFileLeft>
                <WaysToFileBadge>
                    More Ways To File
                </WaysToFileBadge>
                <hr/>
                <WaysToFileTitle>
                    Other ways to file designed to meet your <span>needs</span>.
                </WaysToFileTitle>

                <WaysToFileDesc>
                    We want to make preparing your return easier for you, offering different tax filing options
                    that will help us serve you better.
                </WaysToFileDesc>

                <WaysToFileDesc>
                    With every tax filing option you can be assured that we will prepare your taxes the right way and
                    you will get the best refund possible.
                </WaysToFileDesc>

                <InPersonCheckList>
                        <li>
                            <CheckIcon />
                            Transparency
                        </li>
                        <li>
                            <CheckIcon />
                            Experienced Tax Preparer
                        </li>
                        <li>
                            <CheckIcon />
                            Get the refund you deserve
                        </li>
                        <li>
                            <CheckIcon />
                            Great Customer Service
                        </li>
                </InPersonCheckList>
            </WaysToFileLeft>
            <WaysToFileRight>
                {navigations.map((item, i) => (
                    <WaysToFileNav key={i} style={{justifyContent: i === 1 ? 'flex-end' : 'flex-start'}}>
                        <WaysToFileNavContent to={item.link}>
                            <WaysToFileNavIcon>
                                {item.icon}
                            </WaysToFileNavIcon>
                            <WaysToFileNavName>
                                {item.name}
                            </WaysToFileNavName>
                        </WaysToFileNavContent>
                    </WaysToFileNav>
                ))}
            </WaysToFileRight>
        </WaysToFileContainer>
    )
};

export default WaysToFile;