import React from 'react'
import Sidebar from '../../dashbord/sidebar/Sidebar'
import Navbar from '../../dashbord/navbar/Navbar'
import"./ListeU.css" 
import Dataetu from '../../dashbord/Dataetu/Dataetu'
function ListeU() {
  return (
    <div className="listU">
    <Sidebar/>
    <div className="listUContainer">
      <Navbar/>
      <Dataetu/>
    </div>
  </div>
  )
}

export default ListeU
