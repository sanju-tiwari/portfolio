import React, { useState } from 'react'
import contact from "../assets/contact.png"
import emailjs from "emailjs-com"
import contact1 from "../assets/contact1.png"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import Header from './header'

function Contact(){
  const img1 = useRef(null)
  const img2 = useRef(null)
    const [formdata , setformdata] = useState({
    name:"",
    email:"",
    phone:"",
    question:""

    })
    const handlechange = (e)=>{
      setformdata({...formdata,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Sending data:", formdata);     
      emailjs
        .send(
          "service_fmfphq7", 
          "template_knmzczi", 
          {
            name: formdata.name,   
            email: formdata.email,      
            phone: formdata.phone,  
            question: formdata.question 
          },
          "_Utdywyk_vTLGbGa5"
        )
        .then(() => {
          alert("Message Sent Successfully! ✅");
          setformdata({ name: "", email: "", comment: "", question: "" }); 
        })
        .catch((error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message ❌");
        });
    };

 useGSAP(()=>{
     
  gsap.from( img1.current , {
    scrollTrigger:{
      trigger:img1.current,
      start:"-25% top",
      end:"top 20%",
      scrub:1,
    },
    transform:"translateX(-100%)",
    duration:0.4,
    delay:0.3

  } )
  gsap.from( img2.current , {
    scrollTrigger:{
      trigger:img2.current,
      start:"-25% top",
      end:"top 20%",
      scrub:1,
    },
    transform:"translateX(100%)",
    duration:0.4,
    delay:0.3

  } )

 }, [])
 

  return (
    <div className=' h-screen md:h-screen w-auto relative bg-black rounded-3xl'>
      <Header></Header>

        <div className='absolute flex justify-between w-screen mt-[5rem]' >
            <img  className=' h-[10rem] md:h-[20rem] ' src={contact} alt="error"/>
            <img  className=' h-[10rem]  md:h-[30rem]' src={contact1} alt="error"/>
        </div>
        <div className='  flex flex-col  justify-center items-center md:flex  md:gap-[2rem] lg:flex-row  h-[40rem] p-[10rem]'> 
        <div className="z-20 w-[21rem]  md:w-[33rem] lg:w-[48rem]  ">
        <h1  className='lexend text-[1.5rem]  md:text-[3rem] lg:text-[5rem] font-bold bg-white bg-clip-text text-transparent'> <span className='text-red-500' >L</span>ET'S <span className='hidden md:inline' ><br /></span>GET IN
        TOUCH</h1>
        </div>
         <form onSubmit={handleSubmit}
         className=" w-[22rem] h-[30rem] md:w-[40rem] text-white roboto flex flex-col gap-[2rem] items-center justify-center z-20 " >
                 <input  value={formdata.name} onChange={handlechange} name='name' className="h-[2rem] w-[22rem] md:w-[30rem] border-white border-b-2 outline-none focus:ring-0 "  required type="text" placeholder='Full Name' />
              <div className='flex gap-[1rem]'>
                 <input value={formdata.email} onChange={handlechange} name='email'  className='h-[2rem]  w-[10rem] md:w-[14rem] border-white border-b-2 outline-none focus:ring-0 ' required type="email" placeholder='Email'  />
                 <input value={formdata.number} onChange={handlechange} name="number" className='h-[2rem] w-[10rem] md:w-[14rem] border-white border-b-2 outline-none focus:ring-0' type="Number" placeholder='Phone Number'  />
              </div>
                 <textarea value={formdata.question} onChange={handlechange} name='question'  required className='h-[5rem] w-[22rem] md:w-[30rem] border-white border-b
                 
                 -2 outline-none focus:ring-0  ' placeholder='Message '  />
                 <button type="submit" className ='h-[2rem] w-[22rem] md:w-[30rem] rounded-2xl border-2 border-purple-500 hover:text-white  ease-in duration-200 cursor-pointer text-white hover:border-yellow-600'>SEND</button>                     
            </form>
        <div>
        </div>
        </div>
    </div>
  )
}
export default Contact
