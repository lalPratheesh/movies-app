import React from 'react';
import SearchForm from '../home/SearchForm';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand">Romantic Comedy</a>
                <SearchForm />
            </nav>
        </div>
    )
}

export default Navbar;
