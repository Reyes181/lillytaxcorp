import React from 'react';
import { BackdropContainer } from '../../styles/sideDrawer.styles';

const BackDrop = (props) => (
    <BackdropContainer onClick={props.click}/>
)

export default BackDrop;