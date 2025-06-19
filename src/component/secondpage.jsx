import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import image from "../assets/image.jpg"
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import image4 from "../assets/image4.jpg"
import image5 from "../assets/image5.jpg"
import image6 from "../assets/image6.jpg"
import image7 from "../assets/image7.jpg"
import image8 from "../assets/image8.jpg"
import image9 from "../assets/image9.jpg"
function Secondpage() {
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const slider3 = useRef(null);
  const slider4 = useRef(null);
  const slider5 = useRef(null);
  const slider6 = useRef(null);


  useGSAP(() => {
    [slider1, slider2, slider3].forEach((sliderRef) => {
      gsap.to(sliderRef.current, {
        xPercent: -100, 
        duration: 15,    
        repeat: -1,     
        ease: "none", 
      });
    });
  }, []);
  useGSAP(() => {
    [slider4, slider5, slider6].forEach((sliderRefs) => {
      gsap.to(sliderRefs.current, {
        xPercent: 100, 
        duration: 15,    
        repeat: -1,     
        ease: "none",  
      });
    });
  }, []);


  const images = [image, image1, image2, image3, image4];
  const images2 = [image5, image6, image7, image8, image9];

  return (
    <div className=' h-auto w-screen text-white mt-[2rem] md:mt-[3.5rem]  lg:md:mt-[4rem] xl:mt-[5rem] '>
      <div className=' flex flex-col items-center justify-center gap-[3rem] lg:gap-0 ' >
      <div className='flex items-center gap-[2.5rem] flex-shrink-0'>
      <figure 
        id="slider" 
        ref={slider1} 
        className='w-full h-[10rem] md:h-[20rem] flex flex-nowrap gap-[2rem] items-center justify-center overflow-hidden'
      >
        {images.concat(images).map((img, index) => (
          <img 
            className='min-w-[15rem] h-[18rem]' 
            key={index} 
            src={img} 
            alt="error in loading" 
          />
        ))}
      </figure>

      {/* Slider 2 */}
      <figure 
        id="slider" 
        ref={slider2} 
        className='w-full h-[10rem] md:h-[20rem] flex flex-nowrap gap-[2rem] items-center justify-center overflow-hidden'
      >
        {images.concat(images).map((img, index) => (
          <img 
            className='min-w-[15rem] h-[18rem]' 
            key={index} 
            src={img} 
            alt="error in loading" 
          />
        ))}
      </figure>

      {/* Slider 3 */}
      <figure 
        id="slider" 
        ref={slider3} 
        className='w-full h-[10rem] md:h-[20rem]  flex flex-nowrap gap-[2rem] items-center justify-center overflow-hidden'
      >
        {images.concat(images).map((img, index) => (
          <img 
            className='min-w-[15rem] h-[18rem]' 
            key={index} 
            src={img} 
            alt="error in loading" 
          />
        ))}
      </figure>
    </div>
    <div className='flex items-center gap-[2.5rem] flex-shrink-0'>
      {/* Slider 1 */}
      <figure 
        id="slider" 
        ref={slider4} 
        className='w-full h-[10rem] md:h-[20rem] flex flex-nowrap gap-[2rem] items-center justify-center overflow-hidden'
      >
        {images2.concat(images2).map((img, index) => (
          <img 
            className='min-w-[15rem] h-[18rem]' 
            key={index} 
            src={img} 
            alt="error in loading" 
          />
        ))}
      </figure>

\
      <figure 
        id="slider" 
        ref={slider5} 
        className='w-full h-[10rem] md:h-[20rem] flex flex-nowrap gap-[2rem] items-center justify-center overflow-hidden'
      >
        {images2.concat(images2).map((img, index) => (
          <img 
            className='min-w-[15rem] h-[18rem]' 
            key={index} 
            src={img} 
            alt="error in loading" 
          />
        ))}
      </figure>

      {/* Slider 3 */}
      <figure 
        id="slider" 
        ref={slider6} 
        className='w-full h-[10rem] md:h-[20rem]  flex flex-nowrap gap-[2rem] items-center justify-center overflow-hidden'
      >
        {images2.concat(images2).map((img, index) => (
          <img 
            className='min-w-[15rem] h-[18rem]' 
            key={index} 
            src={img} 
            alt="error in loading" 
          />
        ))}
      </figure>
    </div>
</div>
</div>
  )
}
export default Secondpage