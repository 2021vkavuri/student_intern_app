//import logo from './logo.svg';
import { DataStore, SortDirection } from 'aws-amplify';
import './App.css';
import { BackButton, FormA, PrefRoutesCardCollection, RouteCardCollection } from './ui-components';
import { useState } from 'react';
import { PrefRoutes, Route, NameToCode } from './models';
var routes;
var prefroutes;
var origin;
var destination;

function App() {
  const [showFormA, setShowFormA] = useState(true);
  const [showPrefRoutesCard, setShowPrefRoutesCard] = useState(false);
  const [showRouteCardCollection, setShowRouteCardCollection] = useState(false);
  const [showInvalidInput, setShowInvalidInput] = useState(false);
  const [showBackButton, setShowBackButton] = useState(false)
  
  

  async function displayRoute(id) {
    setShowRouteCardCollection(false);
    routes = await DataStore.query(Route, (c) => c.prefroutesID.eq(id), {sort: (s) => s.createdAt(SortDirection.ASCENDING)});
    setShowRouteCardCollection(true);
    /*var route = async() => {
                            let i = await DataStore.query(Route, (c) => c.prefroutesID.eq(id), {sort: (s) => s.createdAt(SortDirection.ASCENDING)});
                            console.log(i);
                            return i;
                           };
    console.log(route());
    return route; */
    //document.write("<script> import { FormA, PrefRoutesCardCollection, RouteCardCollection } from './ui-components'; </script> <RouteCardCollection/>");
  }

  async function displayPrefRoutes(fields) {
    try {
      var ori = await fetch("https://maps.googleapis.com/maps/api/geocode/json?address="+ fields.Field0.replace(" ", "+") +"&key=AIzaSyA8jXrbPQUV4atOUd_50C6aHxKVts1ssUA");
      ori = await ori.json();
      origin = ori.results[0].address_components[0].long_name;
      ori = await DataStore.query(NameToCode, (c) => c.placeId.eq(ori.results[0].place_id));
      ori = ori[0].code;
    
      var dest = await fetch("https://maps.googleapis.com/maps/api/geocode/json?address="+ fields.Field1.replace(" ", "+") +"&key=AIzaSyA8jXrbPQUV4atOUd_50C6aHxKVts1ssUA");
      dest = await dest.json();
      destination = dest.results[0].address_components[0].long_name;
      dest = await DataStore.query(NameToCode, (c) => c.placeId.eq(dest.results[0].place_id));
      dest = dest[0].code;
    } catch (error) {
      setShowInvalidInput(true);
      return;
    }
    prefroutes = await DataStore.query(PrefRoutes, (c) => c.and(c => [c.origin.eq(ori), c.destination.eq(dest), c.type.eq(fields.Field2.toUpperCase())])  );
    setShowFormA(false);
    setShowPrefRoutesCard(true);
    setShowInvalidInput(false);
    setShowBackButton(true);
  }

  function goBack() {
    setShowPrefRoutesCard(false);
    setShowFormA(true);
    setShowRouteCardCollection(false);
    setShowInvalidInput(false);
    setShowBackButton(false);
  }

  return (
    <>
      <div style={{ display : showBackButton === false && 'none' }}>
        <BackButton paddingTop={ 50 } paddingLeft={ 50 } onClick={() => goBack() } />
      </div>
      <div className="App" style={{ display : showInvalidInput === false && 'none' }}>
        Please enter a valid input
      </div>
      <div className="App" style={{ display : showFormA === false && 'none' }}>
        <FormA 
          onSubmit={fields => { displayPrefRoutes(fields) }}
        />
      </div>
      <div className="App" style={{ display : showPrefRoutesCard === false && 'none' }}>
        <PrefRoutesCardCollection items={prefroutes} overrideItems={({ item, index }) => ({
          overrides: {
            Button: { onClick: () =>  {displayRoute(item.id)}}
          }})} />
      </div>
      <div className="App" style={{ display : showRouteCardCollection === false && 'none' }}>
        Route from {origin} to {destination}
        <RouteCardCollection items={routes}/>
      </div>
    </>
    
  
  );
}

export default App;
