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
    return (
      <div className='tw-w-full tw-border tw-border-gray-300 tw-rounded tw-my-3'>
        <div
          className='tw-w-full tw-text-lg tw-flex tw-justify-between tw-cursor-pointer tw-font-semibold tw-border-gray-300 tw-py-1 tw-px-2'
          onClick={toggle}
        >
          <div className='tw-flex tw-items-center tw-p-1'>
            <div className='questionIcon tw-rounded tw-p-2 tw-text-green-500 tw-text-xl tw-font-medium'>
              {data.icon}
              {/* <img src={data.icon} className="tw-w-4 tw-m-2" /> */}
            </div>
            <p className='tw-text-base tw-text-gray-700 tw-ml-4 tw-font-semibold'>{data.title}</p>
          </div>
          <img src={toggleIcon} id={imgId} className='tw-w-5 tw-mr-6' />
        </div>
        <div
          id={accId}
          className='accordion-answers tw-px-12 tw-border-t tw-border-gray-300'
        >
          <p className='tw-p-4 tw-text-gray-500'>{data.answer}</p>
        </div>
      </div>
    );
}

export default Accordion