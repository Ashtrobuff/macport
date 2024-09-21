/*import React from 'react'

const ProjectItem2 = ({image,desc,name}) => {

function redirector(url){
 window.open(`${url}`,'_blank')

}
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

        <div className=' mt-2 p-1 w-20 text-center rounded-full text-white font-bold hover:cursor-pointer hover:scale-110' onClick={()=>redirector('https://github.com/Ashtrobuff/MovieGO.iOS')} style={{backgroundColor:"rgb(0,122,255)"}}>Explore</div>
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

       <div className=' mt-2 p-1 w-20 text-center rounded-full text-white font-bold hover:cursor-pointer hover:scale-110' onClick={()=>redirector("https://github.com/Ashtrobuff/ecommerce-scratch")} style={{backgroundColor:"rgb(0,122,255)"}}>Explore</div>
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

       <div className=' mt-2 p-1 w-20 text-center rounded-full text-white font-bold hover:cursor-pointer hover:scale-110' onClick={()=>redirector('https://github.com/Ashtrobuff/ecommerce-scratch')} style={{backgroundColor:"rgb(0,122,255)"}}>Explore</div>
   </div>
   <div className='mt-10 ml-10 flex flex-col'>
       <div className='flex flex-row gap-5'>
           <img className='h-60 w-fit' src={require('../images/women.png')}/>
           <div style={{width:1,backgroundColor:"rgba(0,0,0,0.1)", height:250}}></div>
       </div>
       <div>
           <h1 className='text-3xl font-bold'>Ezchess</h1>
           <p className='text-slate-400 h-20' style={{width:300}}> A easy online hassle-free way to have a chess brawl with your friends!</p>
       </div>

       <div className=' mt-2 p-1 w-20 text-center rounded-full text-white font-bold hover:cursor-pointer hover:scale-110' onClick={()=>redirector('https://github.com/Ashtrobuff/Women-s-Safety-App')} style={{backgroundColor:"rgb(0,122,255)"}}>Explore</div>
   </div>
   </div>
  )
}

export default ProjectItem2
*/

import React from 'react'

const ProjectItem2 = ({ image, desc, name }) => {

  function redirector(url) {
    window.open(url, '_blank')
  }

  return (
    <div className='grid grid-cols-3 gap-10 mt-10 ml-10' style={{ gridTemplateAreas: `'item1 item2 item3' 'item4 item2 item3'` }}>
      <div className='flex flex-col' style={{ gridArea: 'item1' }}>
        <div className='flex flex-row gap-5'>
          <img className='h-60 w-fit' src={require('../images/Screenshot 2024-09-11 at 2.56.35 PM.png')} />
          <div style={{ width: 1, backgroundColor: "rgba(0,0,0,0.1)", height: 250 }}></div>
        </div>
        <div>
          <h1 className='text-3xl font-bold'>Movie Go</h1>
          <p className='text-slate-400 h-20' style={{ width: 300 }}>A movie database right in your palm, current with all the latest movie updates and trivia!</p>
        </div>
        <div className='mt-2 p-1 w-20 text-center rounded-full text-white font-bold hover:cursor-pointer hover:scale-110' onClick={() => redirector('https://github.com/Ashtrobuff/MovieGO.iOS')} style={{ backgroundColor: "rgb(0,122,255)" }}>Explore</div>
      </div>

      <div className='flex flex-col' style={{ gridArea: 'item2' }}>
        <div className='flex flex-row gap-5'>
          <img className='h-60 w-fit' src={require('../images/cartimg.png')} />
          <div style={{ width: 1, backgroundColor: "rgba(0,0,0,0.1)", height: 250 }}></div>
        </div>
        <div>
          <h1 className='text-3xl font-bold'>Zip Cart</h1>
          <p className='text-slate-400 h-20' style={{ width: 300 }}>A movie database right in your palm, current with all the latest movie updates and trivia!</p>
        </div>
        <div className='mt-2 p-1 w-20 text-center rounded-full text-white font-bold hover:cursor-pointer hover:scale-110' onClick={() => redirector("https://github.com/Ashtrobuff/ecommerce-scratch")} style={{ backgroundColor: "rgb(0,122,255)" }}>Explore</div>
      </div>

      <div className='flex flex-col' style={{ gridArea: 'item3' }}>
        <div className='flex flex-row gap-5'>
          <img className='h-60 w-fit' src={require('../images/chessimg.png')} />
          <div style={{ width: 1, backgroundColor: "rgba(0,0,0,0.1)", height: 250 }}></div>
        </div>
        <div>
          <h1 className='text-3xl font-bold'>Ezchess</h1>
          <p className='text-slate-400 h-20' style={{ width: 300 }}>An easy online hassle-free way to have a chess brawl with your friends!</p>
        </div>
        <div className='mt-2 p-1 w-20 text-center rounded-full text-white font-bold hover:cursor-pointer hover:scale-110' onClick={() => redirector('https://github.com/Ashtrobuff/ecommerce-scratch')} style={{ backgroundColor: "rgb(0,122,255)" }}>Explore</div>
      </div>

      <div className='flex flex-col' style={{ gridArea: 'item4' }}>
        <div className='flex flex-row gap-5'>
          <img className='h-60 w-fit' src={require('../images/women.png')} />
          <div style={{ width: 1, backgroundColor: "rgba(0,0,0,0.1)", height: 250 }}></div>
        </div>
        <div>
          <h1 className='text-3xl font-bold'>Women Safety App</h1>
          <p className='text-slate-400 h-20' style={{ width: 300 }}>An app designed to improve safety for women in various situations.</p>
        </div>
        <div className='mt-2 p-1 w-20 text-center rounded-full text-white font-bold hover:cursor-pointer hover:scale-110' onClick={() => redirector('https://github.com/Ashtrobuff/Women-s-Safety-App')} style={{ backgroundColor: "rgb(0,122,255)" }}>Explore</div>
      </div>
    </div>
  )
}

export default ProjectItem2
