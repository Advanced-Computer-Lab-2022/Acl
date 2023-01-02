import { useEffect, useState } from "react";
import { Await, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardMarco from "./CardMarco";
import axios from "axios";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";

import "bootstrap";
import "./FilterCor.css";

//const courses2 = require("ACL-MANS/backend/src/models/courses.model");

import CardGroup from "react-bootstrap/CardGroup";
import CardMarcoReg from "./CardMarcoReq";
import Navbar from "./SideBarCor";
const MyCoursesCor = () => {
  const [courses, setCourses] = useState("");

  const { id } = useParams();

  // const [courses, setCourses] = useState(null);

  const navigate = useNavigate();
  //const courses1=await courses2.find();
  useEffect(() => {
    const fetchCourses = async () => {
      const data = await axios.get(
        `http://localhost:7007/corporatetrainee/showCourses/${id}`
      );
      setCourses(data.data);

      //setCourses(data.data)
    };
    fetchCourses();
  }, []);

  return (
    <div class="container text-center">
      {/* <Navbar /> */}
      <div class="row">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {courses &&
            courses.map((product) => (
              <CardMarcoReg key={product._id} course={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MyCoursesCor;
