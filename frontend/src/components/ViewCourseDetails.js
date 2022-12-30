import { useState } from "react";
import { useEffect } from "react";

// const { useState } = require("react");
import axios from "axios";
import Button from "@mui/material/Button";

const ViewCourseDetails = () => {
  const [trainee, setTrainee] = useState("");
  const [refund, setRefund] = useState(null);
  const [course, setCourse] = useState(null);

  // const DisplayCourse = async (req, res) => {
  //   const id = req.params.id;
  //   const courseId = req.params.courseId;
  //   await axios
  //     .get(`http://localhost:7007/indiviualtrainee/getTrainee/${id}`)
  //     .then((res) => {
  //       const trainee = res.data;
  //       // console.log(courses);
  //       setTrainee(trainee);
  //     });
  //   trainee.courses.map((course) => {
  //     if (course._id === courseId) {
  //       setCourse(course);
  //       if (course.progress < 50) {
  //         setRefund(true);
  //       }
  //     }
  //   });
  // };

  const onClick1 = async (req, res) => {
    const id = req.params.id;
    const courseId = req.params.courseId;
    const response = await fetch(
      `/indiviualtrainee/requestRefund/${id}/${courseId}`
    );
    if (response.ok) console.log("request submitted successfully!");
  };

  useEffect(() => {
    const DisplayCourse = async (req, res) => {
      const id = req.params.id;
      const courseId = req.params.courseId;
      await axios
        .get(`http://localhost:7007/indiviualtrainee/getTrainee/${id}`)
        .then((res) => {
          const trainee = res.data;
          // console.log(courses);
          setTrainee(trainee);
        });
      trainee.courses.map((course) => {
        if (course._id === courseId) {
          setCourse(course);
          if (course.progress < 50) {
            setRefund(true);
          }
        }
      });
    };

    DisplayCourse();
  });

  return (
    <div className="course">
      <h2>course</h2>
      {refund && <button onClick={onClick1}>Request Refund</button>}
    </div>
  );
};

export default ViewCourseDetails;
