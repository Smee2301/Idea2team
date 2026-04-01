import React from 'react';

const SearchBar = ({ placeholder = 'Search...', className = '', value, onChange, ...rest }) => {
    return (
        <div className={`search-bar ${className}`} {...rest}>
            <span className="search-bar-icon">🔍</span>
            <input 
                type="text" 
                placeholder={placeholder} 
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default SearchBar;
