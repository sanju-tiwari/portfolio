import React, { useRef } from 'react'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img from "../assets/img/img.png"
import img2 from "../assets/img/img2.png"
import img3 from "../assets/img/img3.png"
import img4 from "../assets/img/img4.png"
import img5 from "../assets/img/img5.png"
import img6 from "../assets/img/img6.png"
import img7 from "../assets/img/img7.png"

gsap.registerPlugin(ScrollTrigger);
function Project(){
  const heading = useRef()
  const vertical = useRef()
  const vertical2 = useRef()
  const vertical3 = useRef()
  const tl = gsap.timeline()

  useGSAP(()=>{
    tl.from(heading.current, {
      y:"-100%",
      opacity:0,
      delay:0.5,
      duration:0.6,
     scrollTrigger:{
       trigger: heading.current,
       start:"top 30% ",
       end:"bottom 50% ",
       scrub:true   
     }
    })
     gsap.to(vertical.current , {
      duration: 0.6,
      ease: "none",
      opacity:0,
      scrollTrigger:{
        trigger:vertical.current,
        scrub:false,
        pin:true,
        pinSpacing:false,
        start:"top 10px",
        end:"bottom 10px",
        scrub:1
      }
    })
    gsap.to(vertical2.current, {
      duration: 0.6,
      ease: "none",
      opacity:0,
      scrollTrigger:{
        trigger:vertical2.current,
        pin:true,
        pinSpacing:false,
        start:"top 10px",
        end:"bottom 10px",
        scrub:1
      }

    })
    gsap.to(vertical3.current, {
      opacity:0,
      ease:"none",
      scrollTrigger:{
        trigger:vertical3.current,
        pin:true,
        pinSpacing:false,
        start:"top 10px",
        end:"bottom 10px",
        scrub:1
      }

    })

  },[])

  return (
    <div className='h-auto w-screen mt-[2rem]'>
    <h1 ref={heading} className='text-center text-[5rem] sm:text-[6rem]  md:text-[10rem] lg:text-[10rem] font-bold bg-gradient-to-r from-or-500 via-purple-500 to-red-500 bg-clip-text text-transparent kanit-extrabold'>PROJECT</h1>
     <div  className=' flex flex-col items-center justify-center gap-2 ' >
      <div ref={vertical} className=" p-0 h-[15rem] w-[20rem] md:h-[35rem] md:w-[44rem] lg:h-[50rem] lg:w-[90rem] overflow-hidden border-2 border-white rounded-2xl ">
           <div className='flex items-center  text-center h-[3rem]  gap-[4rem] md:h-[6rem] lg:h-[10rem] rounded-2xl md:justify-between p-[2rem] ' >
             <h1 className=' text-[3rem]  md:text-[6rem] lg:text-[10rem] font-bold text-white  md:mt-[-1rem] lg:mt-[-2rem]'>01</h1>
           <a 
  href="https://spontaneous-pastelito-d076fd.netlify.app/home" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className='roboto rounded-full h-[2rem] md:h-[4rem] border-2 border-white text-white lg:mt-[-1rem] ease-in-out duration-300 hover:border-yellow-600 w-[10rem] md:w-[18rem]'>
    LIVE PROJECT
  </button>
</a>
           </div>
           <div className=' h-[10rem] w-[20rem] md:w-[45rem] lg:w-[90rem] md:h-[30rem] lg:h-[40rem]  flex  p-[2rem] gap-[1rem] md:gap-[3rem] ' >
        <div className=' h-[6rem]  md:h-[22rem] lg:h-[30rem] border-2 border-white w-[40rem] lg:w-[50rem] rounded-2xl ' >
          <img className=' h-full w-full object-contain ' src={img2} alt="error" />
        </div>
        <div className='  h-[6rem] md:h-[22rem]  lg:h-[30rem]  border-2  w-[35rem] flex flex-col gap-[1.5rem] rounded-2xl ' >
          <div className=' h-[3rem]  md:h-[12rem]  lg:h-[14rem] border-2 border-red-500 rounded-2xl' >
          <img className=' h-full w-full object-contain ' src={img3} alt="error" />
           </div>
        
          <div className=' h-[3rem] md:h-[12rem] lg:h-[14rem] border-2 border-red-500 rounded-2xl' >
          <img className=' h-full w-full object-contain ' src={img4} alt="error" />
          </div>
        </div>
      </div>
      </div>
      <div ref={vertical2} className=" h-[15rem] w-[20rem] md:h-[35rem] md:w-[44rem] lg:h-[50rem] lg:w-[90rem] overflow-hidden border-2 border-white rounded-2xl ">
           <div className='flex items-center  text-center h-[3rem]  gap-[4rem] md:h-[6rem] lg:h-[10rem] rounded-2xl md:justify-between p-[2rem] ' >
             <h1 className=' text-[3rem]  md:text-[6rem] lg:text-[10rem] font-bold text-white  md:mt-[-1rem] lg:mt-[-2rem]'>02</h1>
           <a 
  href="https://67e567d7c48ead4cc51fd824--moonlit-buttercream-b9ec8a.netlify.app/" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className='roboto rounded-full h-[2rem] md:h-[4rem] border-2 border-white text-white lg:mt-[-1rem] ease-in-out duration-300 hover:border-yellow-600 w-[10rem] md:w-[18rem]'>
    LIVE PROJECT
  </button>
</a>
           </div>
           <div className=' h-[10rem] w-[20rem] md:w-[45rem] lg:w-[90rem] md:h-[30rem] lg:h-[40rem]  flex  p-[2rem] gap-[1rem] md:gap-[3rem] ' >
        <div className=' h-[6rem]  md:h-[22rem] lg:h-[30rem] border-2 border-white w-[40rem] lg:w-[50rem] rounded-2xl ' >
          <img  className=' h-full w-full object-contain ' src={img5} alt="error" />
        </div>
        <div className='  h-[6rem] md:h-[22rem]  lg:h-[30rem]  border-2  w-[35rem] flex flex-col gap-[1.5rem] rounded-2xl ' >
          <div className=' h-[3rem]  md:h-[12rem]  lg:h-[14rem] border-2 border-red-500 rounded-2xl' >
          <img className=' h-full w-full object-contain ' src={img6} alt="error" />
           </div>
        
          <div className=' h-[3rem] md:h-[12rem] lg:h-[14rem] border-2 border-red-500 rounded-2xl' >
          <img className=' h-full w-full object-contain ' src={img7}  alt="error" />
          </div>
        </div>
      </div>
      </div>
      <div  ref={vertical3}  className=" h-[15rem]  w-[20rem] md:h-[35rem] md:w-[44rem] lg:h-[50rem] lg:w-[90rem] overflow-hidden border-2 border-white rounded-2xl ">
           <div className='flex items-center  text-center h-[3rem]  gap-[4rem] md:h-[6rem] lg:h-[10rem] rounded-2xl md:justify-between p-[2rem] ' >
             <h1 className=' text-[3rem]  md:text-[6rem] lg:text-[10rem] font-bold text-white  md:mt-[-1rem] lg:mt-[-2rem]'>03</h1>
             <button className='roboto rounded-full h-[2rem]  md:h-[4rem]  border-2  border-white text-white lg:mt-[-1rem] ease-in-out duration-300  hover:border-yellow-600  w-[10rem] md:w-[18rem] '>LIVE PROJECT</button>
           </div>
           <div className=' h-[10rem] w-[20rem] md:w-[45rem] lg:w-[90rem] md:h-[30rem] lg:h-[40rem]  flex  p-[2rem] gap-[1rem] md:gap-[3rem] ' >
        <div className=' h-[6rem]  md:h-[22rem] lg:h-[30rem] border-2 border-white w-[40rem] lg:w-[50rem] rounded-2xl ' >
          <img className='h-full w-full object-container ' src={img} alt="error" />
        </div>
        <div className='  h-[6rem] md:h-[22rem]  lg:h-[30rem]  border-2  w-[35rem] flex flex-col gap-[1.5rem] rounded-2xl ' >
          <div className=' h-[3rem]  md:h-[12rem]  lg:h-[14rem] border-2 border-red-500 rounded-2xl' >
           <h1 className='text-white md:text-2xl text=center   ' >UPCOMING</h1>
           </div>
        
          <div className=' h-[3rem] md:h-[12rem] lg:h-[14rem] border-2 border-red-500 rounded-2xl' >
            <h1 className='text-white md:text-2xl text=center ' >UPCOMING</h1>
          </div>
        </div>
      </div>
      </div>
     </div>
    </div>
  )
}
export default Project