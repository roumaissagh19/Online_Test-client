import "./Dataetu.css";
import { DataGrid } from "@mui/x-data-grid";
 import { userColumns,userRows } from "../../datatablesourceetu";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MdBrowserUpdated } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
const Dataetu = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="" style={{ textDecoration: "none" }}>
              <div className="viewButton">
              <MdBrowserUpdated className="icon"/>
                update</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              <MdOutlineDeleteOutline />
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New etudent
        <Link to="/newetu" className="link">
        <IoMdPersonAdd />
          Add New
         
        </Link>
      </div>
      
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Dataetu;
