import React, {useEffect} from 'react';
import { useLocation } from "react-router";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import {ITINContainer, ITINMainContainer} from '../styles/itin.styles';

const SuspenseBackdrop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'ITIN Service - Lilly Tax Corp.'
    }, [pathname]);
    return (
        <ITINContainer>
            <ITINMainContainer>
                <div style={{height: '100vh'}}/>
                <div>
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={true}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                </div>
            </ITINMainContainer>
        </ITINContainer>
    )
}

export default SuspenseBackdrop;