import React from 'react'
import ActivitiesComponent from './ActivitiesComponentList'

function ActivitiesComponents() {
  return (
    <div className='mt-10 overflow-auto'>
      <div className='flex justify-between mb-8'>
        <p className='text-text-grey capitalize font-bold text-2xl'>&lt;- All Activities</p>
      </div>
      <div className="ellipsis-box">
        <ul>
          <li>
            <span class="icon"><i class="fa fa-thumb-tack" aria-hidden="true"></i>
            </span>
            <span class="text">Pin</span>
          </li>
          <li>
            <span class="icon"><i class="fa fa-check" aria-hidden="true"></i>
            </span>
            <span class="text">Mark as read</span>
          </li>
          <li>
            <span class="icon"><i class="fa fa-trash-o" aria-hidden="true"></i>
            </span>
            <span class="text">Delete</span>
          </li>
        </ul>
      </div>
      <ActivitiesComponent />
      <ActivitiesComponent />
      <ActivitiesComponent />
      <ActivitiesComponent />
      <ActivitiesComponent />
      <ActivitiesComponent />
      <ActivitiesComponent />
      <ActivitiesComponent />
      <ActivitiesComponent />
      <ActivitiesComponent />
    </div>
  )
}

export default ActivitiesComponents