import React from 'react'
import"./HomeD.css"
import Sidebar from '../../dashbord/sidebar/Sidebar'
import Navbar from '../../dashbord/navbar/Navbar'
import Widget from '../../dashbord/Widgets/Widget '
import Featured from '../../dashbord/Featured/Featured'
import Chart from '../../Chart/Chart'

function HomeD() {
  return (
    <div className="home"> 
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="teacher"/>
          <Widget type="student"/>
          <Widget type="result"/>
           
          </div>
          <div className="charts">
          <Featured/>
          <Chart title="Last 6 Months " aspect={2 / 1}/> 
        </div>
          </div>
         
         
    </div>

  )
}

export default HomeD