import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import {WaysToFileContainer, WaysToFileLeft, WaysToFileRight, WaysToFileBadge, WaysToFileTitle,
    WaysToFileDesc, InPersonCheckList, WaysToFileNav, WaysToFileNavContent, WaysToFileNavName,
    WaysToFileNavIcon
} from '../../styles/tax.styles';

const WaysToFileEs = ({navigations}) => {
    return (
        <WaysToFileContainer>
            <WaysToFileLeft>
                <WaysToFileBadge>
                    Más Formas de Presentar
                </WaysToFileBadge>
                <hr/>
                <WaysToFileTitle>
                    Otras formas de archivo diseñadas para satisfacer sus <span>necesidades</span>.
                </WaysToFileTitle>

                <WaysToFileDesc>
                    Queremos facilitarte la preparación de tu declaración, ofreciéndote diferentes opciones de presentación de impuestos
                    eso nos ayudará a servirle mejor.
                </WaysToFileDesc>

                <WaysToFileDesc>
                    Con cada opción de presentación de impuestos, puede estar seguro de que prepararemos sus impuestos de la manera correcta y
                    obtendrá el mejor reembolso posible.
                </WaysToFileDesc>

                <InPersonCheckList>
                        <li>
                            <CheckIcon />
                            Transparencia
                        </li>
                        <li>
                            <CheckIcon />
                            Preparador de Impuestos Con Experiencia
                        </li>
                        <li>
                            <CheckIcon />
                            Obtenga El Reembolso Que Se Merece
                        </li>
                        <li>
                            <CheckIcon />
                            Gran Servicio Al Cliente
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

export default WaysToFileEs;