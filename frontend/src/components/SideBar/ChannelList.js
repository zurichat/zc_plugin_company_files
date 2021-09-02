import React from 'react'
import {useState} from 'react';

function ChannelList() {
    const [lists, setLists] = useState([{
        "id":1,
        "title": "# Announcement"
    },
    {
        "id":2,
        "title": "# Games"
    },
    {
        "id":3,
        "title": "# Designers"
    },
    {
        "id":4,
        "title": "# Developers"
    }


    ]);
      
    return (
        <div>
           
            {lists.map(list =>(
    <ul key={list.id}>
<li className="text-base mx-5 font-normal hover:bg-green-200"><a href='/#' className='no-underline'>{list.title}</a></li>
    </ul>
    
))}

        </div>
    )
}

export default ChannelList
