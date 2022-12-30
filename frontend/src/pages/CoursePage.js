import { useEffect, useState } from "react";
import { Await, useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from '../components/Button.css'
import axios from "axios";
import{useParams} from 'react-router-dom';
import ViewSubtitles from "../components/ViewSubtitles";
const CoursePage = () => {
  const [courses, setCourses] = useState("");
  const [courses1, setCourses1] = useState("");
    const navigate = useNavigate(); 
    const {id} = useParams();
  // const [admin, setAdmin] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchCourses =async () => {
      const data =await axios.get(`/corporatetrainee/viewallSubs/${id}`);
      setCourses(data.data)
      console.log(data.data)
      
    };fetchCourses()
    const fetchCourse =async () => {
      const data =await axios.get(`/corporatetrainee/viewCourse/${id}`);
      setCourses1(data.data)
      console.log(data.data)
      
    }; fetchCourse()
    
  }, [])

  const onClick =  () => {
   
    navigate(`/Pay/${id}`)}

    //const email = {email};
   

  return (
  <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="header .container1">Subject:  {courses1.Subject }
      </div>
    {courses && courses.map(product => (
      
            <ViewSubtitles key={product._id} subtitle={product} />
          ))} 
        <div class="body">{courses1.summary}</div>
       
       <div className="body">Preview:</div>
      <div className="video" ><iframe
      width="560"
      height="315"
      src={courses1 &&courses1.preview.map(previews=>(previews.youtube_video_link))
      }  
      title="Youtube Player"
      frameborder="50"
      allowFullScreen
    /></div>
    <div>level of the Course:{courses1.levelOfCourse}
    </div>
      <div className="btn--outline">  <button onClick={onClick}>{courses1.price}</button> 
      </div> </div>
      
  );
};

export default CoursePage;
