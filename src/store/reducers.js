import { combineReducers } from "redux";
import { cryptoReducer } from "./crypto-reducer";
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
})