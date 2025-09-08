import React from 'react'
import { MdOutlineEmail } from "react-icons/md";

function ContactMail() {
  return (
    <div  className='h-60 w-screen'>
      <div className='h-full w-full flex overflow-hidden 
       items-center flex-row justify-around animate-scrollX   '>
          <div className='relative whitespace-nowrap flex items-center justify-center overflow-hidden '>
            <div className='h-48 w-48 bg-purple-800 text-white flex items-center justify-center [clip-path:polygon(50%_0%,61%_35%,98%_35%,68%_57%,79%_91%,50%_70%,21%_91%,32%_57%,2%_35%,39%_35%)] ' > <MdOutlineEmail className=' text-4xl '/> </div>
            <h1 className='uppercase text-[10rem] tracking-tight text-white kanit-extrabold '>Send an mail</h1>
                 <div className='h-48 w-48 bg-purple-800 text-white flex items-center justify-center [clip-path:polygon(50%_0%,61%_35%,98%_35%,68%_57%,79%_91%,50%_70%,21%_91%,32%_57%,2%_35%,39%_35%)] ' > <MdOutlineEmail className=' text-4xl '/> </div>
          </div>
        
     
      </div>
    </div>
  )
}
  
export default ContactMail
