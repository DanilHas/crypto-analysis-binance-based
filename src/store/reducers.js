import { combineReducers } from "redux";
import { convertValueReducer } from "./convertValue-reducer";
import { cryptoReducer } from "./crypto-reducer";
import { cryptosPriceReducer } from "./cryptosPrice-reducer";
import { currencyReducer } from "./currency-reducer";
import { currencyClickToEnterReducer } from "./currencyClickToEnter-reducer";
import { secondCurrencyClickToEnterReducer } from "./secondCurrencyClickToEnterReducer";
import { secondCurrencyReducer } from "./secondCurrencyReducer";
import { sendNumberValueReducer } from "./sendNumberValue-reducer";

export const rootReducer = combineReducers({
    cryptos: cryptoReducer,
    currency: currencyReducer,
    currencyClickToEnter: currencyClickToEnterReducer,
    secondCurrency: secondCurrencyReducer,
    secondCurrencyClickToEnter: secondCurrencyClickToEnterReducer,
    sendNumberValue: sendNumberValueReducer,
    cryptosPrice: cryptosPriceReducer,
    convertValue: convertValueReducer,
})