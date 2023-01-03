import {useNavigate } from 'react-router-dom';
import Courses from "../components/ViewCoursesi"
import Navbar from './Navbar';
import GuestHomePage from '../components/GuestHomePage';
import Footer from '../components/Footer';
import ViewCoursesIndiv from '../components/ViewCoursesIndiv';

const Home = () => {

    return (
    <div>
       <Navbar/>
      <div className="main">
      <GuestHomePage/>
      <ViewCoursesIndiv/>
     
      </div>
 
      </div>
    );
  };
  
  export default Home;