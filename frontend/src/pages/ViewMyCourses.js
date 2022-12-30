import CoursesTrainee from "../components/CoursesTrainee";
import AdminSidebar from "../components/NavbarrIndiv";

const ViewMyCourses = () => {
  return (
    // <div className="courses">
    //   <h2> Courses</h2>
    //   <CoursesList />
    <div className="individual trainee">
      <AdminSidebar/>
    
    <div className="indv">
      <h2>My courses</h2>
      <CoursesTrainee />
    </div>
    </div>
  );
};
export default ViewMyCourses;

// import axios from "axios";
// import Button from "@mui/material/Button";
// import Table from "@mui/material/Table";
// import Box from "@mui/material/Box";
// import { styled } from "@mui/material/styles";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));
// const { useState, Component } = require("react");

// const CoursesList = () => {
//   const [courses, setCourses] = useState([]);

//   const getCourses = async () => {
//     await axios
//       .get(
//         "http://localhost:7007/indiviualtrainee/showCourses/639739399e8f45adf846f6a4"
//       )
//       .then((res) => {
//         const courses = res.data;
//         console.log(courses);
//         setCourses(courses);
//       });
//   };
//   return (
//     // visualize authors in a table map over authors
//     <div className="UsersList">
//       <Box sx={{ marginBottom: 2 }}>
//         <Button
//           variant="contained"
//           onClick={getCourses}
//           margin="normal"
//           padding="normal"
//         >
//           Load Courses
//         </Button>
//         {/* margin */}
//       </Box>

//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell align="center">Course Name</StyledTableCell>
//               {/* <StyledTableCell align="center">Email</StyledTableCell> */}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {courses.map((course) => (
//               <TableRow
//                 hover
//                 sx={{
//                   "&:hover": {
//                     cursor: "pointer",
//                     backgroundColor: "#f5f5f5",
//                     width: "100%",
//                   },
//                 }}
//                 // onClick={() =>
//                 //   (window.location.href = `/InstructorHome/${author._id}`)
//                 // }
//                 // key={author._id}
//               >
//                 <TableCell align="center">{course}</TableCell>
//                 {/* <TableCell align="center">{author.email}</TableCell> */}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };
// export default CoursesList;
