import { useGSAP } from "@gsap/react"
import { Link } from 'react-scroll';
import {useRef} from "react"
import ScrollTrigger from "gsap/ScrollTrigger"
import gsap from "gsap";


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
 
    return (
      <div className="text-white h-auto w-screen p-[2rem]">
      <div className="text-center roboto md:p-4">
  <ul className="flex items-center text-gray-300 justify-around">
    {[
      { text: "HOME", to: "home" },
      { text: "ABOUT", to: "about" },
      { text: "PROJECTS", to: "projects" },
      { text: "CONTACT", to: "contact" },
    ].map((item, index) => (
      <li key={index} className="text-[1rem]">
        <Link
          to={item.to}
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          className="hover:text-red-400 cursor-pointer transition-all duration-300 ease-in-out"
        >
          {item.text}
        </Link>
      </li>
    ))}
  </ul>
</div>
    
   
        <div className="kanit-extrabold flex items-center justify-center overflow-hidden md:h-[10rem] lg:h-[15rem]">
          <h1 ref={textRef} 
          className=" w-[100%] flex items-center justify-center lg:mt-[-1rem]  text-[3rem] md:text-[8rem] lg:text-[12rem] xl:text-[14rem] "
           >HI,I'M<span className="text-red-400  " >SANJU</span>   
          </h1>
        </div>        
        <div className="flex flex-col items-center lg:mt-[-2rem] justify-center md:flex md:items-center md:justify-center xl:justify-around md:gap-[2rem] lg:flex-row lg:items-start  lg:justify-between lg:pointer-events-none  ">
          <div>
          <p ref={para} className="rbitron text:[1rem] md:w-[35rem] lg:mt-[2rem] lg:w-[30rem] md:text-[1.2rem]
           lg:text-[1.2rem] text-center font-light" >
          "A passionate front-end web developer with a love for crafting dynamic, responsive, and visually stunning websites. I specialize in modern technologies like React, GSAP, bringing creative ideas to life with smooth animations and interactive designs. My goal is to build seamless, user-friendly experiences that leave a lasting impression. I'm constantly learning, exploring new tools, and pushing the limits of what’s possible on the web. Let’s collaborate and turn ideas into reality!😍"
          </p> 
          </div>      
   
        </div>
      </div>                                                                      
    )}
export default Frontpage