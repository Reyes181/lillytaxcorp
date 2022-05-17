import React from 'react';
import {FaqContainer, FaqHeader, FaqContent, FaqBox, FaqTitle, FaqDesc} from '../../styles/itin.styles';

const FAQEs = () => {
    return (
        <FaqContainer>
            <hr/>
            <FaqHeader>Preguntas Frecuentes Sobre El ITIN</FaqHeader>
            <FaqContent>
                <FaqBox>
                    <FaqTitle>¿Quién necesita un ITIN?</FaqTitle>
                    <FaqDesc>
                        Los contribuyentes que no son elegibles para un Número de Seguro Social pueden solicitar un
                        ITIN para fines de declaración e informes de impuestos.
                    </FaqDesc>
                </FaqBox>

                <FaqBox>
                    <FaqTitle>¿Cuánto tiempo lleva obtener un ITIN?</FaqTitle>
                    <FaqDesc>
                        Por lo general, toma alrededor de siete semanas si califica para un ITIN y su solicitud está completa
                        , pero el procesamiento puede llevar más tiempo.
                    </FaqDesc>
                </FaqBox>

                <FaqBox>
                    <FaqTitle>¿Debo enviar mis documentos originales al solicitar un ITIN?</FaqTitle>
                    <FaqDesc>
                        No, como Agente Tramitador Certificado (CAA), adjuntaremos un Certificado de Precisión (COA)
                        con una copia de sus documentos originales para que no se preocupe por perder sus documentos en el correo.
                    </FaqDesc>
                </FaqBox>

                <FaqBox>
                    <FaqTitle>¿Puedo solicitar un ITIN en línea?</FaqTitle>
                    <FaqDesc>
                        No, para solicitar un ITIN deberá enviar por correo su declaración de impuestos con el FORMULARIO W-7 en papel.
                    </FaqDesc>
                </FaqBox>
            </FaqContent>
        </FaqContainer>
    )
};

export default FAQEs;