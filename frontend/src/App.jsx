import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import Instructor from "./pages/Instructor";
import Navbar from "./components/Navbar";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Guest from "./pages/Guest";
import IndividualTrainee from "./pages/IndividualTrainee";
import CorporateTrainee from "./pages/CorporateTrainee";
import AddQuestion from "./components/AddQuestioni";
import CreateMCQ from "./components/CreateMcqi";
import McqSol from "./components/McqSol";
import ExamForm from "./components/ExamForm";
import CreateC from "./components/instructorMeth";

import Viewallco from "./components/Viewallco";
import StarRating from "./components/RateCoursesT";
import Viewrate from "./components/ViewRatingI";
import Viewprice from "./components/Viewpricei";
import AddMcq from "./components/SolveMCQindv";

import ResetPass from './components/ResetPass'
import ResetPassInst from './components/ResetPassInst'
import ResetPassIndiv from './components/ResetPassIndiv'

import ViewInsCourses from "./components/ViewInsCourses";
import ViewMyCourses from "./pages/ViewMyCourses";

import EditInsProfile from "./components/EditInsProfile";
import InstructorProfile from "./pages/InstructorProfile";

import Courses from "./pages/Courses";

import ViewReg from "./pages/ViewReg";
import ViewRegCourses from "./components/ViewRegCourses";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/Instructor" element={<Instructor />} />
            <Route path="/individualtrainee" element={<IndividualTrainee />} />
            <Route path="/guest" element={<Guest />} />
            <Route path="/corporatetrainee" element={<CorporateTrainee />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/instructor/addquestion" element={<AddQuestion />} />

            <Route path="/instructor/createExam" element={<CreateMCQ />} />
            <Route path="/corporatetrainee/showAnswers" element={<McqSol />} />
            <Route path="/corporatetrainee/solveMcq" element={<ExamForm />} />
            <Route path="/CreateCourses" element={<CreateC/>} />
            <Route path="/ViewCourses" element={<Viewallco/>} />
            <Route path="/rateCourse" element={<StarRating/>} />
            <Route path="/ViewMyRatings" element={<Viewrate/>} />
            <Route path="/ViewPrices" element={<Viewprice/>} />
            <Route path="/Exam" element={<AddMcq/>}/>
            <Route path="/InstructorProfile" element={<InstructorProfile/>} />
            <Route path="/ViewMyCourses" element={<ViewInsCourses/>} />
            <Route path="/Courses" element={<Courses/>} />
            <Route path="/ViewReg" element={<ViewRegCourses/>} />






            <Route 
              path="indivualtrainee/reset/:token" 
              element={<ResetPassIndiv/>
            } 
            /> 
            <Route 
              path="instructor/reset/:token" 
              element={<ResetPassInst/>
            } 
            />
            <Route 
              path="corporatetrainee/reset/:token" 
              element={<ResetPass/>
            } 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
