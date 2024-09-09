import React from 'react'
import NavBar from './NavBar'
import Dock from './Dock'
import Folder from './Folder';
import Window from './Window';
import Draggable from 'react-draggable';
const HomePage = () => {
    const removeNode = (idx) => document.getElementById(`id-${idx}`).remove();
    return (
        <div className='w-full h-full flex flex-col overflow-clip'>
          <NavBar className='absolute' />
          <img
            className="absolute w-full h-full -z-10"
            style={{ height: "100vh", width: "100vw" }}
            src={require('../images/bg2.jpg')}
            alt="Background"
          />
          {/* This div takes up the remaining space, pushing the dock to the bottom */}
          <div><Folder/></div>
          <div className='overflow-hidden'><Window remfunc={removeNode}/></div>
          <div className='flex justify-center items-center flex-col ' style={{justifyContent:"flex-end"}}>
            <Dock className="z-10 mb-4" />
          </div>
        </div>
      );
      
}

export default HomePage