import { SEARCH, STATUS } from "./actionTypes";

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
