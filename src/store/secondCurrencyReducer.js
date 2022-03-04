import { INIT_SECOND_CURRENCY } from "./actions";

export const secondCurrencyReducer = (state = "", action) => {
    switch (action.type) {
      case INIT_SECOND_CURRENCY:
        const secondCurrency = action.payload;
        return secondCurrency;
  
      default:
        return state;
    }
  };