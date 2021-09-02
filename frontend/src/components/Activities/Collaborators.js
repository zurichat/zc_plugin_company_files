import React from 'react'
import CollaboratorsList from './CollaboratorsList'

function Collaborators() {
  return (
    <div className='mt-10'>
      <div className='flex justify-between mb-8'>
        <p className='text-text-grey capitalize font-bold text-2xl'>collaborators</p>
        <div className="rounded-full h-2 w-2 p-3 flex items-center justify-center border-collaborators border-solid border-text-navbar text-text-navbar">5</div>
      </div>
      <CollaboratorsList />
      <CollaboratorsList />
      <CollaboratorsList />
      <CollaboratorsList />
      <CollaboratorsList />
    </div>
  )
}

export default Collaborators
