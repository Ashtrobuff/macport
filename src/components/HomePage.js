import React, { useEffect } from 'react'
import NavBar from './NavBar'
import Dock from './Dock'
import Folder from './Folder';
import Window from './Window';
import Draggable from 'react-draggable';
import Projects from './Projects';
import Project2 from './Project2';
import { useState } from 'react';
const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [projvis,setprojvis]=useState(false)

  const openproj=()=>{
    setprojvis(true);
  }
  const closeproj=()=>{
    setprojvis(false)
  }
  const openWindow = () => {
    setIsVisible(true);
  };

  const closeWindow = () => {
    setIsVisible(false);
  };
    const removeNode = (idx) => document.getElementById(`id-${idx}`).remove();
    return (
        <div className='w-full h-full flex flex-col overflow-hidden'>
          <NavBar className='absolute' />
          <img
            className="absolute w-full h-full -z-10"
            style={{ height: "100vh", width: "100vw" }}
            src={require('../images/bg2.jpg')}
            alt="Background"
          />
          {/* This div takes up the remaining space, pushing the dock to the bottom */}
        {/*  <div openfol={openWindow}><Folder/></div>
          <div className='overflow-hidden'><Window remfunc={removeNode}/></div>
*/}
           {/* This div takes up the remaining space, pushing the dock to the bottom */}
           <div className='flex flex-row gap-20'>
           <div onClick={openWindow} className='hover:cursor-pointer' ><Folder title={"blank"}/></div>
      {isVisible && (
        <div className='overflow-hidden'>
          <Window remfunc={removeNode} onClose={closeWindow} />
        </div>
      )}
       <div onClick={openproj} className='hover:cursor-pointer'><Folder title={"projects"}/></div>
      {projvis && (
        <div className='overflow-hidden'>
          <Project2 remfunc={removeNode} onClose={closeproj} />
        </div>
      )}
           </div>
     
      {/*
          <div className='overflow-hidden'><Project2 remfunc={removeNode}/></div>
          */}
          <div className='flex justify-center items-center flex-col ' style={{justifyContent:"flex-end"}}>
            <Dock className="z-10 mb-4" />
          </div>
        </div>
      );
      
}

export default HomePage