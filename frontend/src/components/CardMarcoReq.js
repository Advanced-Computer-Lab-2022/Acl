import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import React from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const CardMarcoReg = ({ course }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <CardGroup>
      <Card>
        <Col xs={12} md={6} lg={4} key={course._id}>
        <div className="marc">
        <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off"
            onClick={async () => {
              const data = await axios.get(
                `http://localhost:7007/courses/viewCourse/${course._id}`
              );
              navigate(
                `/corporatetrainee/viewCourseDetails/${id}/${course._id}`
              );
            }}
          >
            
            <td>{course.title}</td>
          </button>
</div>

          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://img-c.udemycdn.com/course/240x135/396876_cc92_7.jpg"
            />
            <Card.Body>
              <Card.Title>{course.title}</Card.Title>
              <Card.Text>Total hours:{course.duration} hours</Card.Text>

              {/* {course.rating && (
                <Card.Text>Rating:{course.rating} stars</Card.Text>
              )} */}
            </Card.Body>
          </Card>
        </Col>
      </Card>
    </CardGroup>
  );
};
export default CardMarcoReg;