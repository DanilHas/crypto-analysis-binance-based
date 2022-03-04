import { INIT_CURRENCY_CLICK_TO_ENTER } from "./actions"

export const currencyClickToEnterReducer = (state = null, action) => {
    switch (action.type) {
        case INIT_CURRENCY_CLICK_TO_ENTER:
            const currencyClickToEnter = action.payload;
            return currencyClickToEnter;
        default:
            return state
    }
}