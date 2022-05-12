import React, {lazy, Suspense} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectLanguageChange } from './redux/language.selectors';
import Layout from './hoc/Layout';
import LayoutEs from './hoc/LayoutES';
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
        </LayoutEs>
        }
      </div>
    );
};

const mapStateToProps = createStructuredSelector({
    languageChange: selectLanguageChange
})

export default connect(mapStateToProps)(App);
