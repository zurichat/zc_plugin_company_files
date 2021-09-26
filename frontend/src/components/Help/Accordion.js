import React, {useState} from 'react';
import { FaRegShareSquare } from 'react-icons/fa'

import toggleIcon from '../../../public/Icons/chevron-down/active.svg'

import './help.css'


const Accordion = ({ data }) => {

    // assigning unique IDs to accordions to ensure the right accordions are toggle when clicked
    const accId = `${data.id}`;

    // assigning unique IDs to chevrons-down icon to ensure only the chevron-down icon for the targeted accordion is rotated when clicked
    
    const imgId = `img${data.id}`;
    const toggle = () => {
        const ans = document.getElementById(accId);
        const img = document.getElementById(imgId);
        
        ans.classList.toggle('hide')
        img.classList.toggle('chevronIcon')
    }
    console.log(data.icon)
    return (
        <div className="w-full border border-gray-300 rounded my-3">
            <div className="w-full text-lg flex justify-between cursor-pointer font-semibold border-gray-300 py-1 px-2" onClick={toggle}>
                <div className="flex items-center p-1">
                    <div className="questionIcon rounded p-2 text-green-500 text-xl font-medium">
                        {data.icon}
                        {/* <img src={data.icon} className="w-4 m-2" /> */}
                    </div>
                    <p className='text-base text-gray-700 ml-4 font-semibold'>{data.title}</p>
                </div>
                <img src={toggleIcon} id={imgId} className="w-5 mr-6" />
            </div>
            <div id={accId} className="accordion-answers px-12 border-t border-gray-300">
                <p className="p-4 text-gray-500">{data.answer}</p>
            </div>
        </div>
    )
}

export default Accordion