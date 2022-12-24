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
import ReportProbi from "./components/ReportProbi";
import ViewReportsi from "./components/ViewReportsi";
import Followupsi from "./components/Followupsi";
import ReportProbindv from "./components/ReportProbindv";
import ReportProbcorp from "./components/ReportProbcorp";
import ViewReportsindv from "./components/ViewReportsindv";
import ViewReportscorp from "./components/ViewReportscorp";
import Followupsindv from "./components/Followupsindv";
import Followupscorp from "./components/Followupscorp";
import ViewMyCourses from "./pages/ViewMyCourses";
import CoursePage from "./pages/CoursePage";


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
              path="individualtrainee/viewMyCourses"
              element={<ViewMyCourses />}
            />

            <Route
              path="individualtrainee/viewCourseDetails/:id/:courseId"
              element={<CoursePage />}
            />
            <Route
              path="corporatetrainee/viewMyCourses"
              element={<ViewMyCourses />}
            />

            {/* <Route path="/Exam" element={<AddMcq/>}/> */}
            <Route 
              path="indivualtrainee/reset/:token" 
              element={<ResetPassIndiv/>
            } 
            /> 
            <Route path="instructor/reset/:token" element={<ResetPassInst/>} />
            <Route path="corporatetrainee/reset/:token" element={<ResetPass/>} 
            />
            <Route path="/Discount/:id" element={<Discount/>} />
            <Route path="/UploadYouSubi/:id" element={<UploadYouSubi/>} />
            <Route path="/UploadYouPrevi/:id" element={<UploadYouPrevi/>} />
            <Route path="/selectcountry/:id" element={<Selectcountry/>} />
            <Route path="/ReportProbi/:id" element={<ReportProbi/>} />
            <Route path="/ViewReportsi/:id" element={<ViewReportsi/>} />
            <Route path="/Followupsi/:id" element={<Followupsi/>} />
            <Route path="/ReportProbindv/:id" element={<ReportProbindv/>} />            
            <Route path="/ReportProbcorp/:id" element={<ReportProbcorp/>} />
            <Route path="/ViewReportsindv/:id" element={<ViewReportsindv/>} />
            <Route path="/Followupsindv/:id" element={<Followupsindv/>} />
            <Route path="/ViewReportscorp/:id" element={<ViewReportscorp/>} />
            <Route path="/Followupscorp/:id" element={<Followupscorp/>} />


          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
