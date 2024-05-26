import "./New.css";
 
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import Sidebar from "../../dashbord/sidebar/Sidebar";
import Navbar from "../../dashbord/navbar/Navbar";

const New = () => {
  const [file, setFile] = useState("");

  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>Add new teacher</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput">
                <label>first_tname</label>
                <input type="text" placeholder="roumaissa"></input>
              </div>
              <div className="formInput">
                <label>laste_name</label>
                <input type="text" placeholder="ghriballah"></input>
              </div>
              <div className="formInput">
                <label>email</label>
                <input type="email" placeholder="romaghriballh@gmail.com"></input>
              </div>
              <div className="formInput">
                <label>password</label>
                <input type="password"/> 
              </div>
              <div className="formInput">
                <label>module</label>
                <input type="text" placeholder="math"/> 
              </div>
              <div className="formInput">
                <label>livele</label>
                <input type="text" placeholder="master1"/> 
              </div>
              <div className="formInput">
                <label>groupe</label>
                <input type="text" placeholder="g3"/> 
              </div>
             
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
