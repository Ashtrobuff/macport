import React from 'react'

const Dock = () => {
  return (
    <div className='' style={{justifySelf:"flex-end",marginTop:"88vh"}}> 
    <div className='z-2flex flex-row w-fit h-fit'>
            <div  className=" relative flex flex-row rounded-3xl py-1" style={{border:"1px solid rgba(255, 255, 255, .5)",backgroundColor:"rgba(255,255,255,0.3)",height:"fit"}}>
                <div>
                <img className='h-20 ml-2 mr-5 bg-opacity-100 hover:scale-125 duration-200 transition cursor-pointer' src={require('../images/cal.png')}/>
                </div> 
                <div>
                <img className='h-20 mr-5 hover:scale-125 transition cursor-pointer'  src={require('../images/contacts.png')}/>
                </div>
                <div><img className='h-20 mr-5 hover:scale-125 transition cursor-pointer' src={require('../images/finder.png')}/></div>
                <div><img className='h-20 mr-5 hover:scale-125 transition cursor-pointer' src={require('../images/mail.png')}/></div>
                <div> <img className='h-20 mr-5 hover:scale-125 transition cursor-pointer' src={require('../images/msg.png')}/></div>
      <div><img className='mr-5 mt-1 hover:scale-125 transition cursor-pointer' style={{height:70}} src={require('../images/notes.png')}/></div>
      <div><img className='h-20 mr-5 hover:scale-125 transition cursor-pointer' src={require('../images/safari.png')}/></div>
      <div><img className='h-20 mr-2 hover:scale-125 transition cursor-pointer' src={require('../images/serttings.png')}/></div>
      <div><img className='h-20 mr-2 hover:scale-125 transition cursor-pointer' src={require('../images/trash1.png')}/></div>
            </div>
    </div>
    </div>
  )
}

export default Dock