import React from 'react'

const Folder = ({title}) => {
  return (
    <div className='w-fit h-fit  ml-10 absolute mt-20'>
    <img className='h-16'src={require('/Users/ashish/Desktop/macport/macport/src/images/folder.png')}></img>
    <div className='text-sm text-white text-center'>{title} </div>
    </div>
      
  )
}

export default Folder