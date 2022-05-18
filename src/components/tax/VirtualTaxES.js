import React, {useEffect} from 'react';
import { useLocation } from "react-router";
import ReUsableBanner from './ReUsableBanner';
import WaysToFileEs from './WaysToFileES';
import BannerEs from '../hero/BannerES';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import CheckIcon from '@mui/icons-material/Check';
import StoreIcon from '@mui/icons-material/Store';
import FolderIcon from '@mui/icons-material/Folder';
import VirtualImg from '../../resources/images/kaitlyn-baker-unsplash.jpg';
import {InPersonContainer, InPersonMainEs, InPersonLeft, InPersonRightEs, InPersonBadgeEs, InPersonTitleEs, InPersonContentEs,
    InPersonCheckList
} from '../../styles/tax.styles';

const VirtualTaxEs = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Declaración Virtual - Lilly Tax Corp.'
    }, [pathname]);
    
    const navList = [
        {
            name: 'Declaración En Persona',
            link: '/es/impuestos/declaración-en-persona',
            icon: <StoreIcon/>
        },
        {
            name: 'Declaración "Drop-Off"',
            link: '/es/impuestos/declaración-drop-off',
            icon: <FolderIcon/>
        }
    ]
    return (
        <InPersonContainer>
            <ReUsableBanner
                icon={<ImportantDevicesIcon/>}
                title={'Declaración Virtual'}
                desc={'Cargue su información y documentos de texto a nuestro WhatsApp o envíelos a nuestra dirección de correo electrónico segura. Todo desde la comodidad de su hogar.'}
            />
            <InPersonMainEs>
                <InPersonLeft>
                    <img src={VirtualImg} alt='Virtual'/>
                </InPersonLeft>
                <InPersonRightEs>
                    <InPersonBadgeEs>Presentación de Sus Impuestos Virtualmente</InPersonBadgeEs>
                    <hr/>
                    <InPersonTitleEs>
                        Presenta tus impuestos con nuestra opción virtual.
                    </InPersonTitleEs>

                    <InPersonContentEs>
                        Presentar sus impuestos ahora es fácil. Queremos hacer la vida de nuestros clientes más fácil y el proceso de preparación de sus impuestos sin esfuerzo. Cuando elige declarar sus impuestos con nuestro
                        opción virtual puedes subir tus documentos a nuestro WhatsApp o correo electrónico, revisar y firmar tu declaración de impuestos, pagar y obtener una copia de tu declaración sin salir de casa.
                    </InPersonContentEs>

                    <InPersonContentEs>
                        Incluso si no viene a su oficina, obtendrá los mismos resultados y nos encargaremos de su declaración de impuestos de la misma manera que si lo hiciera.
                    </InPersonContentEs>

                    <InPersonCheckList>
                        <li>
                            <CheckIcon />
                            Rápido y Fácil
                        </li>
                        <li>
                            <CheckIcon />
                            Ahorrar Tiempo
                        </li>
                        <li>
                            <CheckIcon />
                            Desde la comodidad de tu hogar
                        </li>
                        <li>
                            <CheckIcon />
                            Sigue el estado de tu devolución desde tu teléfono
                        </li>
                    </InPersonCheckList>
                </InPersonRightEs>
            </InPersonMainEs>

            <WaysToFileEs
                navigations={navList}
            />

            <BannerEs/>
        </InPersonContainer>
    );
};

export default VirtualTaxEs;