import React from 'react';
import Time from './Time';
import { battsvg, logosvg, wifisvg } from '../assets';
const NavBar = () => {
    let now=Date()
  return (
    <div>
      <div className='absolute w-full h-8 z-10' style={{  backgroundColor: "rgb(177,89, 189,0.8)" }}>
        <div className='pl-1 flex flex-row w-full items-center'>
          <div className='flex flex-row items-center text-center'>
          {/* <img className='h-5 mb-1 ml-5' src={require('/Users/ashish/Desktop/macport/macport/src/images/appbg.png')} alt="App Logo" />*/}
          <div className='h-5 mb-1 ml-5'>{logosvg}</div>
            <div className='font-bold ml-5 text-center text-white'>Portfolio</div>
          </div>
          <div className='flex flex-row ml-5 flex-1 text-white'>
            <div className='font-bold ml-10'>File</div>
            <div className='font-bold ml-10'>Edit</div>
            <div className='font-bold ml-10'>Selection</div>
            <div className='font-bold ml-10'>View</div>
            <div className='font-bold ml-10'>Go</div>
            <div className='font-bold ml-10'>Run</div>
            <div className='font-bold ml-10'>Terminal</div>
            <div className='font-bold ml-10'>Help</div>
            <div className='font-bold ml-10'>About</div>
          </div>
          <div className='flex items-center flex-row mr-2'>
            <div className='mr-5'>
                <div>{battsvg}</div>
            {/*<img className="h-8" src={require('/Users/ashish/Desktop/macport/macport/src/images/pngegg.png')} alt="Battery Icon" />*/}
            </div>
            <div className='mr-5'>
                <div>{wifisvg}</div>
            {/*<img className="h-8" src={require('/Users/ashish/Desktop/macport/macport/src/images/pngegg.png')} alt="Battery Icon" />*/}
            </div>
            <div><Time/></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
