import React from 'react'
import Draggable from 'react-draggable'
import { useState } from 'react';
import ProjectItem2 from './ProjectItem2';
const Project2 = ({remfunc,onClose}) => {
    const [isVisible, setIsVisible] = useState(true);

    const closeWindow = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;
  return (
    <Draggable>
    <div className='absolute ml-10 h-96 bg-slate-100  mt-40 shadow-lg rounded-md' style={{width:1300,height:700}}>

<div style={{borderRadius:"6px 6px 0px 0px",borderWidth:"0px 0px 0px 1px" ,width:1300}} className='w-80 bg-white h-8 p-2'>
<div className='flex flex-row gap-1' >
    <div className='h-3 w-3 rounded-full bg-red-500 hover:cursor-pointer' onClick={onClose}></div>
    <div className='h-3 w-3 rounded-full bg-yellow-500 hover:cursor-pointer' onClick={closeWindow}></div>
    <div className='h-3 w-3 rounded-full bg-green-500 hover:cursor-pointer' onClick={closeWindow}></div>
</div>
<div className='overflow-y-hidden'>
    <h2 className='mt-10 ml-10 font-bold text-3xl'>Projects</h2>
    
    <ProjectItem2/>

</div>
</div>
</div></Draggable>
  )
}

export default Project2