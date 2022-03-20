import { INIT_CRYPTOS_PRICE } from "./actions";

export const cryptosPriceReducer = (state = [], action) => {
    switch(action.type){
        case INIT_CRYPTOS_PRICE:
            const cryptosPrice = action.payload;
            return cryptosPrice;

        default:
            return state;
    }
}