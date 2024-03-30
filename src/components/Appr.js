import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './page-home/App'
import Logintch from './page-home/Logintch'
import Loginstd from './page-home/Loginstd'
import About from './page-home/About'
const Appr = () => {
  return (
     <>
     <Routes>
        <Route path='/' element={<App/>}/> 
        <Route path='/Logintch' element={<Logintch/>}/> 
        <Route path='/Loginstd' element={<Loginstd/>}/> 
        <Route path='/About' element={<About/>}/> 
     </Routes>
     </>
  )
}

export default Appr
