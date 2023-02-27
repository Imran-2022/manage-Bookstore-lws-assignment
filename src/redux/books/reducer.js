import {ADD_BOOKS,LOADED_BOOKS,DELETE_BOOKS,UPDATE_BOOK} from "./actionTypes";

import initialState from "./initialState";

const nextBookId = (books) => {
    const maxId = books.reduce((maxId, book) => Math.max(book.id, maxId), -1);
    return maxId + 1;
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case LOADED_BOOKS:
            return action.payload;

        case ADD_BOOKS:
            return [
                ...state,
                {
                    id: nextBookId(state),
                    ...action.payload
                },
            ];

        case UPDATE_BOOK:
            return state.map((todo) => {
                if (todo.id !== action.payload.todoId) {
                    return todo;
                }
                return {
                    ...todo,
                    text: action.payload.todo,
                };
            });

        case DELETE_BOOKS:
            return state.filter((todo) => todo.id !== action.payload);

        default:
            return state;
    }
};

export default reducer;
