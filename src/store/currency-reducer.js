import { INIT_CURRENT_CURRENCY } from "./actions";

export const currencyReducer = (state = "", action) => {
  switch (action.type) {
    case INIT_CURRENT_CURRENCY:
      const currentCurrency = action.payload;
      return currentCurrency;

    default:
      return state;
  }
};
