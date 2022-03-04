import { INIT_CRYPTOS } from "./actions";

export const getCryptos = () => {
  return async (dispatch) => {
    try {
      const apiUrl = "https://api.binance.com/api/v3/exchangeInfo";
      const response = await fetch(apiUrl);
      const cryptos = await response.json();
      dispatch({
        type: INIT_CRYPTOS,
        payload: cryptos.symbols.map((item) => item.symbol),
      });
    } catch (error) {
      console.log("Error:", error);
    }
  };
};
