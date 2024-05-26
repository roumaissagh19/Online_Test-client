import Datatable from "../../dashbord/datatable/Datatable"
import Navbar from "../../dashbord/navbar/Navbar"
import Sidebar from "../../dashbord/sidebar/Sidebar"
import "./Liste.css"
 

const Liste = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default Liste