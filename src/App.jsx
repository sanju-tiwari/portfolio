import React from 'react'
import Frontpage from './component/frontpage'
import "./App.css"
import Secondpage from './component/secondpage'
import About from './component/about'
import Project from './component/Project'
import Contact from "./component/Contact"
import { Element } from 'react-scroll';



const App = () => {
  return (
   <div className='h-full w-full bg-black overflow-hidden'>
      <Element name="home"><Frontpage /></Element>
      <Element name="second"><Secondpage /></Element>
      <Element name="about"><About /></Element>
      <Element name="projects"><Project /></Element>
      <Element name="contact"><Contact /></Element>
    </div>
  )
}

export default App
