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
import StarsIcon from '@mui/icons-material/Stars';

import { EditOutlined, EllipsisOutlined, SettingOutlined,DownloadOutlined,QuestionCircleOutlined  } from '@ant-design/icons';
import { Avatar, Card,Row,Col } from 'antd';
import { useEffect } from "react";
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
 const navigate=useNavigate();
  const {id} = useParams();
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
  
  

    // const onButtonClick1 = () => {
    //   navigate(`./MyCoursePage/${course._id}`)
    // }

  useEffect(() => {
  const getCourses = async (req, res) => {
    
    await axios
      .get(`http://localhost:7007/indiviualtrainee/showCourses/${id}`)
      .then((res) => {
        const courses = res.data;
        console.log(courses);
        setCourses(courses);
      });
    await axios
      .get(`http://localhost:7007/indiviualtrainee/getTrainee/${id}`)
      .then((res) => {
        const trainee = res.data;
        // console.log(courses);
        setTrainee(trainee);
      });
  };
  getCourses()
    
  }, [])
  return (
    // visualize authors in a table map over authors
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
                <a href=""><SettingOutlined key="setting" href=""/></a>,
                <a href=""><EditOutlined key="edit" href=""/></a>,
                <StarsIcon key="star" onClick={() =>navigate(`/individualtrainee/RateCourse/${course._id}`)}/>,
                <a href={`/individualtrainee/ReportProbindiv/${id}?courseId=${course._id}`}><QuestionCircleOutlined  key="report" title='Report Course'/></a>,
               
              ]}
            >
             
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={course.title}
                description={course.Subject}
              
            onClick={() =>
                  (window.location.href = `./${trainee._id}/${course._id}`)
                }
                key={course._id}
                />
              </Card>
               </Col>
            ))}
          
          </Row>
     
    </div>
  );
};
export default CoursesTrainee;
