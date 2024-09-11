import React from 'react'
import Draggable from 'react-draggable';
import { useState } from 'react';
import ProjectItem from './ProjectItem';
const Projects = ({remfunc}) => {
    const [isVisible, setIsVisible] = useState(true);

    const closeWindow = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

  return (
 
        <Draggable>
            <div className='absolute ml-10 h-96 bg-slate-100  mt-40 shadow-lg rounded-md' style={{width:670,height:700}}>
        <div style={{borderRadius:"6px 6px 0px 0px",borderWidth:"0px 0px 0px 1px" ,width:670}} className='w-80 bg-white h-8 p-2'>
        <div className='flex flex-row gap-1' >
            <div className='h-3 w-3 rounded-full bg-red-500 hover:cursor-pointer' onClick={closeWindow}></div>
            <div className='h-3 w-3 rounded-full bg-yellow-500 hover:cursor-pointer' onClick={closeWindow}></div>
            <div className='h-3 w-3 rounded-full bg-green-500 hover:cursor-pointer' onClick={closeWindow}></div>
        </div>
        <div className=' absolute h-full w-32 mt-3' style={{width:200,height:669,borderRight:"1px solid rgba(0,0,0,0.1)"}}>
            <div className='absolute font-extrabold mt-5  text-2xl ml-2'>Projects</div>
            <div className='flex mt-24 flex-col'>
                <ProjectItem/>
            </div>
        </div>
       
        </div>
    </div></Draggable>
        
    
  )
}

export default Projects