import React from 'react';
import AddBook from './AddBook';
import BookList from './BookList';
import Filter from './Filter';

const Main = () => {
    return (
        <main class="py-12 2xl:px-6">
            <div class="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
                <div class="order-2 xl:-order-1">
                   <Filter/>
                    <div class="lws-bookContainer">
                      <BookList/>
                    </div>
                </div>
                <AddBook/>
            </div>
        </main>
    );
};

export default Main;