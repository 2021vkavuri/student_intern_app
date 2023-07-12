//import logo from './logo.svg';
import { DataStore, SortDirection } from 'aws-amplify';
import './App.css';
import { FormA, PrefRoutesCardCollection, RouteCardCollection } from './ui-components';
import { useState } from 'react';
import { PrefRoutes, Route, NameToCode } from './models';
var routes;
var prefroutes;

function App() {
  const [showFormA, setShowFormA] = useState(true);
  const [showPrefRoutesCard, setShowPrefRoutesCard] = useState(false);
  const [showRouteCardCollection, setShowRouteCardCollection] = useState(false);
  
  

  async function displayRoute(id) {
    setShowRouteCardCollection(false);
    routes = await DataStore.query(Route, (c) => c.prefroutesID.eq(id), {sort: (s) => s.createdAt(SortDirection.ASCENDING)});
    setShowRouteCardCollection(true);
    console.log(routes);
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
    var ori = await fetch("https://maps.googleapis.com/maps/api/geocode/json?address="+ fields.Field0.replace(" ", "+") +"&key=AIzaSyA8jXrbPQUV4atOUd_50C6aHxKVts1ssUA");
    ori = await ori.json();
    ori = await DataStore.query(NameToCode, (c) => c.placeId.eq(ori.results[0].place_id));
    ori = ori[0].code;
    
    var dest = await fetch("https://maps.googleapis.com/maps/api/geocode/json?address="+ fields.Field1.replace(" ", "+") +"&key=AIzaSyA8jXrbPQUV4atOUd_50C6aHxKVts1ssUA");
    dest = await dest.json();
    dest = await DataStore.query(NameToCode, (c) => c.placeId.eq(dest.results[0].place_id));
    dest = dest[0].code;

    prefroutes = await DataStore.query(PrefRoutes, (c) => c.and(c => [c.origin.eq(ori), c.destination.eq(dest), c.type.eq(fields.Field2.toUpperCase())])  );
    setShowFormA(false);
    setShowPrefRoutesCard(true);
  }
  return (
    <>
      <div className="App" style={{ display : showFormA === false && 'none' }}>
        <FormA 
          onSubmit={fields => { displayPrefRoutes(fields) }}
        />
      </div>
      <div className="App" style={{ display : showPrefRoutesCard === false && 'none' }}>
        <PrefRoutesCardCollection items={prefroutes} overrideItems={({ item, index }) => ({
          overrides: {
            Button: { onClick: () =>  {displayRoute(item.id)}}
          },
          
        })} />
      </div>
      <div className="App" style={{ display : showRouteCardCollection === false && 'none' }}>
        <RouteCardCollection items={routes}/>
      </div>
    </>
    
  
  );
}

export default App;
