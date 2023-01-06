import { useEffect, useState } from "react";
import { Await, useNavigate } from "react-router-dom";
import ReactPlayer from 'react-player'
import Button from "../components/Button.css";
import axios from "axios";
import * as React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import NavbarrIndiv from "../components/SideBarCor";

import ViewSubtitles from "../components/ViewSubtitlesNotReg";
const CoursePageCor = () => {
  const [courses, setCourses] = useState("");
  const [courses1, setCourses1] = useState("");
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
  }, []);

  const onClick = async () => {
    const response = await fetch(
      `http://localhost:7007/corporatetrainee/requestaccess/${id}/${id1}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      navigate(`/corporatetrainee/requestsubmitted/${id}`);
    }
    // const response = await fetch(
    //   `http://localhost:7007/corporatetrainee/requestaccess/${id}/${id1}`
    // );
    const json = await response.json();
  };
  const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.h2,
    padding: theme.spacing(6),
    maxWidth: 500,
    color: theme.palette.text.primary,
  }));

  //const email = {email};

  return (
    <Box sx={{ flexGrow: 4, overflow: "hidden", px: 6 }}>
      <div>
        <NavbarrIndiv />
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
        <div className="body">Preview:</div>
        <React.Fragment>
          <Box />
          <ReactPlayer
          width="640px"
          height="360px"
          url={"https://www.youtube.com/watch?v=0F_UQF2gC_g"}
          // url={subtitle.Video[0].youtube_video_link}
          title="Youtube Player"
          controls="true"
          frameborder="0"
          allowFullScreen
            />
        </React.Fragment>

        <div>
          {" "}
          {courses &&
            courses.map((product) => (
              <ViewSubtitles key={product._id} subtitle={product} />
            ))}
          <div className="btn--outline">
            {" "}
            <button onClick={onClick}>Request Access</button>{" "}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default CoursePageCor;