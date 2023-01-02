import { useEffect, useState } from "react";
import { Await, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardMarco from "./CardMarco";
import axios from "axios";
import Row from "react-bootstrap/Row";
import "bootstrap";
import "./FilterCor.css";
import "./styles.css";

//const courses2 = require("ACL-MANS/backend/src/models/courses.model");

import CardGroup from "react-bootstrap/CardGroup";
import CardMarcoForIndiv from "./CardMarcoForIndiv";
const ViewCourses = () => {
  const [courses, setCourses] = useState("");
  const [mostpop, setMostpop] = useState(null);
  const [mostenrol, setMostenrol] = useState(null);
  const [subject, setSubject] = useState("Subject");
  const [rating, setRating] = useState("Rating");
  const [ratingr, setRatingr] = useState(null);
  const [subjectr, setSubjectr] = useState(null);
  const [subjects, setSubjects] = useState([]);

  const [error, setError] = useState(null);

  /////////////////////////////////////////////

  // const [courses, setCourses] = useState(null);

  const navigate = useNavigate();
  //const courses1=await courses2.find();
  useEffect(() => {
    const fetchMostEnrolled = async () => {
      let en =[];
      const data = await axios.get(
        `http://localhost:7007/courses/MostEnrolled`
      );
      en = data.data.slice(0,3);
      setMostenrol(en);
    };
    fetchMostEnrolled();

    const fetchMostPop = async () => {
      let pop =[];
      const data = await axios.get(`/courses/MostPopular`);
      pop = data.data.slice(0,3);
      setMostpop(pop);
    };
    fetchMostPop();

    const fetchCourses = async () => {
      if (
        (subject == "Subject" || subject == "All") &&
        (rating == "Rating" || rating == "All")
      ) {
        const data = await axios.get(`/indiviualtrainee/viewallcourses`);
        setCourses(data.data);
        const subjectss = [];
        data.data.map((course) => {
          subjectss.push(course.Subject);
        });
        setSubjects(subjectss);
        console.log(subjects);

        //console.log(courses[1].rating);
      } else {
        if (subjectr != null && ratingr != null) {
          const data = await axios.get(
            `/corporatetrainee/filterallcoursessubject?subject=${subjectr}&rating=${ratingr}`
          );
          setCourses(data.data);
        } else if (subjectr == null) {
          const data = await axios.get(
            `/corporatetrainee/filterallcoursessubject?rating=${ratingr}`
          );
          setCourses(data.data);
        } else {
          const data = await axios.get(
            `/corporatetrainee/filterallcoursessubject?subject=${subjectr}`
          );
          setCourses(data.data);
        }
      }
    };

    //setCourses(data.data)

    fetchCourses();
  }, [subjectr, ratingr, rating]);

  const onClick1 = (selected) => {
    setSubject(selected);
    setSubjectr(selected.toLowerCase());
    console.log(selected);
  };
  const onClick2 = (selected) => {
    setRating(selected);
    if (selected == "1 star") setRatingr(1);
    else if (selected == "2 stars") setRatingr(2);
    else if (selected == "3 stars") setRatingr(3);
    else if (selected == "4 stars") setRatingr(4);
    else if (selected == "5 stars") setRatingr(5);
    else if (selected == "All") setRating("All");
  };

  const onClick3 = () => {
    console.log(subject);
    console.log(rating);
    console.log(courses);
  };

  return (
    <div class="container text-center">
      <div class="row">
        <div class="filterOut">
          <div class="filter  container text-center">
            <div class="row">
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
                      <a
                        class="dropdown-item"
                        
                        onClick={() => onClick1("All")}
                      >
                        All
                      </a>
                    </li>
                    /*
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() => onClick1("Biology")}
                    >
                      Biology
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() => onClick1("Python")}
                    >
                      Python
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() => onClick1("All")}
                    >
                      All
                    </a>
                  </li> */
                  }
                </ul>
              </div>

              <div class="dropdown col">
                <button
                  class="btn btn-outline-secondary dropdown-toggle filterBtn"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {rating}
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a
                      class="dropdown-item"
                      
                      onClick={() => onClick2("1 star")}
                    >
                      1 star
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      
                      onClick={() => onClick2("2 stars")}
                    >
                      2 stars
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      
                      onClick={() => onClick2("3 stars")}
                    >
                      3 stars
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      
                      onClick={() => onClick2("4 stars")}
                    >
                      4 stars
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      
                      onClick={() => onClick2("5 stars")}
                    >
                      5 stars
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      
                      onClick={() => onClick2("All")}
                    >
                      All
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {courses &&
            courses.map((product) => (
              <CardMarco key={product._id} course={product} />
            ))}
        </div>
      </div>
      <div>
        <div>
          <h2>Most Viewed Courses:</h2>
        </div>
        <div class="row">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            {mostpop &&
              mostpop.map((product) => (
                <CardMarco key={product._id} course={product} />
              ))}
          </div>
        </div>
        <div>
          <h2>Most People Choose These Courses:</h2>
        </div>
        <div class="row">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            {mostenrol &&
              mostenrol.map((product) => (
                <CardMarco key={product._id} course={product} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCourses;
