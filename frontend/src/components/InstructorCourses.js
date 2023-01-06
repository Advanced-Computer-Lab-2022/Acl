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
import { Navigate, useNavigate, useParams } from "react-router-dom";
import React from 'react';
import { EditOutlined, QuestionCircleOutlined,LikeOutlined , PercentageOutlined ,PlusCircleOutlined,UserOutlined   } from '@ant-design/icons';
import { Avatar, Card,Row,Col } from 'antd';
import { useEffect } from "react";
import Navbar from "../components/Navbarri";
import SearchForCourse from "./SearchForCoursesIns"; 
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

const CoursesInstructor = () => {
 const navigate=useNavigate();
  const {id} = useParams();
  const [courses, setCourses] = useState([]);
  const [trainee, setTrainee] = useState([]);
  const [subject, setSubject] = useState("Subject");
  const [subjects, setSubjects] = useState([]);
  const [subjectr, setSubjectr] = useState(null);
  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);

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
 

    // const onButtonClick1 = () => {
    //   navigate(`./MyCoursePage/${course._id}`)
    // }

    useEffect(() => {
        const getCourses = async (req, res) => {
          if (subject == "Subject" || subject == "All") {
            const data = await axios.get(
              `http://localhost:7007/instructor/viewMyCourses/${id}`
            );
            setCourses(data.data);
            const subjectss = [];
            data.data.map((course) => {
              subjectss.push(course.Subject);
            });
            setSubjects(subjectss);
          } else {
            const data = await axios.get(
              `/instructor/filtermyCoursesSubject/${id}?subject=${subjectr}`
            );
            setCourses(data.data);
          }
        };
        getCourses();
      }, [subjectr,min,max]);
      const onClick1 = (selected) => {
        setSubject(selected);
        setSubjectr(selected.toLowerCase());
        console.log(selected);
      };
    
      const onClick4 = (event) => {
        setMin(event.target.value);
        
      };
      console.log(min)
      const onClick5 = (event) => {
        setMax(event.target.value);
        
      };
      console.log(max)
    
      const submit = async (e) => {
        e.preventDefault();
    
        const data = await axios.get(
          `/instructor/filtermyCoursePrice/${id}?min=${min}&max=${max}`
        );
        setCourses(data.data);
        //console.log(data.data);
      };
  return (
    // visualize authors in a table map over authors
    <div>
      <Navbar/>
      <SearchForCourse/>
      <div className="malak">
      <div class="filterOut">
        <div class="filter  container text-center">
          <div class="row">
            <div class=" col lower">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control filterPrice"
                  aria-label="Dollar amount (with dot and two decimal places)"
                  placeholder="Min"
                  onChange={onClick4}
                />
              </div>
            </div>
            <div class=" col lower">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control filterPrice"
                  aria-label="Dollar amount (with dot and two decimal places)"
                  placeholder="Max"
                  onChange={onClick5}
                />
              </div>
            </div>
            <div class=" col lower">
              <div class="input-group mb-3">
                <button class="filterBtnn" type="button" onClick={submit}>
                  Filter
                </button>
              </div>
            </div>
            <div class="dropdown col">
              <button
                class="btn btn-outline-secondary dropdown-toggle filterBtn border-secondary"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {subject}
              </button>

              <ul class="dropdown-menu">
                {subjects &&
                  subjects.map((subject) => {
                    return (
                      <li>
                        <a
                          class="dropdown-item"
                          onClick={() => onClick1(subject)}
                        >
                          {subject}
                        </a>
                      </li>
                    );
                  })}

                {
                  <li>
                    <a class="dropdown-item" onClick={() => onClick1("All")}>
                      All
                    </a>
                  </li>
                  
                }
              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inss1">
    <div className="site-card-wrapper">

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
                <a href={`/Discount/${id}?courseId=${course._id}`}><PercentageOutlined  key="promotion" title='Define Promotion' /></a>,
                <a href={`/instructor/createExam/${id}?courseId=${course._id}`}><EditOutlined key="exam" title='Create Exam' /></a>,
                <a href={`/ReportProbi/${id}?courseId=${course._id}`}><QuestionCircleOutlined  key="report" title='Report Course'/></a>,
                <a href={`/viewMyCRatings/${id}?courseId=${course._id}`}><LikeOutlined    key="MyCoursesRatings" title='MyCoursesRatings'/></a>,
                <a href={`/viewMyStudents/${id}?courseId=${course._id}`}><UserOutlined   key="MyStudends" title='MyStudents'/></a>,
                // <DownloadOutlined key="download" onClick={onButtonClick}/>
              ]}
              
            >
             
              <Meta
            //  title={"Rating: "+ course.rating}
          avatar={"Name: "+course.title}
              description={"Reviews: "+course.Review.map((i)=>{
                   return i+" , ";
   })}
              
            
             
                key={course._id}
                />
              </Card>
               </Col>
            ))}
          
          </Row>
     
    </div>
    </div>
    </div>
  );
};
export default CoursesInstructor;