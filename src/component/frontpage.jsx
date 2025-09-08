import { useGSAP } from "@gsap/react"
import {useEffect, useRef, useState} from "react"
import ScrollTrigger from "gsap/ScrollTrigger"
import gsap from "gsap";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Secondpage from "./secondpage";
import About from "./about";
import Idea from "./Project";
import ContactMail from "./Contact";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import CurvedLoop from "@/components/CurvedLoop";
import Header from "./header";

gsap.registerPlugin(ScrollTrigger);

function Frontpage(){ 
  const contaner = useRef(null)
  const textRef = useRef(null);
  const nav = useRef([])
  const tl = gsap.timeline()
  const para = useRef(null)
  const button = useRef(null)
  const photo = useRef(null)
  const skill = useRef(null)
  const html = useRef(null)
  const css = useRef(null)
  const java = useRef(null)
  const react = useRef(null)
  const tail = useRef(null)
  const Gsap = useRef(null)
  const git = useRef(null)
  const containerRef = useRef(null);
  const topImgRef = useRef(null);
  const custom = useRef(null)


  function Model() {
  const { scene } = useGLTF("/model/luffy_hat.glb"); 
  const modelRef = useRef();


  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; 
    }
  });

  return <primitive ref={modelRef} object={scene} scale={[3,3,3]} />;
}
   useGSAP(()=>{
     const mousemove = (e)=>{
          const cursorSize = 250;
       gsap.to(custom.current , {
        x:e.clientX - cursorSize / 2 ,
        y:e.clientY - cursorSize / 2 ,
        duration:0.3,
        ease:"power1",
    
       })         
     
        gsap.to(topImgRef.current, {
        clipPath: `circle(${cursorSize / 2}px at ${e.clientX}px ${e.clientY}px)`,
        duration: 0.3,
        ease: "power2.out",
      });
     }

 window.addEventListener("mousemove" , mousemove)

 return ()=>{
  window.removeEventListener("mousemove" , mousemove)
 }

   })
    
  useGSAP(() => {
    const text = textRef.current;
    const characters = text.innerText.split("");

    text.innerHTML = "";

    characters.forEach((char) => {
      const spans = document.createElement("span");
      spans.textContent = char;
      spans.style.display = "inline-block";
      text.appendChild(spans);
      if (char === "S" || char === "A" || char === "N" || char === "J" || char === "U") {
        spans.className = "text-red-400"; 
      }
    });

    tl.from(nav.current, {
      x: "-100%",
      opacity: 0,
      stagger: 0.4,
      duration: 0.6,
    })
      .fromTo(
        text.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.05, duration: 0.5 }
      ).from(
        para.current,{
          opacity: 0,
          duration: 0.3,
          ease: "power3.inOut",
        }
      ).from(
        photo.current,{
          opacity: 0,
          duration: 0.3,
          ease: "power3.inOut",
        }
      ).from(
        button.current,{
          y:"100%",
          opacity: 0,
          duration: 0.3,
          ease: "power3.inOut",
        }
      )
  });

  useGSAP(()=>{
  const tl = gsap.timeline({
            scrollTrigger: {
              trigger: contaner.current,
              start: "top top",
              end: "+=2500",
              scrub: true,
              pin: true,
            },
          });
  

  })
    const items = [
    { text: "HOME", to: "home", type: "scroll" },
    { text: "PROJECT", to: "/projects", type: "route" },
    { text: "CONTACT", to: "/contact", type: "route" },
  ];

 
    return (
      <div className="text-white h-auto w-screen relative ">
        <div ref={custom} className=" group fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 boder-2 border-white drop-shadow-[10px_10px_20px_gold] " ></div>
     <div
      ref={containerRef}
      className="absolute z-0 w-full h-screen overflow-hidden"
    >

      <img
        src="/assets/hover2.jpg"
        alt="back"
        className="absolute opacity-50 inset-0 w-full h-full object-cover"
      />
      <img
        ref={topImgRef}
        src="/assets/hover.jpg"
        alt="front"
        style={{clipPath:"circle(0px at 0px 0px)"}}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  <div className="relative text-center roboto ">
       <Header/>
    </div>
        <div className="kanit-extrabold relative flex items-center justify-center overflow-hidden md:h-[10rem] lg:h-[15rem] ">
          <h1 ref={textRef} 
          className=" w-[100%] flex items-center justify-center lg:mt-[-1rem]  text-[3rem] md:text-[8rem] lg:text-[10rem] xl:text-[14rem] "
           >HI,I'M<span className="text-red-400  " >SANJU</span>   
          </h1>
        </div>     
        <div className=" w-full flex items-center justify-center " >
             <div className=" w-100 h-[20rem] " >
              <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 3, 3]} />
      <Model />
    </Canvas>
          </div>  
          </div> 
         <div className=" w-full relative mt-5  ">
            <div className=" w-full bg-white h-[1px] "></div>
            <div className=" flex w-full items-center mt-10 justify-between " >
            <h1 className=" bitronor text-2xl ml-5  hidden md:flex  "> Art director </h1>  
              <p className=" roboto md:w-2/5 text-center md:hidden lg:flex ">I design and develop websites that do more than look good—they tell stories, evoke emotions, and make brands feel alive.</p>
               <h1 className="bitronor uppercase text-2xl mr-5 hidden md:flex ">
                Web dEVELOPER
               </h1>
            </div>
          </div> 
         <Secondpage/> 
          <About/> 
          <Idea/>

<CurvedLoop 
  marqueeText="SEND ✦ AN ✦ EMAIL ✦"
  speed={3}
  curveAmount={145}
  direction="right"
  interactive={true}
  className="custom-text-style"
/>
</div>                                                                      
    )}
export default Frontpage