import React from 'react'

function optionsbox() {
  return (
    `${<div className="ellipsis-box">
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
    </div>}`.toString()
    
  )
}

export default optionsbox