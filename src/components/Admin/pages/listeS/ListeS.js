import React from 'react'
import Sidebar from '../../dashbord/sidebar/Sidebar'
import Navbar from '../../dashbord/navbar/Navbar'
import"./ListeS.css"
import WidgetSt from '../../dashbord/WidgetSt/WidgetSt'
function ListeS() {
  return (
    <div className='ListeS'> 
        <Sidebar/>
        <div className='ListeSContainer' >
         <Navbar/>
            <div className="toop">
          <h1>This is the level list</h1>
             </div>
           <div className="widgetSt">
              <WidgetSt type="licence1"/>
              <WidgetSt type="licence2"/>
              <WidgetSt type="licence3"/>
              <div className="master">
              <WidgetSt type="master1"/>
              <WidgetSt type="master2"/>
              </div>
             </div>
        </div>
    </div>
  )
}

export default ListeS
