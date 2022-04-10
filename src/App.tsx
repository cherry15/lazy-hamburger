import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import About from './pages/about'
import Home from './pages/home'
import Cats from './pages/cats'
import Dogs from './pages/dogs'
import Contact from './pages/contact'

const App = () => {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/cats" element={<Cats />} />
       <Route path="/dogs" element={<Dogs />} />
       <Route path="/contact" element={<Contact />} />
     </Routes>
    </div>
  )
}

export default App
