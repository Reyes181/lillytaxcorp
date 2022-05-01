import React, {useState} from 'react';
import Header from '../components/header_footer/Header';
import Footer from '../components/header_footer/Footer';
import BackDrop from '../components/header_footer/Backdrop';
import SideDrawer from '../components/header_footer/SideDrawer';

const Layout = (props) => {
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
            <Header drawerToggleHandler={drawerToggleHandler}/>
            <SideDrawer show={sideOpen} click={backdropClickHandler}/>
            {backDrop}
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout;