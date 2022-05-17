import React, {useEffect} from 'react';
import { useLocation } from "react-router";
import ReUsableBanner from './ReUsableBanner';
import WaysToFileEs from './WaysToFileES';
import BannerEs from '../hero/BannerES';
import StoreIcon from '@mui/icons-material/Store';
import CheckIcon from '@mui/icons-material/Check';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import FolderIcon from '@mui/icons-material/Folder';
import OfficeImg from '../../resources/images/scott-graham-unsplash.jpg';
import {InPersonContainer, InPersonMain, InPersonLeft, InPersonRight, InPersonBadge, InPersonTitle, InPersonContent,
    InPersonCheckList
} from '../../styles/tax.styles';

const InPersonTaxEs = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Declaración En Persona - Lilly Tax Corp.'
    }, [pathname]);

    const navList = [
        {
            name: 'Declaración Virtual',
            link: '/es/impuestos/declaración-virtual',
            icon: <ImportantDevicesIcon/>
        },
        {
            name: 'Declaración "Drop-Off"',
            link: '/es/impuestos/declaración-drop-off',
            icon: <FolderIcon/>
        }
    ]


    return(
        <InPersonContainer>
            <ReUsableBanner
                icon={<StoreIcon/>}
                title={'Declaración En Persona'}
                desc={'Presente sus impuestos directamente en nuestras oficinas. Haga cualquier pregunta que tenga y trabaje junto con nuestros expertos preparadores de impuestos para obtener el mejor reembolso posible.'}
            />
            <InPersonMain>
                <InPersonLeft>
                    <img src={OfficeImg} alt='Office'/>
                </InPersonLeft>
                <InPersonRight>
                    <InPersonBadge>Presentación con un preparador de impuestos</InPersonBadge>
                    <hr/>
                    <InPersonTitle>
                        Presentación con un preparador de impuestos.
                    </InPersonTitle>

                    <InPersonContent>
                        Nuestro equipo tiene el conocimiento y la experiencia necesaria cuando se trata de preparación de impuestos. Cuando vengas a nuestra oficina puedes
                        cuente con nosotros para obtener el mejor reembolso posible según su situación.
                    </InPersonContent>

                    <InPersonContent>
                        Reciba asesoramiento profesional y haga las preguntas que tenga cuando se registre con nosotros. Nos encargaremos de su declaración de impuestos y
                        luego le explicaremos sus números cuando todo esté listo.
                    </InPersonContent>

                    <InPersonCheckList>
                        <li>
                            <CheckIcon />
                            Consultivo
                        </li>
                        <li>
                            <CheckIcon />
                            Presentar de la manera correcta
                        </li>
                        <li>
                            <CheckIcon />
                            Obtenga todas las deducciones y créditos
                        </li>
                        <li>
                            <CheckIcon />
                            Servicio valioso
                        </li>
                    </InPersonCheckList>
                </InPersonRight>
            </InPersonMain>

            <WaysToFileEs
                navigations={navList}
            />

            <BannerEs/>
        </InPersonContainer>
    )
};

export default InPersonTaxEs;