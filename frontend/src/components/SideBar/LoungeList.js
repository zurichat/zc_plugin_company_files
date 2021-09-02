import React from 'react'
import {useState} from 'react';

function LoungeList() {

    const [lists, setLists] = useState([        {
        "id":1,
        "title": "Lounge 1"
    },
        {
        "id":2,
        "title": "Lounge 2"
    },
        {
        "id":3,
        "title": "Lounge 3"
    },
        {
        "id":4,
        "title": "Lounge 4"
    }



    ]);

    return (
        <div>
            {lists.map(lists =>(
    <ul key={lists.id}>
<li className="text-base mx-5 font-normal hover:bg-green-200"><a href='/#' className='no-underline'>{lists.title}</a></li>
    </ul>
    
))}

        </div>
    )
}

export default LoungeList
