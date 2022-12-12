
import axios from 'axios';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';  
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import{useParams} from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const { useState, Component } = require("react");
const Viewreviews = () => {

    const [review,   setReview  ]= useState([])
    const instructorId = useParams('id');
    const [error, setError] = useState(null);
    const getReviews = async () =>{
   // const params = new URLSearchParams(window.location.search);
    //const instructorId = params.get('id');
    //const {instructorId} = useParams();
    const blabla={instructorId}.instructorId.id
    console.log({instructorId}.instructorId.id);
    console.log(blabla)
    await axios.get(`/instructor/viewreviews/${blabla}`).then(
        (res) =>{
            const resReview = res.data
            console.log(resReview)
            setReview(resReview)
        })}

      return (


          
        <div className="viewReview">
            <Box sx={{marginBottom: 2}}>
            <Button variant="contained"
            onClick={getReviews}
            margin="normal"
            padding="normal"
            >Load Reviews</Button>
            {/* margin */}
            </Box>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Course Name</StyledTableCell>
            <StyledTableCell align="center">Reviews</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {review.map((instructor) => (
            <TableRow
            hover
            sx={{
                "&:hover":{
                cursor: "pointer",
                backgroundColor: "#f5f5f5",
                width: "100%"
                }
            }}
            onClick={() => window.location.href=`/InstructorHome?userId=${instructor._id}`}
              key={instructor._id}

              >
              <TableCell align="center">{instructor.course}</TableCell>
              <TableCell align="center">{instructor.Review}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div>
    
         
          
       
      )
    }
    export default Viewreviews;