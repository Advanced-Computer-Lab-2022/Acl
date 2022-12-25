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
import { useNavigate } from 'react-router-dom';

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


const CoursesList = () => { 
    const [courses,SetCourses] = useState([]);
    const {id} = useParams();
    const getCourses =  async () => {
         await axios.get(`http://localhost:7007/instructor/findMyCourses/${id}`).then(
        (res) => { 
            const courses = res.data
            console.log(courses)
            SetCourses(courses)
            
        }
         );
    }

  
    const navigate = useNavigate();
    const onClick = () => {navigate("/instructor/createExam");}
  
      const onClick2=()=>{navigate('/ViewCourses')}
      const onClick3=()=>{navigate('/ViewMyCourses')}
      const onClick4=()=>{navigate(`/ViewMyRatings/${id}`)}
      const onClick5=()=>{navigate('/ViewPrices')}
      const onClick6=()=>{navigate('/ContractForm')}
      const onClick8=()=>{navigate(`/viewmyreviews/${id}`)}
      //const onClick7=()=>{navigate('/hi')}
    return(

        // visualize authors in a table map over authors
        <div className="UsersList">
            <Box sx={{marginBottom: 2}}>
            <Button variant="contained"
            onClick={getCourses}
            margin="normal"
            padding="normal"
            >Load Courses</Button>
            {/* margin */}
            </Box>
            
        
        
            
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Title</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map((course) => (
            <TableRow
            hover
            sx={{
                "&:hover":{
                cursor: "pointer",
                backgroundColor: "#f5f5f5",
                width: "100%"
                }
            }}
            onClick={() => window.location.href=`/InstructorHome?userId=${course._id}`}
              key={course._id}

              >
              <TableCell align="center">{course.title}</TableCell>
              <TableCell align="center">{course.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    <button style={{width:180,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}} 
        onClick={onClick}>
        Create Exam</button>
        {/* <button style={{width:180,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}} 
        onClick={() => window.location.href=`/CreateCourses?userId=${author._id}}`}> 
        Create Course   
        </button> */}
        <button style={{width:180,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}}
        onClick={onClick2}>
        View Courses
        </button>
        <button style={{width:180,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}}
        onClick={onClick3}>
        View My Courses </button>
        <button style={{width:180,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}}
        onClick={onClick4}>
        View My Ratings </button>
        <button style={{width:180,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}}
        onClick={onClick8}>
        View My Reviews </button>
      <button style={{width:180,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}}
      onClick={onClick5}>
      View Prices </button>
      <button style={{width:180,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}} 
      onClick={onClick6}>
      Contract Form</button>
      <button style={{width:230,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}} 
      onClick={() => window.location.href=`/Discount/${id}`}> Add Course Discount
      </button>
      <button style={{width:230,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}} 
      onClick={() => window.location.href=`/UploadYouSubi/${id}`}>Add Video Subtitle   
      </button>
      <button style={{width:230,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}} 
      onClick={() => window.location.href=`/UploadYouPrevi/${id}`}>Add Video Preview 
      </button>
      <button style={{width:230,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}} 
      onClick={() => window.location.href=`/selectcountry/${id}`}>Select Your Country
      </button>
      <button style={{width:230,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}} 
      onClick={() => window.location.href=`/ReportProbi/${id}`}>Report A Course
      </button>
      <button style={{width:230,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}} 
      onClick={() => window.location.href=`/ViewReportsi/${id}`}>View Previous Reports
      </button>
      <button style={{width:230,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}} 
      onClick={() => window.location.href=`/Followupsi/${id}`}>Followup
      </button>
          
          
        </div>
                

    )
}
export default CoursesList;