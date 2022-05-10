import React, {lazy, Suspense, useState} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Layout from './hoc/Layout';
import SuspenseBackdrop from './hoc/SuspenseBackdrop';


const Hero = lazy(() => import ("./components/hero"));
const TaxSection = lazy(() => import("./components/tax"));
const ITINSection =  lazy(() => import("./components/itin"));
const Location = lazy(() => import("./components/location"));
const About = lazy(() => import('./components/location/About'));
const InPersonTax = lazy(() => import("./components/tax/InPersonTax"));
const VirtualTax = lazy(() => import("./components/tax/VirtualTax"));
const DropoffTax = lazy(() => import('./components/tax/DropoffTax'));
const DocumentCheckList = lazy(() => import('./components/tax/DocumentCheckList'));



const App = () => {
  const [isEnglish, setIsEnglish] = useState(true);


  const handleLanguageChange = (language) => {
    if(language === 'english'){
      return setIsEnglish(true)
    }
    if(language === 'spanish'){
      return setIsEnglish(false)
    }
  }
  
    return (
      <div className="App">
        <Layout  handleLanguageChange={handleLanguageChange}>
            <Switch>
            <Suspense fallback={<SuspenseBackdrop/>}>
              {isEnglish ? 
                  <>
                    <Route
                      exact
                      path="/"
                      render={() => <Hero/>}
                    />
                    <Route
                      exact
                      path="/taxfiling"
                      render={() => <TaxSection/>}
                    />
                    <Route
                      exact
                      path="/taxfiling/in-person-preparation"
                      render={() => <InPersonTax/>}
                    />
                    <Route
                      exact
                      path="/taxfiling/virtual-preparation"
                      render={() => <VirtualTax/>}
                    />
                    <Route
                      exact
                      path="/taxfiling/dropoff-preparation"
                      render={() => <DropoffTax/>}
                    />
                    <Route
                      exact
                      path="/taxfiling/documentchecklist"
                      render={() => <DocumentCheckList/>}
                    />
                    <Route
                      exact
                      path="/itin"
                      render={() => <ITINSection/>}
                    />
                    <Route
                      exact
                      path="/location"
                      render={() => <Location/>}
                    />
                    <Route
                      exact
                      path="/location/about"
                      render={() => <About/>}
                    />
                    <Route
                      exact
                      path="/*"
                      render={() => <Redirect to='/'/>}
                    />
                  </>
                :
                  <>
                    <Route
                      exact
                      path="/"
                      render={() => <About/>}
                    />
                    <Route
                      exact
                      path="/taxfiling"
                      render={() => <TaxSection/>}
                    />
                    <Route
                      exact
                      path="/taxfiling/in-person-preparation"
                      render={() => <InPersonTax/>}
                    />
                    <Route
                      exact
                      path="/taxfiling/virtual-preparation"
                      render={() => <VirtualTax/>}
                    />
                    <Route
                      exact
                      path="/taxfiling/dropoff-preparation"
                      render={() => <DropoffTax/>}
                    />
                    <Route
                      exact
                      path="/taxfiling/documentchecklist"
                      render={() => <DocumentCheckList/>}
                    />
                    <Route
                      exact
                      path="/itin"
                      render={() => <ITINSection/>}
                    />
                    <Route
                      exact
                      path="/location"
                      render={() => <Location/>}
                    />
                    <Route
                      exact
                      path="/location/about"
                      render={() => <About/>}
                    />
                    <Route
                      exact
                      path="/*"
                      render={() => <Redirect to='/'/>}
                    />
                  </>
              }
              
              </Suspense>
            </Switch>
        </Layout>
      </div>
    );
}

export default App;
