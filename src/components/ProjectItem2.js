import React from 'react'

const ProjectItem2 = ({image,desc,name}) => {

  return (
    <div className='flex flex-row'>
    <div className='mt-10 ml-10 flex flex-col'>
        <div className='flex flex-row gap-5'>
            <img className='h-60 w-fit' src={require('../images/Screenshot 2024-09-11 at 2.56.35 PM.png')}/>
            <div style={{width:1,backgroundColor:"rgba(0,0,0,0.1)", height:250}}></div>
        </div>
        <div>
            <h1 className='text-3xl font-bold'>Movie Go</h1>
            <p className='text-slate-400 h-20' style={{width:300}}> A movie database right in your palm,current with all the latest movie updates and trivia!</p>
        </div>

        <div className=' mt-2 p-1 w-20 text-center rounded-full text-white font-bold hover:cursor-pointer hover:scale-110' style={{backgroundColor:"rgb(0,122,255)"}}>Explore</div>
    </div>
       <div className='mt-10 ml-10 flex flex-col'>
       <div className='flex flex-row gap-5'>
           <img className='h-60 w-fit' src={require('../images/cartimg.png')}/>
           <div style={{width:1,backgroundColor:"rgba(0,0,0,0.1)", height:250}}></div>
       </div>
       <div>
           <h1 className='text-3xl font-bold'>Zip Cart</h1>
           <p className='text-slate-400 h-20' style={{width:300}}> A movie database right in your palm,current with all the latest movie updates and trivia!</p>
       </div>

       <div className=' mt-2 p-1 w-20 text-center rounded-full text-white font-bold hover:cursor-pointer hover:scale-110' style={{backgroundColor:"rgb(0,122,255)"}}>Explore</div>
   </div>
   <div className='mt-10 ml-10 flex flex-col'>
       <div className='flex flex-row gap-5'>
           <img className='h-60 w-fit' src={require('../images/chessimg.png')}/>
           <div style={{width:1,backgroundColor:"rgba(0,0,0,0.1)", height:250}}></div>
       </div>
       <div>
           <h1 className='text-3xl font-bold'>Ezchess</h1>
           <p className='text-slate-400 h-20' style={{width:300}}> A easy online hassle-free way to have a chess brawl with your friends!</p>
       </div>

       <div className=' mt-2 p-1 w-20 text-center rounded-full text-white font-bold hover:cursor-pointer hover:scale-110' style={{backgroundColor:"rgb(0,122,255)"}}>Explore</div>
   </div>
   </div>
  )
}

export default ProjectItem2