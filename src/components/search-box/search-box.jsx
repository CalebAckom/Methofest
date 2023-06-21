import React from "react";
import './search-box.css'
import searchIcon from '../../assets/search-icon.svg';

export const SearchBox = ({ placeholder, handleChange }) => (
    <div className="search-bar">
        <img src={searchIcon} alt="" className="search-icon"/>
        <input
            className="search-input"
            type='search'
            placeholder={placeholder}
            onChange={handleChange}
        />
    </div>
)