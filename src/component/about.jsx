import React, { useRef } from 'react'
import about from "../assets/about.png"
import about1 from "../assets/about1.png"
import about2 from "../assets/about2.png"
import about3 from "../assets/about3.png"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const img1 = useRef(null)
  const img2 = useRef(null)
  const heading = useRef(null)
  const para = useRef(null)
  const button=  useRef(null)

  useGSAP(()=>{

    gsap.from(para.current,{
      y:"100%",
      opacity:0,
      delay:0.5,
      duration:0.6,
     scrollTrigger:{
       trigger: heading.current,
       start:"top 50% ",
       end:"bottom 50% ",
       scrun:true   
    }})
    gsap.from(button.current,{
      y:"100%",
      opacity:0,
      delay:0.5,
      duration:0.6,
     scrollTrigger:{
       trigger: heading.current,
       start:"top 50% ",
       end:"bottom 50% ",
       scrun:true   
    }
    })
    gsap.from(heading.current, {
       y:"-100%",
       opacity:0,
       delay:0.5,
       duration:0.6,
      scrollTrigger:{
        trigger: heading.current,
        start:"top 50% ",
        end:"bottom 50% ",
        scrun:true      
      }
    })

    
    gsap.from(img1.current, { 
       x:"-100%",
       delay:0.5,
       duration:0.6,
      scrollTrigger:{
        trigger: img1.current,
        start:"top 50% ",
         end:"bottom 50% ",
        scrun:true      
      }

     });
     gsap.from(img2.current, { 
      x:"100%",
      delay:0.5,
      duration:0.6,
     scrollTrigger:{
       trigger: img1.current,
       start:"top 50% ",
        end:"bottom 50% ",
       scrun:true      
     }

    });


  },[])

  
  return (
    <div className='h-auto lg:min-h-[47.5rem]  w-screen text-white relative  mt-[2rem] md:mt={0} ' >
      <div className='flex justify-between  items-center h-full w-full absolute top-0 left-0 '>
           <div ref={img1} >
           <img className=' hidden sm:block h-[8rem] md:h-[15rem]  lg:h-[25rem]' src={about3} alt="error" />
        <img className=' hidden sm:block h-[8rem]  md:h-[15rem]  lg:h-[25rem]' src={about2} alt="error" />
           </div>
           <div ref={img2}>
           <img className=' hidden sm:block h-[8rem]  md:h-[15rem]  lg:h-[25rem]' src={about1} alt="error" />
           <img className=' hidden sm:block h-[8rem]  md:h-[15rem]  lg:h-[25rem]' src={about} alt="error" />
           </div>
      </div>
      <div className='flex flex-col items-center z-10 justify-center'>
      <div ref={heading} className="text-center bitronor  z-10 md:p-4">
        <h1 className=" text-[3rem] md:text-[7rem] lg:text-[10rem] xl:text-[10rem] "> <span className='text-red-400' >A</span>bout ME</h1>
      </div>
      <div ref={para} className="flex flex-col items-center justify-center md:flex xl:justify-around md:mt-[-2rem] lg:flex-row md:items-center md:justify-center lg:flex md:gap-[2rem] lg:items-center lg:justify-start " >
        <p   className="rbitron text:[0.6rem] z-10 lg:text-gray-300 md:text-gray-300 md:w-[35rem] lg:w-[40rem] md:text-[1.2rem] text-center font-bold">
        "Hey there! I'm Sanju, a 21-year-old computer science student from India with a passion for crafting dynamic and responsive web experiences. I'm diving deep into the world of modern web development, exploring the magic of ReactJS and the power of NextJS to build sleek, high-performance applications. I'm also mastering GSAP for stunning animations and Tailwind CSS for fast, beautiful designs. Let’s create something amazing together!"
        </p>
      </div>
      <div ref={button} className="flex mt-[3rem] justify-center   h-[3rem] w-[17rem] ">
     <Link
  to="contact"
  smooth={true}
  duration={500}
  offset={-70}
>
  <button className="bg-red-700 w-[17rem] rounded-2xl h-[3rem] kanit-extrabold hover:bg-yellow-500 cursor-pointer shadow-[0px_0px_20px_red] hover:shadow-[0px_0px_20px_gold] hover:text-black transition-all duration-300 ease-in z-10">
    CONTACT ME
  </button>
</Link>
          </div>
          </div>
    </div>
  )
}

export default About
