import { INIT_CONVERT_VALUE } from "./actions";

export const convertValueReducer = (state = 0, action) => {
    switch (action.type) {
        case INIT_CONVERT_VALUE:
            const convertValue = action.payload;
            return convertValue;
            
        default:
            return state;
    }
}