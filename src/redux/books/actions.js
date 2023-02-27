import {ADD_BOOKS,LOADED_BOOKS,DELETE_BOOKS,UPDATE_BOOK} from "./actionTypes";

export const loaded = (books) => {
    return {
        type: LOADED_BOOKS,
        payload: books,
    };
};

export const added = (books) => {
    return {
        type: ADD_BOOKS,
        payload: books,
    };
};


export const updateBooks = (bookId, books) => {
    console.log(bookId, books)
    return {
        type: UPDATE_BOOK,
        payload: {
            books,
            bookId,
        },
    };
};

export const deleteBooks = (bookId) => {
    return {
        type: DELETE_BOOKS,
        payload: bookId,
    };
};
