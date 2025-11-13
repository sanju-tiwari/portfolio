import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./header";
import scr from "../assets/img/sc1.png"
import scr2 from "../assets/img/sc2.png"
import scr3 from "../assets/img/sc3.png"
import scr4 from "../assets/img/sc4.png"
import scr5 from "../assets/img/sc5.png"
import scr6 from "../assets/img/sc6.png"

function Project() {
  const cursor = useRef(null);
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const fourth = useRef(null);
  const five = useRef(null);
  const six = useRef(null);
  const navigate = useNavigate()
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(()=>{
    const tl = gsap.timeline()
    tl.to(first.current , {
      scrollTrigger:{
        trigger:first.current,
        pin:true,
        pinType:"transform",
        scrub:true,
      },
      opacity:0,
      delay:3
    } ).to(second.current , {
        scrollTrigger:{
        trigger:second.current,
        pin:true,
        pinType:"transform",
        scrub:true,
      },
      opacity:0,
      delay:3
    }).to(third.current , {
        scrollTrigger:{
        trigger:third.current,
        pin:true,
        pinType:"transform",
        scrub:true,
      },
      opacity:0,
      delay:3
    } ).to(fourth.current , {
        scrollTrigger:{
        trigger:fourth.current,
        pin:true,
        pinType:"transform",
        scrub:true,
      },
      opacity:0,
      delay:3
    } ).to(five.current ,{
            scrollTrigger:{
        trigger:five.current,
        pin:true,
        pinType:"transform",
        scrub:true,
      },
      opacity:0 ,
      delay:3
    }).to(six.current ,{
            scrollTrigger:{
        trigger:six.current,
        pin:true,
        pinType:"transform",
        scrub:true,
      },
      opacity:0 ,
      delay:3
    })
  })

  useGSAP(() => {
    const mouse = (e) => {
      const cursorSize = 30;
      gsap.to(cursor.current, {
        x: e.clientX - cursorSize / 2,
        y: e.clientY - cursorSize / 2,
        duration: 0.3,
        ease: "power1",
      });
    };
    window.addEventListener("mousemove", mouse);
    return () => {
      window.removeEventListener("mousemove", mouse);
    };
  }, []);
   
    const handleclick1 = ()=>{
    window.location.href = ("https://spontaneous-pastelito-d076fd.netlify.app/")
  }
    const handleclick2 = ()=>{
    window.location.href = ("https://monumental-stardust-84dc84.netlify.app/")
  }
    const handleclick3 = ()=>{
    window.location.href = ("https://spontaneous-pastelito-d076fd.netlify.app/")
  }
    const handleclick4 = ()=>{
    window.location.href = ("https://k72-liart.vercel.app/")
  }
    const handleclick5 = ()=>{
    window.location.href = ("https://creator-swart.vercel.app/")
  }
     const handleclick6 = ()=>{
    window.location.href = ("https://medidoc-bice.vercel.app/")
  }


  return (
    <div className=" h-auto w-screen overflow-hidden ">
            <Header/>
      <div
        ref={cursor}
        className=" z-88 h-5 w-5 bg-white rounded-full fixed flex items-center justify-center uppercase exo-2 "
      ></div>
      <div className=" h-full w-full flex flex-col items-center">
        <div onClick={handleclick1} ref={first} className=" h-screen md:h-auto xl:h-screen w-screen relative overflow-hidden p-2 flex flex-col ">
          <div className=" h-full w-full border-2 border-white rounded-4xl overflow-hidden ">
            <div className=" w-full flex items-center justify-between h-30 p-5 ">
              <h1 className=" text-white roboto text-6xl md:text-9xl  ">01</h1>
              <button className=" md:flex items-center justify-center hidden border-[1px] border-white h-15 w-70 rounded-4xl hover:border-red-500 duration-150 ease-in-out  exo-2 uppercase text-white">
                Live Projects{" "}
              </button>
            </div>
            <div className=" h-full relative overflow-hidden w-full ">
              <img
                className=" w-full  object-cover md:object-contain md:relative absolute  top-50 md:top-0 "
                src={scr}
                alt=""
              />
              <div className="  w-full  z-99  flex items-center justify-center xl:justify-between  ">
                <div className=" xl:flex items-start flex-col ml-5 hidden  ">
                  <h1 className=" text-white kanit-extrabold ">Roles : </h1>
                  <h1 className=" text-white roboto ">Art direction</h1>
                  <h1 className=" text-white roboto ">Webdesign</h1>
                  <h1 className=" text-white roboto ">web development</h1>
                </div>
                <div className=" md:flex flex-col hidden items-center relative  ">
                  <h1 className=" text-6xl bitronor bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent ">
                    Pihunami
                  </h1>
                  <p className=" text-white text-sm text-center courgette-regular hidden xl:flex  mt-5 ">
                    “Pihunami brings you anime and movies online with smooth
                    streaming, <br /> endless choices, and nonstop entertainment
                    anytime, anywhere – all in one place.”
                  </p>
                </div>
                <h2 className=" text-white text-3xl exo-2 mr-5 hidden xl:flex  ">01/06</h2>
              </div>
            </div>
            <div className=" absolute w-full  md:hidden flex flex-col items-center justify-center  bottom-10  "  >
                     <h1 className=" text-6xl mr-10 bitronor text-center mb-5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent ">
                    Pihunami
                  </h1>
                  <button className=" text-white w-full text-2xl mr-10 " >Live Project</button>
            </div>
          </div>
        </div>
        <div onClick={handleclick2} ref={second} className=" h-screen md:h-auto xl:h-screen w-screen relative overflow-hidden p-2 flex flex-col  ">
          <div className=" h-full w-full border-2 border-white rounded-4xl overflow-hidden ">
            <div className=" w-full flex items-center justify-between h-30 p-5 ">
              <h1 className=" text-white roboto text-6xl md:text-9xl  ">02</h1>
              <button className=" md:flex items-center justify-center hidden border-[1px] border-white h-15 w-70 rounded-4xl hover:border-red-500 duration-150 ease-in-out  exo-2 uppercase text-white ">
                Live Projects{" "}
              </button>
            </div>
            <div className=" h-full relative overflow-hidden w-full ">
              <img
                className=" w-full h-[30rem]  object-contain top-0 "
                src={scr2}
                alt=""
              />
              <div className="  w-full  z-99  flex items-center justify-center xl:justify-between ">
                <div className=" xl:flex items-start flex-col ml-5 hidden  ">
                  <h1 className=" text-white kanit-extrabold ">Roles : </h1>
                  <h1 className=" text-white roboto ">Art direction</h1>
                  <h1 className=" text-white roboto ">Webdesign</h1>
                  <h1 className=" text-white roboto ">web development</h1>
                </div>
                <div className=" flex flex-col items-center  ">
                  <h1 className=" text-6xl bitronor mb-5 md:mb-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent ">
                    Shopora
                  </h1>
                  <p className=" text-white text-sm text-center courgette-regular hidden xl:flex mt-3 ">
                    “Shopra is your all-in-one shopping hub, bringing fashion,
                    lifestyle, and essentials <br /> with great prices, secure
                    checkout, and fast delivery anytime, anywhere.”
                  </p>
                </div>
                <h2 className=" text-white text-3xl exo-2 mr-5 xl:flex hidden ">02/06</h2>
              </div>
              <div className=" flex md:hidden mb-5 " >
                         <button className=" text-white w-full text-2xl  " >Live Project</button>
              </div>
            </div>
          </div>
        </div>
        <div  onClick={handleclick3} ref={third} className="h-screen md:h-auto xl:h-screen w-screen relative overflow-hidden p-2 flex flex-col ">
          <div className=" h-full w-full border-2 border-white rounded-4xl overflow-hidden ">
            <div className=" w-full flex items-center justify-between h-30 p-5 ">
              <h1 className=" text-white roboto text-6xl md:text-9xl  ">03</h1>
              <button className=" md:flex items-center justify-center hidden border-[1px] border-white h-15 w-70 rounded-4xl hover:border-red-500 duration-150 ease-in-out  exo-2 uppercase text-white ">
                Live Projects{" "}
              </button>
            </div>
            <div className=" h-full relative overflow-hidden w-full ">
              <img
                className=" w-full h-[30rem]  object-contain top-0 "
                src={scr3}
                alt=""
              />
              <div className="  w-full  z-99  flex items-center justify-center xl:justify-between  ">
                <div className=" hidden xl:flex items-start flex-col ml-5 ">
                  <h1 className=" text-white kanit-extrabold ">Roles : </h1>
                  <h1 className=" text-white roboto ">Art direction</h1>
                  <h1 className=" text-white roboto ">Webdesign</h1>
                  <h1 className=" text-white roboto ">web development</h1>
                </div>
                <div className=" flex flex-col items-center ">
                  <h1 className=" text-6xl bitronor md:mb-0 mb-5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent ">
                    Uber
                  </h1>
                  <p className=" text-white text-sm text-center courgette-regular hidden xl:flex mt-3 ">
                    “Uber connects you to safe, fast, and affordable rides
                    anytime, anywhere, with easy booking <br /> secure payments,
                    and reliable drivers at your service.”
                  </p>
                </div>
                <h2 className=" text-white text-3xl exo-2 mr-5 hidden xl:flex ">03/06</h2>
              </div>
                  <div className=" flex md:hidden mb-5 " >
                         <button onClick={handleclick3} className=" text-white w-full text-2xl  " >Live Project</button>
              </div>
            </div>
          </div>
        </div>
        <div onClick={handleclick4} ref={fourth} className="h-screen md:h-auto xl:h-screen w-screen relative overflow-hidden p-2 flex flex-col ">
          <div className=" h-full w-full border-2 border-white rounded-4xl overflow-hidden ">
            <div className=" w-full flex items-center justify-between h-30 p-5 ">
              <h1 className=" text-white roboto text-6xl md:text-9xl  ">04</h1>
              <button className=" md:flex items-center justify-center hidden border-[1px] border-white h-15 w-70 rounded-4xl hover:border-red-500 duration-150 ease-in-out  exo-2 uppercase text-white ">
                Live Projects{" "}
              </button>
            </div>
            <div className=" h-full relative overflow-hidden w-full ">
              <img
                className=" w-full h-[30rem] object-contain opacity-60 top-0 "
                src={scr4}
                alt=""
              />
              <div className="  w-full  z-99  flex items-center justify-center xl:justify-between ">
                <div className="  xl:flex hidden items-start flex-col ml-5 ">
                  <h1 className=" text-white kanit-extrabold ">Roles : </h1>
                  <h1 className=" text-white roboto ">Art direction</h1>
                  <h1 className=" text-white roboto ">Webdesign</h1>
                  <h1 className=" text-white roboto ">web development</h1>
                </div>
                <div className=" flex flex-col items-center ">
                  <h1 className=" text-6xl bitronor md:mb-0 mb-5  bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent ">
                    K72
                  </h1>
                  <p className=" text-white text-sm text-center courgette-regular xl:flex hidden  mt-3 ">
                    “Welcome to K72, where every action is crafted to nurture
                    your brand’s future”
                  </p>
                </div>
                <h2 className=" text-white text-3xl exo-2 mr-5  xl:flex hidden ">04/06</h2>
              </div>
                  <div className=" flex md:hidden mb-5 " >
                         <button onClick={handleclick4} className=" text-white w-full text-2xl  " >Live Project</button>
              </div>
            </div>
          </div>
        </div>
        <div onClick={handleclick5}  ref={five} className="  h-screen md:h-auto xl:h-screen w-screen relative overflow-hidden p-2 flex flex-col ">
          <div className=" h-full w-full border-2 border-white rounded-4xl overflow-hidden ">
            <div className=" w-full flex items-center justify-between h-30 p-5 ">
              <h1 className=" text-white roboto text-6xl md:text-9xl  ">05</h1>
              <button className=" md:flex items-center justify-center hidden border-[1px] border-white h-15 w-70 rounded-4xl hover:border-red-500 duration-150 ease-in-out  exo-2 uppercase text-white ">
                Live Projects{" "}
              </button>
            </div>
            <div className=" h-full relative overflow-hidden w-full ">
              <img
                className=" w-full h-[30rem] object-contain top-0 "
                src={scr5}
                alt=""
              />
              <div className="  w-full  z-99  flex items-center justify-center xl:justify-between ">
                <div className=" xl:flex hidden  items-start flex-col ml-5  ">
                  <h1 className=" text-white kanit-extrabold ">Roles : </h1>
                  <h1 className=" text-white roboto ">Art direction</h1>
                  <h1 className=" text-white roboto ">Webdesign</h1>
                  <h1 className=" text-white roboto ">web development</h1>
                </div>
                <div className=" flex flex-col items-center ">
                  <h1 className=" text-6xl bitronor md:mb-0 mb-5  bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent ">
                    Pixxel
                  </h1>
                  <p className=" text-white text-sm text-center courgette-regular xl:flex hidden mt-3 ">
                    “Pixxel transforms your photos with powerful, easy-to-use
                    editing tools, stunning filters <br /> AI enhancements, and
                    professional results—perfect for beginners and experts
                    alike”
                  </p>
                </div>
                <h2 className=" text-white text-3xl exo-2 mr-5 xl:flex hidden ">05/06</h2>
              </div>
                   <div className=" flex md:hidden mb-5 " >
                         <button onClick={handleclick5} className=" text-white w-full text-2xl  " >Live Project</button>
              </div>
            </div>
           
          </div>
        </div>
        <div onClick={handleclick6}  ref={six} className="  h-screen md:h-auto xl:h-screen w-screen relative overflow-hidden p-2 flex flex-col ">
          <div className=" h-full w-full border-2 border-white rounded-4xl overflow-hidden ">
            <div className=" w-full flex items-center justify-between h-30 p-5 ">
              <h1 className=" text-white roboto text-6xl md:text-9xl  ">06</h1>
              <button className=" md:flex items-center justify-center hidden border-[1px] border-white h-15 w-70 rounded-4xl hover:border-red-500 duration-150 ease-in-out  exo-2 uppercase text-white ">
                Live Projects{" "}
              </button>
            </div>
            <div className=" h-full relative overflow-hidden w-full ">
              <img
                className=" w-full h-[30rem] object-contain top-0 "
                src={scr6}
                alt=""
              />
              <div className="  w-full  z-99  flex items-center justify-center xl:justify-between ">
                <div className=" xl:flex hidden  items-start flex-col ml-5  ">
                  <h1 className=" text-white kanit-extrabold ">Roles : </h1>
                  <h1 className=" text-white roboto ">Art direction</h1>
                  <h1 className=" text-white roboto ">Webdesign</h1>
                  <h1 className=" text-white roboto ">web development</h1>
                </div>
                <div className=" flex flex-col items-center ">
                  <h1 className=" text-6xl bitronor md:mb-0 mb-5  bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent ">
                    Medidoc
                  </h1>
                  <p className=" text-white text-sm text-center courgette-regular xl:flex hidden mt-3 ">
                  "Book appointments easily, consult trusted doctors online, and manage your health anytime, anywhere with ease."
                  </p>
                </div>
                <h2 className=" text-white text-3xl exo-2 mr-5 xl:flex hidden ">06/06</h2>
              </div>
                   <div className=" flex md:hidden mb-5 " >
                         <button onClick={handleclick6} className=" text-white w-full text-2xl  " >Live Project</button>
              </div>
            </div>
           
          </div>
        </div>

      </div>
    </div>
  );
}

export default Project;
