import React from 'react';
import './App.css';
import TariffsList from './componets/TariffsList/TariffsList';
import Tariff from './componets/Tariffs/Tariff'

function App() {
  return (
    <div className="App">
      <TariffsList />
      <Tariff />
     
    </div>
  );
}

export default App;
