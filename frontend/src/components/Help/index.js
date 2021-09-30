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
      <div className='tw-w-full'>
        {/* <Header /> */}
        <div className='tw-w-full tw-p-6 tw-pr-10'>
          <div className='tw-flex tw-flex-col tw-justify-between'>
            <h2 className='tw-font-semibold tw-text-2xl'>Help</h2>
            <SearchBar onSearched={searchData} />

            {/* Fetching the questions and answers from ./accordionData.js as faqs are not supplied by backend */}
            {searchResult.length > 0 && (
              <div className='tw-my-4'>
                <p className='tw-text-lg tw-font-semibold'>Search Results</p>
                {searchResult.map((data) => (
                  <Accordion data={data} key={data.id} />
                ))}
              </div>
            )}

            {searchResult.length == 0 && (
              <>
                <div className='tw-my-4'>
                  <p className='tw-text-lg tw-font-semibold'>Popular Searches</p>
                  {popData.map((data) => (
                    <Accordion data={data} key={data.id} />
                  ))}
                </div>
                <div className='tw-my-4'>
                  <p className='tw-text-lg tw-font-semibold'>More Help</p>
                  {moData.map((data) => (
                    <Accordion data={data} key={data.id} />
                  ))}
                </div>{' '}
              </>
            )}
          </div>
        </div>
      </div>
    );
}

export default Help;