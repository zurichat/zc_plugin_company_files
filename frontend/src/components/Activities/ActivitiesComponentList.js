import "./Activities.css";
import React from 'react'
import User from './guest-user-female.png'

function ActivitiesComponent() {
  return (
    <div className='flex mb-8' id='activity'>
        <div className='rounded-full mr-2'>
          <img src={User} alt='avatar' className='rounded-full w-9 h-9' />
        </div>
        <div>
          <p className='capitalize font-bold text-sm' >Damilola Emmanuel deleted design file.png from Company files </p>
          
        </div>
        
        <div className="period">
          <p className=' text-sm text-text-body' >10 hour ago</p>
        </div>
        <div className="ellipsis">
        <span class="icon"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></span>
        </div>
        
      </div>
  )
}

export default ActivitiesComponent