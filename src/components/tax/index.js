import React from 'react';
import TaxBanner from './TaxBanner';
import TaxMain from './TaxMain';
import Banner from '../hero/Banner';
import TaxLowBanner from './TaxLowBanner';

const TaxSection = () => {
    return (
        <div>
            <TaxBanner/>
            <TaxMain/>
            <TaxLowBanner/>
            <Banner/>
        </div>
    )
};

export default TaxSection;