import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Layout from './hoc/Layout';
import Hero from "./components/hero";
import TaxSection from "./components/tax";
import ITINSection from "./components/itin";
import Location from "./components/location";
import About from './components/location/About';
import Services from './components/location/Services';
import InPersonTax from "./components/tax/InPersonTax";
import VirtualTax from "./components/tax/VirtualTax";
import DropoffTax from './components/tax/DropoffTax';
import Immigration from './components/immigration';
import DocumentCheckList from './components/tax/DocumentCheckList';

const App = () => {
  
  return (
    <div className="App">
      <Layout>
        <Switch>
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
            path="/immigration"
            render={() => <Immigration/>}
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
            path="/location/services"
            render={() => <Services/>}
          />
          <Route
            exact
            path="/*"
            render={() => <Hero/>}
          />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
