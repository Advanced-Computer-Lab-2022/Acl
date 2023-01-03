import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
   
  return (
    <div className='lala'>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://dpbnri2zg3lc2.cloudfront.net/en/wp-content/uploads/2021/07/Free-data-analytics-courses.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Join us to exlpore more</h1>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201811/online-3412473_1920_1.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          
          <h1>“If you can't explain it to a six year old, you don't understand it yourself.”

Albert Einstein.</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://prod-discovery.edx-cdn.org/media/course/image/52bf4539-6137-4968-9605-6c32414dcdc4-7e805a266b31.small.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          
          <h1 >
          “At the end of the day, I think the more online educators there are, I think the better off the whole world is.” —Anant Agarwal
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://chennai.vit.ac.in/wp-content/uploads/2021/06/Cyber-Security-Certification-Course-Computer-Science-Certification-Courses.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          
          <h1 >
          “Online learning is fundamentally student-centered, due to the easy implementation of student discussion boards and peer grading systems.” — Sander Tamm
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
  );
}

export default UncontrolledExample;