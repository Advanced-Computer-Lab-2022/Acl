import { useEffect, useState } from "react";
import { Await, useNavigate } from "react-router-dom";

import Button from '../components/Button.css'
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
import NavbarrIndiv from "../components/NavbarrIndiv"

import ViewSubtitles from "../components/ViewSubtitlesNotReg";
const CoursePage = () => {
  const [courses, setCourses] = useState("");
  const [courses1, setCourses1] = useState("");
    const navigate = useNavigate(); 
    const {id1} = useParams();
  // const [admin, setAdmin] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchCourses =async () => {
      const data =await axios.get(`/corporatetrainee/viewallSubs/${id1}`);
      setCourses(data.data)
      console.log(data.data)
      
    };fetchCourses()
    const fetchCourse =async () => {
      const data =await axios.get(`/corporatetrainee/viewCourse/${id1}`);
      setCourses1(data.data)
      console.log(data.data)
      
    }; fetchCourse()
    
  }, [])

  const onClick =  () => {
   
    navigate(`/Pay/${id1}`)}
    const StyledPaper = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.h2,
        padding: theme.spacing(6),
        maxWidth: 500,
        color: theme.palette.text.primary,
      }));

    //const email = {email};
   

  return (
    <Box sx={{ flexGrow: 4, overflow: 'hidden', px: 6 }}>
      
    <div><NavbarrIndiv/></div>
    <div className="indv">
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
     <div className="body">Preview:</div>
     <React.Fragment>
    
    
      <Box />
    
     
      <iframe width="520" height="315"
    src={`https://www.youtube.com/watch?v=dLhpfCLz3is`}  
    title="Youtube Player"
    frameborder="50"
    allowFullScreen
  />
  
  </React.Fragment>
  
  <div>    {courses && courses.map(product => (
    
    <ViewSubtitles key={product._id} subtitle={product} />
  ))}<div className="btn--outline">  <button onClick={onClick}>{courses1.price}</button> </div>
   </div></div>
   </Box>
      
  );
};

export default CoursePage;
