import React from 'react'
import Sidebar from '../../dashbord/sidebar/Sidebar'
import "./Groupe.css"
import Navbar from '../../dashbord/navbar/Navbar'
import WidgetG from '../../dashbord/WidgetG/WidgetG'
 
import { Link } from 'react-router-dom'
function Groupe() {
  return (
    <div className='Groupe'>
       <Sidebar/>
       <div className='GroupeContainer'>
        <Navbar/>
        <div className="datatagroupe">
         the groupe list
        <Link to="/" className="link">
        
          Add New groupe
         
        </Link>
      </div>
          <div className='WidgetG'>
            <WidgetG type="groupe1"/>
            <WidgetG type="groupe2"/>
            <WidgetG type="groupe3"/>
            <WidgetG type="groupe4"/>
            <WidgetG type="groupe4"/>
            <WidgetG type="groupe6"/>
          </div>
       </div>
    </div>
  )
}

export default Groupe
