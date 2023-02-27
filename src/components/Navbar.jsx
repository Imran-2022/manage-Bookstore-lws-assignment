import React from 'react';
import logo from "../assets/logo.svg"
import Search from './Search';

const Navbar = () => {
    return (
        <div>
            <nav className="py-4 2xl:px-6">
                <div className="container flex items-center justify-between">
                    <img src={logo} width="150px" className="object-contain" />

                    <ul className="hidden md:flex items-center space-x-6">
                        <li className="font-semibold cursor-pointer">Book Store</li>
                        <li className="cursor-pointer">Wishlist</li>
                        <li className="cursor-pointer">My Collection</li>
                    </ul>

                    <Search />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;