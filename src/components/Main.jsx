import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchBooks from '../redux/books/thunk/fetchBooks';
import AddBook from './AddBook';
import BookList from './BookList';
import Filter from './Filter';

const Main = () => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books);
    const filters = useSelector((state) => state.filter);

    useEffect(() => {
        dispatch(fetchBooks);
    }, [dispatch]);


    const filterByStatus = (book) => {
        const { status } = filters;
        switch (status) {
          case 'All':
            return true;
    
          case 'Featured':
            return book.featured;
    
          default:
            return true;
        }
      };

    return (
        <main className="py-12 2xl:px-6">
            <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
                <div className="order-2 xl:-order-1">
                    <Filter />
                    <div className="lws-bookContainer">
                        {
                            books
                            .filter(filterByStatus)
                            .map(dt=><BookList dt={dt} key={dt.id}/>)
                        }
                        
                    </div>
                </div>
                <AddBook />
            </div>
        </main>
    );
};

export default Main;