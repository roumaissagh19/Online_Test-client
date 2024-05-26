import "./Newetu.css";
 
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
 
import Sidebar from "../../dashbord/sidebar/Sidebar";
import Navbar from "../../dashbord/navbar/Navbar";

const Newetu = () => {
 

  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>Add new student </h1>
        </div>
        <div className="bottom">
           
          <div className="right">
            <form>
               
              <div className="formInput">
                <label>first_tname</label>
                <input type="text" placeholder="roumaissa"></input>
              </div>
              <div className="formInput">
                <label>laste_name</label>
                <input type="text" placeholder="ghriballah"></input>
              </div>
               
              <div className="formInput">
                <label>password</label>
                <input type="password"/> 
              </div>
               
               
              <div className="formInput">
                <label>Num_inscription</label>
                <input type="text" placeholder="21436587"/> 
              </div>
             
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newetu;
