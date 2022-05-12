import React, {useState} from 'react';
import HeaderEs from '../components/header_footer/HeaderES';
import FooterEs from '../components/header_footer/FooterES';
import BackDrop from '../components/header_footer/Backdrop';
import SideDrawerEs from '../components/header_footer/SideDrawerES';

const LayoutEs = (props) => {
    const [sideOpen, setSideOpen] = useState(false);
    // const prevRef = useRef();

    const drawerToggleHandler = () => {
        setSideOpen(!sideOpen)
    }

    const backdropClickHandler = () => {
        setSideOpen(false)
    }

    let backDrop;

    if(sideOpen){
        backDrop = <BackDrop click={backdropClickHandler}/>
    }
    return (
        <div className='Layout'>
            <HeaderEs drawerToggleHandler={drawerToggleHandler}/>
            <SideDrawerEs show={sideOpen} click={backdropClickHandler}/>
            {backDrop}
            {props.children}
            <FooterEs/>
        </div>
    )
}

export default LayoutEs;