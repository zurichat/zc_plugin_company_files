import React from 'react'
import {useState} from 'react';

function DmessageList() {

    const [lists, setLists] = useState([        {
        "id":1,
        "name": "John Doe",
        "link": "#/",
        "img": "#/"
    },
    {
        "id":2,
        "name": "Peter Wane",
        "link": "#/",
        "img": "#/"
    },
    {
        "id":3,
        "name": "Daniel Frank",
        "link": "#/",
        "img": "#/"
    }



    ]);

    return (
        <div>
            
            {lists.map(list =>(
    <ul key={list.id}>
 <li className="text-base mx-5 flex items-center m-1 hover:bg-green-200">
                                <div className="h-10 w-10 pic-image relative">
                                    <img className="object-cover" src={list.img} alt='' />
                                    <span className="h-2 w-2 bg-white absolute right"></span>
                                </div>
                        <p className="mx-1 font-normal"><a href={list.link} className='no-underline'>{list.name}</a>
                                </p>
                                </li>
                              
    </ul>
    
))}



        </div>
    )
}

export default DmessageList
