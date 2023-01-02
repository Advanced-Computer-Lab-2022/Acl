import { useEffect, useState } from "react";
import { Await, useNavigate } from "react-router-dom";
//import Card from 'react-bootstrap/Card';
import Button from "../components/Button.css";
import axios from "axios";
import * as React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import { DownloadOutlined } from "@ant-design/icons";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import ViewSubtitles from "../components/ViewSubtitlesCor";
import Navbar from "../components/SideBarCor";
import ViewExam from "../components/ViewExam";
const MyCoursePageCor = () => {
  const [courses, setCourses] = useState("");
  const [courses1, setCourses1] = useState("");
  const [exams, setExams] = useState(null);
  const [progress, setProgress] = useState(null);
  const [certificate, setCertificate] = useState(null);
  const [refund, setRefund] = useState(null);
  const navigate = useNavigate();
  const { id, id1 } = useParams();
  // const [admin, setAdmin] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchCourses = async () => {
      const data = await axios.get(`/corporatetrainee/viewallSubs/${id1}`);
      setCourses(data.data);
      console.log(data.data);
    };
    fetchCourses();
    const fetchCourse = async () => {
      const data = await axios.get(`/corporatetrainee/viewCourse/${id1}`);
      setCourses1(data.data);
      console.log(data.data);
    };
    fetchCourse();
    const fetchExams = async () => {
      const data = await axios.get(
        `http://localhost:7007/corporatetrainee/getExams/${id1}`
      );
      setExams(data.data);
      //console.log(data.data);
    };
    fetchExams();
    const fetchProgress = async () => {
      const progress = await axios.get(
        `/corporatetrainee/progress/${id}/${id1}`
      );
      setProgress(progress.data);
      ////console.log(progress.data);
      if (progress.data < 50) setRefund(1);
      else if (progress.data == 100) setCertificate(1);
    };
    fetchProgress();
  }, []);

  

  //const email = {email};
  const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.h2,
    padding: theme.spacing(6),
    maxWidth: 500,
    color: theme.palette.text.primary,
  }));
  const downloadCertificate = async () => {
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

  return (
    <Box sx={{ flexGrow: 4, overflow: "hidden", px: 6 }}>
      <div>
        <Navbar />
      </div>
      <div className="indv">
        <StyledPaper
          sx={{
            my: 1,
            mx: "auto",
            p: 2,
          }}
        >
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar>{courses1.title}</Avatar>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography variant="h4" noWrap>
                Subject:{courses1.Subject}
              </Typography>
            </Grid>
          </Grid>
        </StyledPaper>
        <StyledPaper
          sx={{
            my: 1,
            mx: "auto",
            p: 2,
          }}
        >
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar>{courses1.title}</Avatar>
            </Grid>
            <Grid item xl>
              <Typography variant="h4" noWrap>
                Our course focus on:{courses1.summary}
              </Typography>
            </Grid>
          </Grid>
        </StyledPaper>
        <StyledPaper
          sx={{
            my: 1,
            mx: "auto",
            p: 2,
          }}
        >
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar>{courses1.title}</Avatar>
            </Grid>
            <Grid item xl>
              <Typography variant="h4">
                Your are here with level:{courses1.levelOfCourse}
              </Typography>
            </Grid>
          </Grid>
        </StyledPaper>
        <div className="body">
          <h1>
            {" "}
            Progress: <h3>{progress}%</h3>
          </h1>
          {certificate && (
            <p>
              Download certificate{" "}
              <DownloadOutlined key="download" onClick={downloadCertificate} />
            </p>
          )}
        </div>
        <div className="body">Preview:</div>
        <React.Fragment>
          <Box />
        </React.Fragment>

        <div>
          {" "}
          {courses &&
            courses.map((product) => (
              <ViewSubtitles key={product._id} subtitle={product} />
            ))}{" "}
        </div>
        <div className="body">Exams:</div>
        <React.Fragment>
          <Box />
        </React.Fragment>

        <div>
          {" "}
          {exams &&
            exams.map((exam) => <ViewExam key={exam._id} exam={exam} />)}{" "}
        </div>
      </div>
    </Box>
  );
};

export default MyCoursePageCor;