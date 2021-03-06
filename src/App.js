import React from "react";
import { useEffect } from "react";
import VerticalTabs from "./Components/VerticalTabs";
import { getCryptos } from "./store/getCryptos-thunk";
import { useDispatch } from "react-redux";
import { getCryptosPrice } from "./store/getCryptosPrice-thunk";



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCryptos());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCryptosPrice());
  }, [dispatch]);

  return (
    <div className="App">
      <header>
        <h4>Crypto Analysis App</h4>
      </header>
      <VerticalTabs />
    </div>
  );
}

export default App;
