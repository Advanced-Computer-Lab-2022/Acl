import { useEffect, useState } from "react";
import Paper from '@mui/material/Paper';
// const { useState } = require("react");
import{useParams} from 'react-router-dom';  
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from 'react-bootstrap/Table';
import { styled } from '@mui/material/styles';  
import Navbar from "./Navbarr";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const {  Component } = require("react");

const SetPromotion = () => {
//const {courseId} = params.get("courseId");
const [x,setX ] = useState("");
  const [discountamount, setDiscountAmount] = useState("");
  const [startdate,setStartDate ] = useState("");
  const [enddate,setEndDate ] = useState("");
  const [error, setError] = useState(null);
  const {id} = useParams();
  const [empty,setEmpty]=useState([]);
  const [course,setCourse] =useState("")
  const [isChecked, setIsChecked] = useState(false);

  // const {id1}=req.query.courseId
  const handleSubmit = async (e) => {
    e.preventDefault();
    const discount = {id,discountamount, startdate, enddate};
    
    const response = await fetch(`/admin/definepromotion/?q=${x}`,{
      method: "PATCH",
      body: JSON.stringify(discount),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const J = await response.json();
     if (!response.ok) {
      setError(J.error);
      setEmpty(J.empty);
    }
    
    
    if (response.ok) {
      setEmpty([]); 
      setDiscountAmount("");
      setStartDate("");
      setEndDate("");
      setError(null);
      console.log("new Discount added!");
    }
  };
  useEffect(() => {
  const fetchCourses=async ()=> {
            const v=id
            const response =await fetch(`http://localhost:7007/admin/viewalladmin/${id}`,{
              method: "GET",
          
              headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
              },
            });
            const json=await response.json()
            console.log(json)
            if(response.ok){ setCourse(json)}
           
           
          }
          fetchCourses()

  }, [])

  return (
    <div>
      <div>
      <Navbar/>
      </div>
      <div className="main">
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
          </TableRow>
        </TableHead>

      <TableBody>
          {course && course.map((author) => (
            
            <TableRow
            hover
            sx={{
                "&:hover":{
                cursor: "pointer",
                backgroundColor: "#f5f5f5",
                width: "100%"
                }
            }}
            onClick={() => {window.location.href=`/admin/definepromotion/${author._id}`}}
              key={author._id}
              
              >
              <TableCell align="center">{author.title}</TableCell>
              <TableCell align="center">{author.price}</TableCell>
            </TableRow>
            
          ))}
        </TableBody>
     
    </Table>
    </TableContainer>
    </div>
   
    </div>
  );
};

export default SetPromotion;