import React from 'react'
import ActivitiesComponent from './ActivitiesComponentList'

function ActivitiesComponents() {
  return (
    <div className='mt-10 overflow-auto'>
      <div className='flex justify-between mb-8'>
        <p className='text-text-grey capitalize font-bold text-2xl'>&lt;- All Activities</p>
        <div className="rounded-full h-2 w-2 p-3 flex items-center justify-center border-collaborators border-solid border-text-navbar text-text-navbar mr-8">5</div>
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