export const userColumns = [ 
   
  { field: "id", headerName: "ID", width: 70  },
  {
   
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
 {
   field: "first_name",
 headerName: "First_name",
 width: 100,
},
  {
    field: "laste_name",
    headerName: "Laste_name",
    width: 100,
  },

  {
    field: "email",
    headerName: "Email",
    width: 100,
  },
  {
    field: "password",
    headerName: "Password",
    width: 100,
  },
  {
    field: "level",
    headerName: "Level",
    width: 100,
  },
  {
    field: "groupe",
    headerName: "Groupe",
    width: 100,
  },
 
  

  {
    field: "module",
    headerName: "Module",
    width: 100,
  },
 
  
];

//temporary data
export const userRows = [
  {
    id: 1,
    first_name: "Snow",
    laste_name:"room",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    
    email: "1snow@gmail.com",
    level:"l3",
    groupe:"groupe2",
    module:"thl",
  },
  {
    id: 2,
    first_name: "Jamie Lannister",
    laste_name:"room",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    level:"l3",
    groupe:"groupe2",
    module: "se",
  },
  {
    id: 3,
    first_name: "Lannister",
    laste_name:"room",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    level:"l3",
    groupe:"groupe2",
    module:"archi",
  },
  {
    id: 4,
    first_name: "Stark",
    laste_name:"room",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    level:"l3",
    groupe:"groupe2",
    module:"algo",
  },
  
];
