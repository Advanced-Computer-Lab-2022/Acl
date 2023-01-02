import axios from "axios";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router-dom";
import StarsIcon from '@mui/icons-material/Stars';
import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined,DownloadOutlined  } from '@ant-design/icons';
import { Avatar, Card,Row,Col } from 'antd';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../components/NavbarrIndiv";

const { Meta } = Card;
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

const CoursesTrainee = () => {
  const {id} = useParams();
  const navigate=useNavigate();
  const [courses, setCourses] = useState([]);
  const [trainee, setTrainee] = useState([]);

  // const getCourse = async (id) => {
  //   return async function () {
  //     await axios
  //       .get(`http://localhost:7007/indiviualtrainee/getCourse/${id}`)
  //       .then((res) => {
  //         const course = res.data;
  //         coursesTitles.push(course);
  //         console.log(course);
  //       });
  //   };
  // };

   
  useEffect(() => {
  const getCourses = async (req, res) => {
    
    await axios
      .get(`http://localhost:7007/corporatetrainee/viewMyInst/${id}`)
      .then((res) => {
        const courses = res.data;
        console.log(courses);
        setCourses(courses);
      });
    courses.map(async(course)=>{await axios
      .get(`http://localhost:7007/instructor/viewTitleCourses/${course._id}`)
      .then((res) => {
        const trainee = res.data;
        // console.log(courses);
        setTrainee(trainee);
  })});
  };
  getCourses()
    
  }, [])
  return (
    // visualize authors in a table map over authors
    <div className="site-card-wrapper">
     <AdminSidebar/>
      <div className="indv">
<Row gutter={16}>
      
            {courses.map((course) => (
                
              <Col span={8}>
              <Card
              style={{
                width: 300,
              }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <a href=""><SettingOutlined key="setting" href=""/></a>,
                <a href=""><EditOutlined key="edit" href=""/></a>,
                <StarsIcon key="star" onClick={() =>navigate(`/individualtrainee/MyInstructorProfile/${course._id}`)}/>,
                ]}
            >
             
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={course.name}
                description={course.email}
              
                key={course._id}
                />
              </Card>
               </Col>
            ))}
            
          
          </Row>
          </div>
    </div>
  );
};
export default CoursesTrainee;

// var subject='';
// var title='';
// var min=0.0;
// var max=0.0;
// var minR=0.0;
// var maxR=0.0;
// var search='';
// var instructorName='';
// const Yarab = () => {
//     const {id} = useParams();
// async function onClickView() {
//   try {
//     //const {id} = useParams();
//      await axios.get(`/indiviualtrainee/viewMyInst/${id}`)
//     .then((response) => {
//       console.log(response.data);
//       if(response.status==200)
//       {
//      window.location ='/UserProfile';
//       }
//     })
//     .catch((err) => {
//       console.log("Error while connecting to db", err);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }
// const Instructors = props => (
  
//     <tr>
//       <td  className='hidetd' >uyuyuy</td>
      
//       <td>{props.instructors.username}</td>
      
//       {/* <td>{props.course.totalHours}</td> */}
      
//       {/* <td>{parseFloat(props.course.price.$numberDecimal)}</td> */}
//       <td><button onClick={()=>
//         onClickView(props.instructors._id)} type="button" value="view"className="btn btn-primary">View Instructor</button></td>
      
//     </tr>
    
//   )
  
// }

// export default class ViewInstructors  extends Component
// {
//     constructor(props)
//     {
//         super(props);

//         this.state ={
//             username:'',
//             password:'' ,
//             email:0.0,
//             biography:0,
//             rating:'',
//             ratingCounter:'',
//             instructors:[]
//         }
//     }

//     async componentDidMount()
//     {
//       try{
//        await axios.post('http://localhost:7007/instructor/users')
//        .then(response => {
//         this.setState({instructors: response.data})
//        }) 
//        .catch((error)=>{
//         console.log(error);
//        })
//       }catch (error) {
//         console.error(error);
//       }

//     }

//     allinstructors()
//     {

//         return this.state.instructors.map(currentInstructors =>{
//             return <Instructors instructors={currentInstructors} />;
//         })
//     }

//     updateInstructor(e) { 
        
//       this.setState({
//           instructor: e.target.value
//         }) 
//         instructorName=e.target.value;
//   }
//   updateSubject(e) { 
        
//     this.setState({
//         subject: e.target.value
//       }) 
//       subject=e.target.value;
// }
// updateRating(e) { 
        
//   this.setState({
//       Rating: e.target.value
//     }) 
// }

// updatemax(e) { 
        
//   this.setState({
//       max: e.target.value
//     })
//       max=e.target.value;
// }

// updatemaxR(e) { 
        
//   this.setState({
//       maxR: e.target.value
//     })
//       maxR=e.target.value;
// }

// updateTitle(e) { 
        
//   this.setState({
//       title: e.target.value
//     }) 
//       title=e.target.value;
// }

// updateSearch(e) { 
//   search= e.target.value;
//   this.setState({
//       search: e.target.value
//     })
    
//   }

//     render() {
//     return (
//       <div className='container'>
//         <h3>All Instructors</h3>
//         <form onSubmit={this.onSubmit}>
//         <table className="table">
//           <thead className="thead-light">
//             <tr>
//               <th>Username</th>
              
    
//               <th></th>
//             </tr>
//           </thead>
//           <tbody>
//             { this.allinstructors() }
//           </tbody>
//         </table>
//         </form>
//       </div>
//     )
//   }
// }