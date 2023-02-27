import { SEARCH, STATUS,UPDATE } from "./actionTypes";

export const filterBySearch = (searchText) => {
    return {
        type: SEARCH,
        payload: searchText,
    };
};

export const statusChanged = (status) => {
    return {
        type: STATUS,
        payload: status,
    };
};
export const updateBook = (status) => {
    return {
        type: UPDATE,
        payload: status,
    };
};
