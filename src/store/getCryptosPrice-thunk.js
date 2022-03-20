import { INIT_CRYPTOS_PRICE } from "./actions";

export const getCryptosPrice = () => {
    return async (dispatch) => {
        try {
            const apiUrl = "https://api.binance.com/api/v3/ticker/price";
            const response = await fetch(apiUrl);
            const cryptosPrice = await response.json();
            dispatch({
                type: INIT_CRYPTOS_PRICE,
                payload: cryptosPrice,
            });
        } catch (error) {
            console.log('Error:', error);
        }
    };
};