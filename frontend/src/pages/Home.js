import {useNavigate } from 'react-router-dom';
import Courses from "../components/ViewCoursesi"
import Navbar from './Navbar';

const Home = () => {
    const navigate=useNavigate();
const onClick1=()=>{
    navigate('/Admin')}
const onClick2=()=>{
    navigate('/Guest')}
const onClick3=()=>{
    navigate('/Instructor')}
const onClick4=()=>{
    navigate('/IndividualTrainee')}
    const onClick5=()=>{
        navigate('/CorporateTrainee')}
    return (
        <div>
            <Navbar/>
      <div className="home">
        
       <Courses/>
      </div>
      </div>
    );
  };
  
  export default Home;