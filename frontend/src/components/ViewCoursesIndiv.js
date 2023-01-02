import { useEffect, useState } from "react";
import { Await, useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import CardMarcoForIndiv  from './CardMarcoForIndiv';
import axios from "axios";
import Row from 'react-bootstrap/Row';
import "bootstrap";
//const courses2 = require("ACL-MANS/backend/src/models/courses.model");

import CardGroup from 'react-bootstrap/CardGroup';
const ViewCoursesIndiv=  ()=> {
    const [min, setMin] = useState(null);
  const [max, setMax] = useState(null)
  const [error, setError] = useState(null);
  const [courses, setCourses] = useState("");
  const [mostpop, setMostpop] = useState(null);
  const [mostenrol, setMostenrol] = useState(null);
  const [subject, setSubject] = useState("Subject");
  const [rating, setRating] = useState("Rating");
  const [ratingr, setRatingr] = useState(null);
  const [subjectr, setSubjectr] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const navigate = useNavigate();
  console.log(courses)
  //const courses1=await courses2.find();
  const onClick4 = (event) => {
    setMin(event.target.value);
  };

  const onClick5 = (event) => {
    setMax(event.target.value);
  };

  const submit = async (e) => {
    e.preventDefault();
    

    const data = await axios.get(
      `http://localhost:7007/indiviualtrainee/filter_all_courses_price?min=${min}&max=${max}`
    );
    setCourses(data.data);
    console.log(data.data);
  };
  const onClick1 = (selected) => {
    setSubject(selected);
    setSubjectr(selected.toLowerCase());
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
      let pop=[];
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

  return (
    
    <div class="container text-center">
    <div class="row">
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
                    <li>
                      <a class="dropdown-item" onClick={() => onClick1("All")}>
                        All
                      </a>
                    </li>
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
            <CardMarcoForIndiv key={product._id} course={product} />
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
                <CardMarcoForIndiv key={product._id} course={product} />
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
                <CardMarcoForIndiv key={product._id} course={product} />
              ))}
          </div>
        </div>
      </div>
  </div>
  );
};

export default ViewCoursesIndiv;