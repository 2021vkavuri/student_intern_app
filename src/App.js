//import logo from './logo.svg';
import { DataStore, SortDirection } from 'aws-amplify';
import './App.css';
import { FormA, PrefRoutesCardCollection, RouteCardCollection } from './ui-components';
import { useState } from 'react';
import { PrefRoutes, Route } from './models';
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
    prefroutes = await DataStore.query(PrefRoutes, (c) => c.and(c => [c.origin.eq(fields.Field0), c.destination.eq(fields.Field1), c.type.eq(fields.Field2.toUpperCase())])  );
    console.log(prefroutes);
    setShowFormA(false);
    setShowPrefRoutesCard(true);
    console.log(fields); 
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