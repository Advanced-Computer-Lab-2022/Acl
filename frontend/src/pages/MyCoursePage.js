import { useEffect, useState } from "react";
import { Await, useNavigate } from "react-router-dom";
//import Card from 'react-bootstrap/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from "axios";
import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import{useParams} from 'react-router-dom';
import { DownloadOutlined } from "@ant-design/icons";
import NavbarrIndiv from "../components/NavbarrIndiv"
import ViewSubtitles from "../components/ViewSubtitles";
import ViewExam from "../components/ViewExam";

const MyCoursePage = () => {
  const [courses, setCourses] = useState("");
  const [refund, setRefund] = useState(null);
  const [courses1, setCourses1] = useState("");
  
  const [exams, setExams] = useState(null);
  const [progress, setProgress] = useState(null);
  const [certificate, setCertificate] = useState(null)
    const navigate = useNavigate(); 
    const {id1} = useParams();
    const {id} = useParams();
  // const [admin, setAdmin] = useState(false);
  const [error, setError] = useState(null);
  const onClickRefund = async () => {
    const refund = await axios.post(
      `/indiviualtrainee/requestRefund/${id}/${id1}`
    );
  };
  useEffect(() => {
    const fetchCourses =async () => {
      const data =await axios.get(`/corporatetrainee/viewallSubs/${id1}`);
      setCourses(data.data)
      
      
    };fetchCourses()
    const fetchCourse =async () => {
      const data =await axios.get(`/corporatetrainee/viewCourse/${id1}`);
      setCourses1(data.data)
      
      
    }; fetchCourse()
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
        `/indiviualtrainee/progress/${id}/${id1}`
      );
      setProgress(progress.data);
      ////console.log(progress.data);
      if (progress.data < 50) setRefund(1)
      else if (progress.data == 100) setCertificate(1);
      if(progress.ok){
        alert("Your request has been sent succesfully");
        setRefund(null)
      setError(null);
      }
    };
    fetchProgress(); 
  }, [])
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
  const onClick =  () => {
   
    navigate(`/individualtrainee/Exam/${id1}/${id}`)}

    //const email = {email};
    const StyledPaper = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.h2,
      padding: theme.spacing(6),
      maxWidth: 500,
      color: theme.palette.text.primary,
    }));

  return (
    <Box sx={{ flexGrow: 4, overflow: 'hidden', px: 6 }}>
      
      <div><NavbarrIndiv/></div>
      <div className="indv">
      <div className="body">
          <h1>
            {" "}
            Progress: <h3>{progress}%</h3>
          </h1>
        </div>
      <StyledPaper
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}
      >
         
          <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>{courses1.title}</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography variant="h4" noWrap>Subject:{courses1.Subject}</Typography>
          </Grid>
          </Grid>
      </StyledPaper>
      <StyledPaper
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}
      >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>{courses1.title}</Avatar>
          </Grid>
          <Grid item xl>
            <Typography variant="h4" noWrap>Our course focus on:{courses1.summary}</Typography>
          </Grid>
        </Grid>
      </StyledPaper>
      <StyledPaper
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}
      >
        
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>{courses1.title}</Avatar>
          </Grid>
          <Grid item xl>
            <Typography variant="h4">Your are here with level:{courses1.levelOfCourse}</Typography>
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
    
    <div>    {courses && courses.map(product => (
      
      <ViewSubtitles key={product._id} subtitle={product} />
    ))}
    
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
      <div>
          {refund && (
            <button onClick={onClickRefund} class="refundBtn refund">
              Request Refund
            </button>
          )}
        </div>
     </div>
     </Box>
      
  );
};

export default MyCoursePage;
