import { INIT_SECOND_CURRENCY_CLICK_TO_ENTER } from "./actions";

export const secondCurrencyClickToEnterReducer = (state = null, action) => {
    switch (action.type) {
        case INIT_SECOND_CURRENCY_CLICK_TO_ENTER:
            const secondCurrencyClickToEnter = action.payload;
            return secondCurrencyClickToEnter;
        default:
            return state
    }
}