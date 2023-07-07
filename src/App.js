//import logo from './logo.svg';
import { DataStore } from 'aws-amplify';
import './App.css';
import { FormA, PrefRoutesCardCollection, RouteCardCollection } from './ui-components';
import { useState } from 'react';
import { PrefRoutes, Route } from './models';

function App() {
  const [showFormA, setShowFormA] = useState(true);
  const [showPrefRoutesCard, setShowPrefRoutesCard] = useState(false);
  const [showRouteCardCollection, setShowRouteCardCollection] = useState(false);
  var routeId;
  //console.log(DataStore.query(Route));
  function submitFormA() {
    setShowFormA(false);
    setShowPrefRoutesCard(true);
  }

  function displayRoute(id) {
    setShowRouteCardCollection(true);
    routeId = id;
    console.log(routeId);
  }
  return (
    <>
      <div className="App" style={{ display : showFormA === false && 'none' }}>
        <FormA overrides={{
          SubmitButton: { onClick: () => submitFormA() }
        }}/>
      </div>
      <div className="App" style={{ display : showPrefRoutesCard === false && 'none' }}>
        <PrefRoutesCardCollection overrideItems={({ item, index }) => ({
          overrides: {
            Button: { onClick: () =>  displayRoute(item.Routes) }
          },
          
        })}/>
      </div>
      <div className="App" style={{ display : showRouteCardCollection === false && 'none' }}>
        <RouteCardCollection items={routeId}/>
      </div>
    </>
    
  
  );
}

export default App;
