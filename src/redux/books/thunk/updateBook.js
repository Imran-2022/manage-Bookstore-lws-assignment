import { updateBooks } from "../actions";

const updateBook = (bookId, books) => {
    return async (dispatch) => {
        const response = await fetch(`https://todo-app-json-serverr.herokuapp.com/todos/${bookId}`, {
            method: "PATCH",
            body: JSON.stringify(books),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const book = await response.json();
        dispatch(updateBooks(book.id, book));
    };
};

export default updateBook;