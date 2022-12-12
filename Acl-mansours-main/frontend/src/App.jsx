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
import InstructorHome from "./pages/InstructorHome"
import Viewallco from "./components/Viewallco";
import StarRating from "./components/RateCoursesT";
import Viewrate from "./components/ViewRatingI";
import Viewprice from "./components/Viewpricei";
import AddMcq from "./components/SolveMCQindv";
import CoursesList from "./components/ListInstDetails"
import ResetPass from './components/ResetPass'
import ResetPassInst from './components/ResetPassInst'
import ResetPassIndiv from './components/ResetPassIndiv'
import Login from "./components/login1";
import SignUp from "./components/SignUp";
import InstructorContract from "./pages/ContractForm1";
import Discount from './components/Discounti'
import UploadYouPrevi from './components/UploadYouPrevi'
import UploadYouSubi from './components/UploadYouSubi'
import Selectcountry from './components/SelectCountryi'
import Viewreviews from "./components/ViewReviews";
import CreditCard from "./components/CreditCard";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp/>} />
            <Route path="/Instructor" element={<Instructor />} />
            <Route path="/Instructor/:id" element={<Instructor />} />
            <Route path="/individualtrainee" element={<IndividualTrainee />} />
            <Route path="/indiviualtrainee/:id" element={<IndividualTrainee />} />
            <Route path="/guest" element={<Guest />} />
            <Route path="/corporatetrainee" element={<CorporateTrainee />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/instructor/addquestion" element={<AddQuestion />} />
            <Route path="/InstructorHome/:id" element={<CoursesList/>} />
            <Route path="/ContractForm" element={<InstructorContract />} />
            <Route path="/instructor/createExam" element={<CreateMCQ />} />
            <Route path="/corporatetrainee/showAnswers" element={<McqSol />} />
            <Route path="/corporatetrainee/solveMcq" element={<ExamForm />} />
            <Route path="/CreateCourses" element={<CreateC/>} />
            <Route path="/ViewCourses" element={<Viewallco/>} />
            <Route path="/rateCourse" element={<StarRating/>} />
            <Route path="/ViewMyRatings/:id" element={<Viewrate/>} />
            <Route path="/viewmyreviews/:id" element={<Viewreviews/>} />
            <Route path="/ViewPrices" element={<Viewprice/>} />
            <Route path="/Exam" element={<AddMcq/>}/>
            <Route path="/Pay/:id" element={<CreditCard/>}/>
            <Route 
              path="indivualtrainee/reset/:token" 
              element={<ResetPassIndiv/>
            } 
            /> 
            <Route path="instructor/reset/:token" element={<ResetPassInst/>} />
            <Route path="corporatetrainee/reset/:token" element={<ResetPass/>} 
            />
            <Route path="/Discount" element={<Discount/>} />
            <Route path="/UploadYouSubi" element={<UploadYouSubi/>} />
            <Route path="/UploadYouPrevi" element={<UploadYouPrevi/>} />
            <Route path="/selectcountry" element={<Selectcountry/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
