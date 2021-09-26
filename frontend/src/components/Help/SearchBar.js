import React from 'react';

import searchIcon from "../../../public/Icons/search.svg";

const SearchBar = (props) => {
    console.log(props)
    return (
        <div className="my-8 flex items-center border rounded-sm border-gray-200 py-3 px-5 w-11/12">
            
        <img src={searchIcon} className="w-6" />
            <input onChange={(e) => props.onSearched(e.target.value)} className="appearance-none bg-transparent border-none w-full ml-4 focus:outline-none text-sm" type='text' placeholder="Search the help center"/>
        </div>
    )
}

export default SearchBar;