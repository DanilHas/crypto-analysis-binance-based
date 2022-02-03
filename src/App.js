import React from 'react';
import { useEffect, useState } from 'react';
import VirtualizedList from './Components/List';
import ComboBox from './Components/ComboBox';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout'; 
import CurrentCrypto from './Components/CurrentCrypto';

function App() {
  const [cryptos, setCryptos] = useState({
    isLoaded: false,
    symbols: [],
    error: null,
  });
  const [coin, setCoin] = useState('');
  const currentCoin = (e) => {
    setCoin(e.currentTarget.innerHTML)
  }

  useEffect(() => {
    const apiUrl = "https://api.binance.com/api/v3/exchangeInfo";
    fetch (apiUrl)
    .then((res) => res.json())
    .then ((result) => {
      setCryptos({ isLoaded: true, symbols: result.symbols.map((item) => item.symbol)});
    },
    (error) => {
      setCryptos({ isLoaded: true, error})
    })
  }, [setCryptos]);
  return (
    <BrowserRouter>
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<ComboBox cryptos = {cryptos.symbols} currentCoin={currentCoin} />} />
        <Route path='chosen' element={<CurrentCrypto coin={coin} />} />
      </Route>
    </Routes>
    </>
    </BrowserRouter>
  )
}

export default App;
