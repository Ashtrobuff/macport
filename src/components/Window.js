import React from 'react'
import Draggable from 'react-draggable'
import { useState } from 'react';
const Window = ({remfunc}) => {
    const [isVisible, setIsVisible] = useState(true);

    const closeWindow = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

  return (
 
        <Draggable>
            <div className='absolute h-96 ml-10 bg-slate-100 w-80 mt-40 shadow-lg rounded-md'>
        <div style={{borderRadius:"6px 6px 0px 0px",borderWidth:"0px 0px 0px 1px"}} className='w-80 bg-white h-8 p-2'>
        <div className='flex flex-row gap-1'>
            <div className='h-3 w-3 rounded-full bg-red-500 hover:cursor-pointer' onClick={closeWindow}></div>
            <div className='h-3 w-3 rounded-full bg-yellow-500 hover:cursor-pointer' onClick={closeWindow}></div>
            <div className='h-3 w-3 rounded-full bg-green-500 hover:cursor-pointer' onClick={closeWindow}></div>
        </div>
        </div>
    </div></Draggable>
        
    
  )
}

export default Window