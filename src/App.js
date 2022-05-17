import React, {lazy, Suspense} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectLanguageChange } from './redux/language.selectors';
import Layout from './hoc/Layout';
import LayoutEs from './hoc/LayoutES';
import SuspenseBackdrop from './hoc/SuspenseBackdrop';


const Hero = lazy(() => import ("./components/hero"));
const HeroEs = lazy(() => import("./components/hero/indexES"));
const TaxSection = lazy(() => import("./components/tax"));
const TaxSectionEs = lazy(() => import("./components/tax/TaxSectionES"));
const ITINSection =  lazy(() => import("./components/itin"));
const ITINSectionEs =  lazy(() => import("./components/itin/indexES"));
const Location = lazy(() => import("./components/location"));
const LocationEs = lazy(() => import("./components/location/indexES"));
const About = lazy(() => import('./components/location/About'));
const AboutEs = lazy(() => import('./components/location/AboutES'));
const InPersonTax = lazy(() => import("./components/tax/InPersonTax"));
const InPersonTaxEs = lazy(() => import("./components/tax/InPersonTaxES"));
const VirtualTax = lazy(() => import("./components/tax/VirtualTax"));
const VirtualTaxEs = lazy(() => import("./components/tax/VirtualTaxES"));
const DropoffTax = lazy(() => import('./components/tax/DropoffTax'));
const DropoffTaxEs = lazy(() => import("./components/tax/DropoffTaxES"));
const DocumentCheckList = lazy(() => import('./components/tax/DocumentCheckList'));
const DocumentCheckListEs = lazy(() => import('./components/tax/DocumentCheckListES'));


const App = ({languageChange}) => {
  // const [isEnglish, setIsEnglish] = useState(true);

  // useEffect(() => {

  // })


  // const handleLanguageChange = (language) => {
  //   if(language === 'english'){
  //     return setIsEnglish(true)
  //   }
  //   if(language === 'spanish'){
  //     return setIsEnglish(false)
  //   }
  // }
    return (
      <div className="App">
        {languageChange ? 
        <Layout>
            <Switch>
            <Suspense fallback={<SuspenseBackdrop/>}>
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
            </Suspense>
          </Switch>
        </Layout>
        :
        <LayoutEs>
          <Switch>
            <Suspense fallback={<SuspenseBackdrop/>}>
              <Route
                exact
                path="/"
                render={() => <HeroEs/>}
              />
              <Route
                exact
                path="/es/impuestos"
                render={() => <TaxSectionEs/>}
              />
              <Route
                exact
                path="/es/impuestos/declaración-en-persona"
                render={() => <InPersonTaxEs/>}
              />
              <Route
                exact
                path="/es/impuestos/declaración-virtual"
                render={() => <VirtualTaxEs/>}
              />
              <Route
                exact
                path="/es/impuestos/declaración-drop-off"
                render={() => <DropoffTaxEs/>}
              />
              <Route
                exact
                path="/es/impuestos/lista-de-documentos"
                render={() => <DocumentCheckListEs/>}
              />
              <Route
                exact
                path="/es/itin"
                render={() => <ITINSectionEs/>}
              />
              <Route
                exact
                path="/es/localización"
                render={() => <LocationEs/>}
              />
              <Route
                exact
                path="/es/localización/acerca"
                render={() => <AboutEs/>}
              />
              <Route
                exact
                path="/*"
                render={() => <Redirect to='/'/>}
              />
            </Suspense>
          </Switch>
        </LayoutEs>
        }
      </div>
    );
};

const mapStateToProps = createStructuredSelector({
    languageChange: selectLanguageChange
})

export default connect(mapStateToProps)(App);
