import React, {useEffect} from 'react';
import { useLocation } from "react-router";
import BannerEs from '../hero/BannerES';
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

const DocumentCheckListEs = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Lista de Documentos Impuestos - Lilly Tax Corp.'
    }, [pathname]);

    return (
        <DocumentCheckListContainer>
            <DocumentCheckListBanner>
                <DLBannerContent>
                    <DLBannerTitle>Lista de Verificación de Preparación de Impuestos</DLBannerTitle>
                    <DLBannerBorder/>
                    <DLBannerDesc>
                        <span>
                            Ya sea que prepare sus impuestos en persona, entregue sus documentos o los presente en línea, necesitará cierta información y documentación para presentar su declaración de impuestos.
                            Tener todos sus documentos lleva tiempo pero le garantiza el reembolso que se merece. Estamos aquí para ayudarlo a determinar qué documentos necesita para presentar sus impuestos según su situación específica.
                        </span>
                        <span>
                            Use la lista de verificación a continuación para encontrar los documentos y formularios fiscales que necesitará para comenzar. 
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
                        <span>Informacion Personal</span>
                        <span>Los números de identificación fiscal son elementos obligatorios en su lista de verificación. Todos los contribuyentes necesitarán lo siguiente para hacer sus impuestos.</span>
                    </DLPerosnalTitle>

                    <DLPerosnalList>
                        <li>Su número de seguro social o número de identificación fiscal</li>
                        <li>El nombre completo de su cónyuge, número de seguro social o número de identificación fiscal y fecha de nacimiento</li>
                        <li>Información sobre su pago de estímulo, también conocido como pago de impacto económico (EIP), es posible que tenga el Aviso 1444 del IRS que muestra el monto de su EIP</li>
                        <li>PIN de protección de identidad, si el IRS le ha emitido uno a usted, a su cónyuge o a su dependiente</li>
                        <li>Números de ruta y de cuenta para recibir su reembolso por depósito directo o pagar su saldo adeudado si así lo desea</li>
                    </DLPerosnalList>
                </DLPersonalContent >

                <DLPersonalContent>
                    <DLPeronsalIcon>
                        <FamilyRestroomIcon />
                    </DLPeronsalIcon>

                    <DLPerosnalTitle>
                        <span>Información de Dependientes</span>
                        <span>Si hay dependientes que planea incluir en su declaración de impuestos, asegúrese de recopilar esta información.</span>
                    </DLPerosnalTitle>

                    <DLPerosnalList>
                        <li>Fechas de nacimiento y números de seguro social o números de identificación fiscal</li>
                        <li>Registros de cuidado de niños (incluido el número de identificación fiscal del proveedor), si corresponde</li>
                        <li>Ingresos de dependientes y de otros adultos en su hogar</li>
                        <li>PIN de protección de identidad, si el IRS le ha emitido uno a usted, a su cónyuge o a su dependiente</li>
                        <li>Formulario 8332 que muestre que el padre con custodia del niño renuncia a su derecho de reclamar un niño a usted, el padre sin custodia (si corresponde)</li>
                    </DLPerosnalList>
                </DLPersonalContent >

                <DLPersonalContent>
                    <DLPeronsalIcon>
                        <PaidIcon/>
                    </DLPeronsalIcon>

                    <DLPerosnalTitle>
                        <span>Ingreso</span>
                        <span>Reúne todos los documentos que acrediten el dinero que recibiste durante el año anterior.</span>
                    </DLPerosnalTitle>

                    <DLMiniTitle>Empleado</DLMiniTitle>
                    <DLPerosnalList>
                        <li>Formularios W-2</li>
                    </DLPerosnalList>

                    <DLMiniTitle>Desempleados</DLMiniTitle>
                    <DLPerosnalList>
                        <li>Desempleo (1099-G)</li>
                    </DLPerosnalList>

                    <DLMiniTitle>Persona Autoempleada</DLMiniTitle>
                    <DLPerosnalList>
                        <li>Formularios 1099, Anexos K-1, registros de ingresos para verificar las cantidades no declaradas en el 1099-MISC o el nuevo 1099-NEC</li>
                        <li>Registros de todos los gastos: registros de cheques o extractos de tarjetas de crédito y recibos</li>
                        <li>Información de activos de uso comercial (costo, fecha de puesta en servicio, etc.) para la depreciación</li>
                        <li>Información de la oficina en el hogar, si corresponde</li>
                        <li>Registro de pagos de impuestos estimados realizados (Formulario 1040–ES)</li>
                    </DLPerosnalList>

                    <DLMiniTitle>Los Ingresos Por Alquiler</DLMiniTitle>
                    <DLPerosnalList>
                        <li>Registros de ingresos y gastos</li>
                        <li>Información de activos de alquiler (costo, fecha de puesta en servicio, etc.) para depreciación Registro de pagos de impuestos estimados realizados (Formulario 1040-ES)</li>
                    </DLPerosnalList>

                    <DLMiniTitle>Ingreso de Jubilación</DLMiniTitle>
                    <DLPerosnalList>
                        <li>Ingresos de pensión/IRA/anualidad (1099-R)</li>
                        <li>Base de IRA tradicional (es decir, montos que contribuyó a la IRA que ya estaban gravados)</li>
                        <li>Seguro social/ingresos de RRB (SSA-1099, RRB-1099)</li>
                    </DLPerosnalList>

                    <DLMiniTitle>Ahorro e Inversiones o Dividendos</DLMiniTitle>
                    <DLPerosnalList>
                        <li>Intereses, ingresos por dividendos (1099-INT, 1099-OID, 1099-DIV)</li>
                        <li>Ingresos por venta de acciones u otra propiedad (1099-B, 1099-S)</li>
                        <li>Fechas de adquisición y registros de su costo u otra base en la propiedad que vendió (si la base no se informa en 1099-B)</li>
                        <li>Cuenta de ahorros para la salud y reembolsos de atención a largo plazo (1099-SA o 1099-LTC)</li>
                        <li>Gastos relacionados con sus inversiones</li>
                        <li>Registro de pagos de impuestos estimados realizados (Formulario 1040–ES)</li>
                        <li>Transacciones que involucran criptomonedas (moneda virtual)</li>
                    </DLPerosnalList>

                    <DLMiniTitle>Otros Ingresos y Pérdidas</DLMiniTitle>
                    <DLPerosnalList>
                        <li>Ingresos de apuestas (W-2G o registros que muestren ingresos, así como registros de gastos)</li>
                        <li>Registros de servicio de jurado</li>
                        <li>Ingresos y gastos de aficiones</li>
                        <li>Premios y galardones</li>
                        <li>Ingresos fiduciarios</li>
                        <li>Ingresos por regalías 1099–MISC</li>
                        <li>Cualquier otro 1099 recibido</li>
                        <li>Registro de pensión alimenticia pagada/recibida con el nombre y SSN del excónyuge</li>
                    </DLPerosnalList>
                </DLPersonalContent>


                <DLPersonalContent>
                    <DLPeronsalIcon>
                        <SwapVerticalCircleIcon/>
                    </DLPeronsalIcon>

                    <DLPerosnalTitle>
                        <span>Deducciones</span>
                        <span>Las deducciones pueden ayudarlo a reducir sus ingresos imponibles, lo que generalmente significa una factura de impuestos reducida.</span>
                    </DLPerosnalTitle>

                    <DLMiniTitle>Propiedad de La Vivienda</DLMiniTitle>
                    <DLPerosnalList>
                        <li>Formularios 1098 u otras declaraciones de intereses hipotecarios</li>
                        <li>Registros de impuestos sobre bienes inmuebles y propiedad personal</li>
                        <li>Recibos de mejoras en el hogar que ahorran energía (por ejemplo, paneles solares, calentador de agua solar)</li>
                        <li>Todos los demás formularios de la serie 1098</li>
                    </DLPerosnalList>

                    <DLMiniTitle> Donaciones de Caridad</DLMiniTitle>
                    <DLPerosnalList>
                        <li>Cantidades en efectivo donadas a lugares de culto, escuelas y otras organizaciones benéficas</li>
                        <li>Registros de donaciones caritativas no monetarias</li>
                        <li>Cantidades de millas conducidas con fines benéficos o médicos</li>
                    </DLPerosnalList>

                    <DLMiniTitle>Gastos Médicos</DLMiniTitle>
                    <DLPerosnalList>
                        <li>Cantidades pagadas por atención médica, seguros y a médicos, dentistas y hospitales</li>
                    </DLPerosnalList>

                    <DLMiniTitle>Seguro de salud</DLMiniTitle>
                    <DLPerosnalList>
                        <li>Formulario 1095-A si se inscribió en un plan de seguro a través del Marketplace (Exchange)</li>
                    </DLPerosnalList>

                    <DLMiniTitle>Gastos de Cuidado de Niños</DLMiniTitle>
                    <DLPerosnalList>
                        <li>Tarifas pagadas a una guardería con licencia o guardería familiar para el cuidado de un bebé o un niño en edad preescolar</li>
                        <li>Cantidades pagadas a una niñera o proveedor que cuide a su hijo menor de 13 años mientras trabaja</li>
                        <li>Gastos pagados a través de una cuenta de gastos flexible para el cuidado de dependientes en el trabajo</li>
                    </DLPerosnalList>

                    <DLMiniTitle>Gastos Educativos</DLMiniTitle>
                    <DLPerosnalList>
                        <li>Formularios 1098-T de instituciones educativas</li>
                        <li>Recibos que detallan los gastos educativos calificados</li>
                        <li>Registros de  becas que recibió</li>
                        <li>Formulario 1098-E si pagó intereses de préstamos estudiantiles</li>
                    </DLPerosnalList>

                    <DLMiniTitle>Gastos de Educador K-12</DLMiniTitle>
                    <DLPerosnalList>
                        <li>Recibos de gastos del aula (para educadores en los grados K-12)</li>
                    </DLPerosnalList>

                    <DLMiniTitle>Impuestos Estatales y Locales</DLMiniTitle>
                    <DLPerosnalList>
                        <li>Monto de los impuestos estatales y locales sobre la renta o las ventas pagados (excepto la retención de salarios)</li>
                        <li>Factura que muestre el monto del impuesto sobre la venta de vehículos pagado y / o el impuesto a la propiedad personal sobre los vehículos</li>
                    </DLPerosnalList>

                    <DLMiniTitle> Jubilación y Otros Ahorros</DLMiniTitle>
                    <DLPerosnalList>
                        <li>Formulario 5498-SA que muestra las contribuciones a la HSA</li>
                        <li>Formulario 5498 que muestra contribuciones IRA</li>
                        <li>Todos los demás formularios de la serie 5498 (5498-QA, 5498-ESA)</li>
                    </DLPerosnalList>

                    <DLMiniTitle>Desastre Declarado Federalmente</DLMiniTitle>
                    <DLPerosnalList>
                        <li>Ciudad / condado donde vivió / trabajó / tuvo propiedad</li>
                        <li>Registros para respaldar pérdidas de propiedad (tasación, costos de limpieza, etc.)</li>
                        <li>Registros de costos de reconstrucción / reparación</li>
                        <li>Reembolsos de seguros / reclamaciones a pagar</li>
                        <li>Información de asistencia de FEMA</li>
                        <li>Consulte el sitio web de FEMA para ver si su condado ha sido declarado área de desastre federal</li>
                    </DLPerosnalList>
                </DLPersonalContent>

                <DLBottom>
                    <DocumentCheckListBanner>
                        <DLBannerContent>
                            <DLBannerTitle>Más Formas de Presentar</DLBannerTitle>
                            <DLBannerBorder/>
                            <DLBannerDesc>
                                <span>
                                    Otras formas de archivo diseñadas para satisfacer sus necesidades.
                                    Queremos facilitarte la preparación de tu declaración, ofreciéndote diferentes opciones de presentación de impuestos
                                    eso nos ayudará a servirle mejor.
                                </span>
                                <span>
                                    Con cada opción de presentación de impuestos, puede estar seguro de que prepararemos sus impuestos de la manera correcta y
                                    obtendrá el mejor reembolso posible.
                                </span>
                            </DLBannerDesc>
                        </DLBannerContent>
                    </DocumentCheckListBanner>

                    <TaxCardContainer>
                        <TaxCard to={'/es/impuestos/declaracion-en-persona'}>
                            <TaxIcon>
                                <StoreIcon  sx={{ fontSize: 80 }}/>
                            </TaxIcon>
                            <TaxCardTitle>
                                Declaración En Persona
                            </TaxCardTitle>
                            <TaxCardDesc>
                                Prepara tus impuestos directamente en nuestras oficinas con nosotros. 
                                Haga cualquier pregunta que tenga y trabaje junto con nuestro experimentado preparador de impuestos.
                            </TaxCardDesc>
                        </TaxCard>

                        <TaxCard to={'/es/impuestos/declaracion-drop-off'}>
                            <TaxIcon>
                                <FolderIcon sx={{ fontSize: 80 }}/>
                            </TaxIcon>
                            <TaxCardTitle>
                                Declaración "Drop-Off"
                            </TaxCardTitle>
                            <TaxCardDesc>
                                Reúna todos sus documentos fiscales y déjelos en nuestra oficina, nosotros nos encargaremos del resto.
                            </TaxCardDesc>
                        </TaxCard>

                        <TaxCard to={'/es/impuestos/declaracion-virtual'}>
                            <TaxIcon>
                                <ImportantDevicesIcon sx={{ fontSize: 80 }}/>
                            </TaxIcon>
                            <TaxCardTitle>
                                Declaración Virtual
                            </TaxCardTitle>
                            <TaxCardDesc>
                                Cargue su información y documentos fiscales a nuestra dirección de correo electrónico segura y al mensajero de WhatsApp. Todo desde la comodidad de su hogar.
                            </TaxCardDesc>
                        </TaxCard>
                    </TaxCardContainer>
                </DLBottom>
            </DLInfoContainer>
            <BannerEs/>
        </DocumentCheckListContainer>
    );
};

export default DocumentCheckListEs;