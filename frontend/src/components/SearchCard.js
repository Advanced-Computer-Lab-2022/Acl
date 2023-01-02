import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import React from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap";
import "./SearchCard.css";

const SearchCard = ({ course }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div class="card mb-3 search-result ">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="https://img-c.udemycdn.com/course/240x135/396876_cc92_7.jpg"
            class="img-fluid rounded-start"
            alt="course display image"
          />
        </div>
        <div
          onClick={() =>
            navigate(`/corporatetrainee/viewCourseDetails/${id}/${course._id}`)
          }
          class="col-md-8 "
        >
          <div class="card-body">
            <h5 class="card-title">{course.title}</h5>
            <p class="card-text">{course.subject}</p>
            <p class="card-text">
              <small class="text-muted">{course.summary}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchCard;