import React, { useState } from "react";
import Header from './Header'

import SearchBar from './SearchBar';
import Accordion from './Accordion';

import {popData, moData} from './accordionData';


const Help = () => {


    let joinData = popData.concat(moData)
    const [searchResult, setSearchResult] = useState([])

    const searchData = (input) => {
        if(input.length > 0) {
        const _searchResult = joinData.filter((el) => {
            const queryString = el.title + ' ' + el.answer
            return queryString.toLowerCase().includes(input.toLowerCase())
        })

        setSearchResult(_searchResult)
    } else {
        setSearchResult([])
    }
    }

    return (
        <div className="w-full">
            {/* <Header /> */}
        <div className="w-full p-6 pr-10">

            <div className="flex flex-col justify-between">
                <h2 className="font-semibold text-2xl">Help</h2>
                <SearchBar onSearched={searchData} />

                {/* Fetching the questions and answers from ./accordionData.js as faqs are not supplied by backend */}
                {searchResult.length > 0 && <div className="my-4">
                    <p className="text-lg font-semibold">Search Results</p>
                    {
                        searchResult.map(data => (
                            <Accordion data={data} key={data.id}/>
                        ))
                    }
                </div>}

                { searchResult.length == 0 && 
                    <> 
                    <div className="my-4">
                    <p className="text-lg font-semibold">Popular Searches</p>
                    {
                        popData.map(data => (
                            <Accordion data={data} key={data.id}/>
                        ))
                    }
                </div>
                <div className="my-4">
                    <p className="text-lg font-semibold">More Help</p>
                    {
                        moData.map(data => (
                            <Accordion data={data} key={data.id}/>
                        ))
                    }
                </div> </>}

                
            </div>

            </div>
            
        </div>
    )
}

export default Help;