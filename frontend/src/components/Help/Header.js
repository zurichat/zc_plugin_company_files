import React from 'react';
import {BsChevronDown} from 'react-icons/bs';

import {Link} from 'react-router-dom'

import toggleIcon from '../../../public/Icons/chevron-down/active.svg'

import users from '../../../public/Icons/users.png';

const Header = () =>{
    return (
        <div className="tw-w-full tw-px-6 tw-py-1.5 tw-bg-green-500 tw-flex tw-justify-between">
            <Link to='/' className="tw-text-white tw-flex tw-items-center">
                # Files <BsChevronDown className="ml-2"/>
            </Link>
            <div>
                <img src={users}/>
            </div>
        </div>
    )
}

export default Header ;