import React from 'react'

const Time = () => {

    const date = new Date();
    const hours=date.getHours();
    const minutes=date.getMinutes();
    const getTime=()=>{
        return  <div className='font-semibold text-white mr-2'>{`0${hours}:${minutes}`}</div>

    }
    
    const showTime = getTime();
 
    return (
            <div align="center"> {showTime}</div>
    );
  
}

export default Time