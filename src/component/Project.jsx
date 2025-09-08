import React from 'react'
import video from "../assets/img2/video.mp4"
import video2 from "../assets/img2/video2.mp4"
import video3 from "../assets/img2/video3.mp4"
import img from "../assets/img2/img1.avif"
import img2 from "../assets/img2/img2.avif"
import img3 from "../assets/img2/img3.avif"

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
                <video className=' opacity-0 group-hover:opacity-100 duration-300 ease-in-out z-0 w-full h-full absolute object-cover rounded-4xl ' autoPlay loop muted src={video}></video>
                <h1 className=' text-4xl text-center uppercase bitronor z-50 '>Art direction</h1>
                 <img className=' absolute h-full  object-contain right-0  md:object-cover z-20 rounded-4xl  ' src={img} alt="" />

             </div>
              <div className=' group h-full w-full   relative flex items-center justify-center ' >
                      <div className=' absolute h-full w-full bg-purple-800 opacity-50 rounded-4xl  ' ></div>
                                   <video className=' group-hover:opacity-100 ease-in-out duration-300 opacity-0 z-0 w-full h-full absolute object-cover rounded-4xl ' autoPlay loop muted src={video2}></video>
                 <h1 className=' text-4xl text-center uppercase bitronor z-50 '> ui/ux design </h1>
                            <img className=' absolute h-full drop-shadow-[0px_0px_10px_gold] rounded-4xl z-0 right-0 object-contain md:object-cover ' src={img2} alt=""/>
              </div>
               <div className=' group h-full w-full  relative flex items-center justify-center ' >
                      <div className=' absolute h-full w-full bg-green-800 opacity-50 rounded-4xl  ' ></div>
                                   <video className=' group-hover:opacity-100 ease-in-out duration-300 opacity-0 z-0 w-full h-full absolute object-cover rounded-4xl ' autoPlay loop muted src={video3}></video>
                <h1 className=' text-4xl text-center uppercase bitronor z-50 '>web development</h1>
                            <img className=' absolute h-full right-0 object-contain sm:object-cover z-0 rounded-4xl ' src={img3} alt="" />
               </div>
         </div>

    </div>
  )
}

export default Idea
