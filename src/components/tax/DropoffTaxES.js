import React, {useEffect} from 'react';
import { useLocation } from "react-router";
import ReUsableBanner from './ReUsableBanner';
import WaysToFileEs from './WaysToFileES';
import BannerEs from '../hero/BannerES';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import CheckIcon from '@mui/icons-material/Check';
import StoreIcon from '@mui/icons-material/Store';
import FolderIcon from '@mui/icons-material/Folder';
import DropOffImg from '../../resources/images/kelly-sikkema-unsplash.jpg';
import {InPersonContainer, InPersonMainEs, InPersonLeft, InPersonRightEs, InPersonBadgeEs, InPersonTitleEs, InPersonContentEs,
    InPersonCheckList
} from '../../styles/tax.styles';


const DropoffTaxEs = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Declaración "Drop-Off" - Lilly Tax Corp.'
    }, [pathname]);


    const navList = [
        {
            name: 'Declaración En Persona',
            link: '/es/impuestos/declaración-en-persona',
            icon: <StoreIcon/>
        },
        {
            name: 'Declaración Virtual',
            link: '/es/impuestos/declaración-virtual',
            icon: <ImportantDevicesIcon/>
        }
    ]
    return (
        <InPersonContainer>
            <ReUsableBanner
                icon={<FolderIcon/>}
                title={'Declaración "Drop-Off"'}
                desc={'Reúna todos sus documentos fiscales y déjelos en nuestra oficina. Si tenemos alguna pregunta o necesitamos información adicional, nos pondremos en contacto con usted por teléfono o correo electrónico.'}
            />
            <InPersonMainEs>
                <InPersonLeft>
                    <img src={DropOffImg} alt='Virtual'/>
                </InPersonLeft>
                <InPersonRightEs>
                    <InPersonBadgeEs>Deje sus Documentos</InPersonBadgeEs>
                    <hr/>
                    <InPersonTitleEs>
                        Sin citas y sin tiempo de espera, encargamos de su declaración de impuestos.
                    </InPersonTitleEs>

                    <InPersonContentEs>
                        Con esta opción nuestros clientes pueden optar por dejar todos sus documentos fiscales en nuestra oficina sin necesidad de concertar cita previa.
                        o esperar a que el preparador esté disponible.
                    </InPersonContentEs>

                    <InPersonContentEs>
                        Una vez que recibamos sus documentos, trabajaremos en su declaración de impuestos y una vez que todo esté listo, nos pondremos en contacto con usted para que pueda revisarla y aprobarla.
                    </InPersonContentEs>

                    <InPersonCheckList>
                        <li>
                            <CheckIcon />
                            Conveniente
                        </li>
                        <li>
                            <CheckIcon />
                            Rápido y Fácil
                        </li>
                        <li>
                            <CheckIcon />
                            De Guarda de Tiempo
                        </li>
                        <li>
                            <CheckIcon />
                            Sin Esfuerzo Alguno
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

export default DropoffTaxEs;