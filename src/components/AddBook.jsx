import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import addBooks from '../redux/books/thunk/addBooks';
import updateBook from '../redux/books/thunk/updateBook';
import { updateBooklist } from '../redux/filters/actions';

const AddBook = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");
    const [featured, setFeatured] = useState(false);
    const [editMode, setEditMode] = useState(false);

    const { update } = useSelector(state => state.filter)

    // listen for edit mode active
    useEffect(() => {
        const { id, name, author, thumbnail, price, rating, featured } = update || {};
        if (id) {
            setEditMode(true);
            setName(name);
            setAuthor(author);
            setThumbnail(thumbnail)
            setPrice(price)
            setRating(rating)
            setFeatured(featured)
        } else {
            setEditMode(false);
            reset();
        }
    }, [update]);

    const reset = () => {
        setName("");
        setAuthor("");
        setThumbnail("")
        setPrice("")
        setRating("")
        setFeatured(false)
    };

    const handleCreate = (e) => {
        e.preventDefault();
        dispatch(addBooks({ name, author, thumbnail, price, rating, featured }))
        reset();
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateBook(update?.id, { name, author, thumbnail, price, rating, featured }))
        setEditMode(false);
        reset();
        dispatch(updateBooklist({}))
    };

    const cancelEditMode = () => {
        reset();
        setEditMode(false);
        dispatch(updateBooklist({}))
    };

    return (
        <div>
            <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
                <h4 className="mb-8 text-xl font-bold text-center"> {editMode ? "Update the book" : "Add New Book"}</h4>
                <form className="book-form" onSubmit={editMode ? handleUpdate : handleCreate}>
                    <div className="space-y-2">
                        <label htmlFor="name">Book Name</label>
                        <input required className="text-input" type="text" id="input-Bookname" name="name"  value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="category">Author</label>
                        <input required className="text-input" type="text" id="input-Bookauthor" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="image">Image Url</label>
                        <input required className="text-input" type="text" id="input-Bookthumbnail" name="thumbnail" value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} />
                    </div>

                    <div className="grid grid-cols-2 gap-8 pb-4">
                        <div className="space-y-2">
                            <label htmlFor="price">Price</label>
                            <input required className="text-input" type="number" id="input-Bookprice" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="quantity">Rating</label>
                            <input required className="text-input" type="number" id="input-Bookrating" name="rating" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} />
                        </div>
                    </div>

                    <div className="flex items-center">
                        <input id="input-Bookfeatured" type="checkbox" name="featured" className="w-4 h-4" checked={featured} onChange={(e) => setFeatured(e.target.checked)} />
                        <label htmlFor="featured" className="ml-2 text-sm"> This is a featured book </label>
                    </div>

                    <button type="submit" className="submit" id="submit">{editMode ? "Update Book" : "Add Book"}</button>

                    {editMode && (
                        <button className="btn cancel_edit submit" onClick={cancelEditMode}>
                            Cancel Edit
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
};

export default AddBook;