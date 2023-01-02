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
const Viewrate = () => {

    const [rate,   setRate  ]= useState([])
    const instructorId = useParams('id');
    const [error, setError] = useState(null);
    const getRate = async () =>{
   // const params = new URLSearchParams(window.location.search);
    //const instructorId = params.get('id');
    //const {instructorId} = useParams();
    const blabla={instructorId}.instructorId.id
    console.log({instructorId}.instructorId.id);
    console.log(blabla)
    await axios.get(`/instructor/viewratings/${blabla}`).then(
        (res) =>{
            const resRate = res.data
            console.log(resRate)
            setRate(resRate)
        })}

      return (


          
        <div className="Viewrate">
            <Box sx={{marginBottom: 2}}>
            <Button variant="contained"
            onClick={getRate}
            margin="normal"
            padding="normal"
            >Load Ratings</Button>
            {/* margin */}
            </Box>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Course Name</StyledTableCell>
            <StyledTableCell align="center">Rate</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rate.map((instructor) => (
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
              <TableCell align="center">{instructor.rate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div>
    
         
          
       
      )
    }
    export default Viewrate