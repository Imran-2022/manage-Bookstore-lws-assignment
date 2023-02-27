import { SEARCH, STATUS } from "./actionTypes";

export const filterBySearch = (searchText) => {
    return {
        type: SEARCH,
        payload: searchText,
    };
};

export const statusChanged = (status) => {
    console.log(status);
    return {
        type: STATUS,
        payload: status,
    };
};
