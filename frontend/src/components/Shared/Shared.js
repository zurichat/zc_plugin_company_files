import React from 'react'
import SharedFiles from './SharedFiles'
import fixImg from './fix.png'

function Shared() {
    return (
        <div className=" bg-white px-4">
            <div className="container flex px-7 py-5 justify-between ">
            <h2 className="tex[20px] flex-1">Shared Files</h2>    
            <img src={fixImg} alt="" className="w-6 h-5 flex-2" />
            </div>   
       
           <SharedFiles />
        </div>
    )
}

export default Shared
