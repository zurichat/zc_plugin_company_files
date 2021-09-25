import React from 'react';
import {BsChevronDown} from 'react-icons/bs';

import {Link} from 'react-router-dom'

import toggleIcon from '../../../public/Icons/chevron-down/active.svg'

import users from '../../../public/Icons/users.png';

const Header = () =>{
    return (
        <div className="w-full px-6 py-1.5 bg-green-500 flex justify-between">
            <Link to='/' className="text-white flex items-center">
                # Files <BsChevronDown className="ml-2"/>
            </Link>
            <div>
                <img src={users}/>
            </div>
        </div>
    )
}

export default Header ;