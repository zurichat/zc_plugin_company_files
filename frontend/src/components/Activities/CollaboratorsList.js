import React from 'react'
import User from '../Activities/guest-user.jpg'

function CollaboratorsList() {
  return (
    <div className='flex mb-8'>
        <div className='rounded-full mr-2'>
          <img src={User} alt='avatar' className='rounded-full w-9 h-9' />
        </div>
        <div>
          <p className='capitalize font-bold text-sm text-text-body'>damilola emmanuel</p>
          <p className='text-gray-400 text-xs truncate'>damilolaemmanuel@hotmail.com</p>
        </div>
      </div>
  )
}

export default CollaboratorsList