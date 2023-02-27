import { SEARCH, STATUS,UPDATE } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STATUS:
            return {
                ...state,
                status:action.payload,
            };

        case SEARCH:
            return {
                ...state,
                search:action.payload,
            };
        case UPDATE:
            return {
                ...state,
                update:action.payload,
            };
            
        default:
            return state;
    }
};

export default reducer;
