import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

function Cursor() {
const cursor = useRef(null)
useGSAP(()=>{
const handlemousemove = (e)=>{
       gsap.to(cursor.current , {
        x:e.clientX- 20 / 2,
        y:e.clientY- 20 / 2,
        duration: 0.2,
       })

    }

  window.addEventListener("mousemove" , handlemousemove);

  return()=> window.removeEventListener("mousemove" , handlemousemove )
},[])
  return (
    <div ref={cursor} className='pointer-events-none fixed flex items-center justify-center top-0 left-0 h-[5rem] w-[5rem] bg-white rounded-full'/>
  )
}

export default Cursor
