import { updateBooks } from "../actions";

const updateBook = (bookId, books) => {
    console.log(bookId,books);
    return async (dispatch) => {
        const response = await fetch(`http://localhost:9000/books/${bookId}`, {
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