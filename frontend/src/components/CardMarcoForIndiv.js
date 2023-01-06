import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import React from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const CardMarcoForIndiv = ({ course }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  //console.log(course.rating.$numberDecimal);
  return (
    <CardGroup>
      <Card>
        <Col xs={12} md={6} lg={4} key={course._id}>
        <div className="marc">
          <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off"
            onClick={() => {
              navigate(`./coursePage/${course._id}`);
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
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                {course.price}
                {course.Currency}
              </small>
              <small className="text-muted">
                {course.discount.discountamount}
              </small>
            </Card.Footer>
            <Card.Footer>
              <small className="text-muted">
               Subject: {course.Subject}
              </small>
            </Card.Footer>
            <Card.Footer>
              {/* <small className="text-muted">{course.rating} 
               </small> */}
            </Card.Footer>
          </Card>
        </Col>
      </Card>
    </CardGroup>
  );
};
export default CardMarcoForIndiv;
