import React from 'react'
import Sidbarteach from '../../dashbordteach/sidbar/Sidbarteach'
import Navbarteach from '../../dashbordteach/navbar/Navbarteach'
import"./Teacher.css"
function Teacher() {
  return (
    <div className='Teacher'>
       <Sidbarteach/>
        <div className='Teachercontainer'>
          <Navbarteach/>
        </div>
    </div>
  )
}

export default Teacher
