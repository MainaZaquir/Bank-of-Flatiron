import React from 'react';

function NavBar({ setSearchTerm }) {
    const handleSearch = (event) => {

        setSearchTerm(event.target.value);
    };

    return (
        <nav>
            <input type="text" placeholder='Searching...' onChange={handleSearch} />
        </nav>
    );
}

export default NavBar;