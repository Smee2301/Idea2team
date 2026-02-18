import React from 'react';

const SearchBar = ({ placeholder = 'Search...', className = '' }) => {
    return (
        <div className={`search-bar ${className}`}>
            <span className="search-bar-icon">🔍</span>
            <input type="text" placeholder={placeholder} />
        </div>
    );
};

export default SearchBar;
