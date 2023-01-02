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
import React from "react";
import CardMarco from "./CardMarco";
import { useEffect, useState } from "react";
import "bootstrap";
import { QuestionCircleOutlined } from "@ant-design/icons";

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Row, Col } from "antd";
import Navbar from "./SideBarCor";
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
const { Component } = require("react");

const CoursesCorTrainee = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [courses, setCourses] = useState(null);
  const [trainee, setTrainee] = useState(null);

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
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    axios
      .get("/controllers/ACertificate.pdf", {
        responseType: "arraybuffer",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/pdf",
        },
      })
      .then((response) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(new Blob([response.data]));
        // Setting various property values

        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.setAttribute("download", "ACertificate.pdf"); //or any other extension
        document.body.appendChild(alink);
        alink.click();
      })
      .catch((error) => console.log(error));
  };

  // const onButtonClick1 = () => {
  //   navigate(`./MyCoursePage/${course._id}`)
  // }

  useEffect(() => {
    const getCourses = async (req, res) => {
      await axios.get(`/corporatetrainee/showCourses/${id}`).then((res) => {
        const courses = res.data;

        if (res.ok) setCourses(courses);
        console.log(courses);
      });
      await axios.get(`/corporatetrainee/getTrainee/${id}`).then((res) => {
        const trainee = res.data;
        setTrainee(trainee);
      });
    };
    getCourses();
  }, []);
  return (
    // visualize authors in a table map over authors
    // <div className="site-card-wrapper">
    //   <Row gutter={16}>
    //     {courses &&
    //       courses.map((course) => (
    //         <Col span={8}>
    //           <Card
    //             style={{
    //               width: 300,
    //             }}
    //             cover={
    //               <img
    //                 alt="example"
    //                 src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    //               />
    //             }
    //             actions={[
    //               <a href="">
    //                 <SettingOutlined key="setting" href="" />
    //               </a>,
    //               <a href="">
    //                 <EditOutlined key="edit" href="" />
    //               </a>,
    //               <EllipsisOutlined key="ellipsis" />,
    //               <DownloadOutlined key="download" onClick={onButtonClick} />,
    //             ]}
    //           >
    //             <Meta
    //               avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
    //               title={course.title}
    //               description={course.Subject}
    //               onClick={() =>
    //                 (window.location.href = `./${trainee._id}/${course._id}`)
    //               }
    //               key={course._id}
    //             />
    //           </Card>
    //         </Col>
    //       ))}
    //   </Row>
    // </div>

    <div class="row">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <Navbar />
        {courses &&
          courses.map((product) => (
            <div>
              <CardMarco key={product._id} course={product} />
              <a href={`/reportcourse/${id}?courseId=${product._id}`}>
                <QuestionCircleOutlined key="report" title="Report Course" />
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};
export default CoursesCorTrainee;