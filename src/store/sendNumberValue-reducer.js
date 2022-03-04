import { INIT_SEND_NUMBER_VALUE } from "./actions";

export const sendNumberValueReducer = (state = '', action) => {
    switch(action.type) {
        case INIT_SEND_NUMBER_VALUE:
            const numberValue = action.payload;
            return numberValue;

        default:
            return state;
    }
}