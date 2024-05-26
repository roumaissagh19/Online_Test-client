import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './page-home/App'
import Logintch from './page-home/Logintch'
import Loginstd from './page-home/Loginstd'
import About from './page-home/About'
import Testimonial from './page-home/Testimonial'
import Contact from './page-home/Contact'
import HomeD from "./Admin/pages/home/HomeD"
import Login from "./Admin/pages/login/Login"
import Liste from"./Admin/pages/liste/Liste"
import Single from"./Admin/pages/single/Single"
import New from"./Admin/pages/new/New"
import ListeS from './Admin/pages/listeS/ListeS'
import Groupe from './Admin/pages/groupe/Groupe'
import ListeU from './Admin/pages/listeU/ListeU'
import Teacher from './teacher/pageteach/Hometeah/Teacher'
import Newetu from './Admin/pages/Newetu/Newetu'
 
 
 
const Appr = () => {
  return (
     <>
     <Routes>
         
        <Route path='/' element={<App/>}/> 
        <Route path='/Logintch' element={<Logintch/>}/> 
        <Route path='/Loginstd' element={<Loginstd/>}/> 
        <Route path='/About' element={<About/>}/> 
        <Route path='/testimonail' element={<Testimonial/>}/> 
        <Route path='/contact' element={<Contact/>}/> 
        <Route path="HomeD" element={<HomeD/>}/>
        <Route path="Admin" element={<Login/>}/>
        <Route path='teacher' element={<Liste/>}/>
        <Route path='room' element={<ListeS/>}/>
        <Route path='etudent' element={<ListeU/>}/>
        <Route path='prof' element={<Teacher/>}/>
        <Route path='groupe' element={<Groupe/>}/>
        <Route path='usersid' element={<Single/>}/>
        <Route path='new' element={<New/>}/>
        <Route path='newetu' element={<Newetu/>}/>
     </Routes>
     </>
  )
}

export default Appr
