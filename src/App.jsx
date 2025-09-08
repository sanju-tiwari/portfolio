import React from 'react'
import Frontpage from './component/frontpage'
import "./App.css"
import Secondpage from './component/secondpage'
import About from './component/about'

import { Element } from 'react-scroll';
import {Route, Routes} from 'react-router-dom'
import Project from './component/projects'
import Contact from './component/contactes'
import Notfound from './component/notfound'



const App = () => {
  return (
   <div className='h-full w-full bg-black overflow-hidden'>
             <Routes>
          <Route path="/" element={<Frontpage />}/>
          <Route path="/projects" element={<Project/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Notfound />} />
        </Routes>

    </div>
  )
}

export default App
