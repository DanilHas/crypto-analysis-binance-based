import { INIT_CRYPTOS } from "./actions"

export const cryptoReducer = (state = [], action) => {
    switch (action.type) {
        case INIT_CRYPTOS: 
            const cryptos = action.payload;
            return cryptos;
        
        default:
            return state
    }
}