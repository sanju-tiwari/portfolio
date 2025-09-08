import React from 'react'

function Idea() {
  return (
    <div className=' h-suto w-screen overflow-hidden  ' >
     <div className=' h-20 overflow-hidden w-full flex items-center  '>
           <h1 className='  uppercase text-white kanit-extrabold text-4xl lg:text-[6rem] ml-5 ' >
          hOW i Can help
        </h1>
     </div>
         <div className=' mt-5 h-screen  w-full flex-col flex lg:flex-row items-center justify-center text-white ' >
             <div className=' group h-full w-full relative overflow-hidden  flex items-center justify-center ' >
              <div className=' absolute h-full w-full bg-yellow-500 opacity-50 rounded-4xl  ' ></div>
                <video className=' opacity-0 group-hover:opacity-100 duration-300 ease-in-out z-0 w-full h-full absolute object-cover rounded-4xl ' autoPlay loop muted src="src\assets\img2\4K Sci-Fi Neon Tunnel VJ Motion Background __ Neon Light Tunnel Free VJ Loops __ 4K VJ Loops.mp4  "></video>
                <h1 className=' text-4xl text-center uppercase bitronor z-50 '>Art direction</h1>
                 <img className=' absolute h-full  object-contain right-0  md:object-cover z-20 rounded-4xl  ' src="src\assets\img2\68018b96139118b2a7fd6584_image 198 (2) (1) 1.avif" alt="" />

             </div>
              <div className=' group h-full w-full   relative flex items-center justify-center ' >
                      <div className=' absolute h-full w-full bg-purple-800 opacity-50 rounded-4xl  ' ></div>
                                   <video className=' group-hover:opacity-100 ease-in-out duration-300 opacity-0 z-0 w-full h-full absolute object-cover rounded-4xl ' autoPlay loop muted src="src\assets\img2\4k Video _ Technology Looped Background _ No Copyright Loop Background Video.mp4 "></video>
                 <h1 className=' text-4xl text-center uppercase bitronor z-50 '> ui/ux design </h1>
                            <img className=' absolute h-full drop-shadow-[0px_0px_10px_gold] rounded-4xl z-0 right-0 object-contain md:object-cover ' src="src\assets\img2\68018b98b55c01711f32a766_image 199 (1) 1.avif" alt=""/>
              </div>
               <div className=' group h-full w-full  relative flex items-center justify-center ' >
                      <div className=' absolute h-full w-full bg-green-800 opacity-50 rounded-4xl  ' ></div>
                                   <video className=' group-hover:opacity-100 ease-in-out duration-300 opacity-0 z-0 w-full h-full absolute object-cover rounded-4xl ' autoPlay loop muted src="src\assets\img2\The Matrix Raining Green Code Backdrop for OBS - Teams, Zoom calls in 4k - link to 45mins ver below.mp4 "></video>
                <h1 className=' text-4xl text-center uppercase bitronor z-50 '>web development</h1>
                            <img className=' absolute h-full right-0 object-contain sm:object-cover z-0 rounded-4xl ' src="src\assets\img2\68018b98baad7fbf3489fbd1_image 200 (1) 1.avif" alt="" />
               </div>
         </div>

    </div>
  )
}

export default Idea
