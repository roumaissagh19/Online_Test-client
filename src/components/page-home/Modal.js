import React from "react";
import "./Modal.css";
import { Link } from "react-router-dom";
 
function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>join us teacher or student</h1>
        </div>
        <div className="footer">
        <Link to='/Logintch'>
          <button> 
            
               Teacher
          </button>
          </Link>
          <div/>
           
          <Link to='/Loginstd'>
        <button > student</button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Modal;
