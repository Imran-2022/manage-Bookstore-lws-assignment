import { SEARCH, STATUS } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STATUS:
            return state;

        case SEARCH:
            return state;
            
        default:
            return state;
    }
};

export default reducer;
