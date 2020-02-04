import React from 'react';
import './App.css';
import TariffsList from './componets/TariffsList/TariffsList';
import Tariff from './componets/Tariffs/Tariff'
import Like from './componets/Liker/Like';
import Test from './componets/Test';
import Purchase from './componets/Purchase';

function App() {
  return (
    <div className="App">
      <TariffsList />
      <Tariff />
      {/* <Like />
      <Test />
      <Purchase /> */}
    </div>
  );
}

export default App;
