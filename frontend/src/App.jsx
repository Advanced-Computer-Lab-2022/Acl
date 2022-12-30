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
import MyCoursePage from "./pages/MyCoursePage";
import CoursePage from "./pages/CoursePage";
import NHome from "./components/NHome"
import Footer from "./components/Footer"
import ViewReports from "./components/admin-view-reports"
import Download from "./components/Download"
import Yarab from "./components/Yarab"
import ChangePassIndiv from "./pages/ChangePassIndiv";
import ViewCoursesIndiv from "./components/ViewCoursesIndiv";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
      

       {/* <NHome/> */}
        <div className="pages">
          <Routes>
            <Route path="/reports" element={<ViewReports/>}/>
            <Route path="/" element={<NHome/> }/>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp/>} />
            <Route path="/Instructor" element={<Instructor />} />
            <Route path="/Instructor/:id" element={<Instructor />} />
            <Route path="/individualtrainee" element={<IndividualTrainee />} />
            <Route path="/individualtrainee/:id" element={<IndividualTrainee />} />
            <Route path="/guest" element={<Guest />} />
            <Route path="/corporatetrainee" element={<CorporateTrainee />} />
            <Route path="/corporatetrainee/:id" element={<CorporateTrainee />} />
            <Route path="/individualtrainee/viewMyCourses/:id/:id" element={<MyCoursePage />} />
            <Route path="/individualtrainee/:id/coursePage/:id" element={<CoursePage />} />
            
            <Route path="/admin" element={<Admin />} />
            <Route path="/instructor/addquestion" element={<AddQuestion />} />
            <Route path="/CoursesList/:id" element={<CoursesList/>} />
            <Route path="/InstructorHome/:id" element={<InstructorHome/>} />
            <Route path="/ContractForm" element={<InstructorContract />} />
            <Route path="/instructor/createExam" element={<CreateMCQ />} />
            <Route path="/corporatetrainee/showAnswers/:examId" element={<McqSol />} />
            <Route path="/corporatetrainee/solveMcq" element={<ExamForm />} />
            <Route path="/CreateCourses" element={<CreateC/>} />
            <Route path="/CreateCourses/:id" element={<CreateC/>} />
            <Route path="/ViewCourses" element={<Viewallco/>} />
            <Route path="/rateCourse" element={<StarRating/>} />
            <Route path="/ViewMyRatings/:id" element={<Viewrate/>} />
            <Route path="/viewmyreviews/:id" element={<Viewreviews/>} />
            <Route path="/ViewPrices" element={<Viewprice/>} />
            <Route path="/individualtrainee/viewMyCourses/download" element={<Download/>} />
            <Route path="/Exam" element={<AddMcq/>}/>
            <Route path="/Pay/:id" element={<CreditCard/>}/>
            <Route
              path="individualtrainee/viewMyCourses/:id"
              element={<ViewMyCourses />}
            />
            <Route
              path="individualtrainee/Yarab/:id"
              element={<Yarab />}
            />

            <Route
              path="individualtrainee/viewCourseDetails/:id/:courseId"
              element={<CoursePage />}
            />
            <Route
              path="corporatetrainee/viewMyCourses/:id"
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
            <Route path="individualtrainee/ReportProbindv/:id" element={<ReportProbindv/>} />            
            <Route path="/ReportProbcorp/:id" element={<ReportProbcorp/>} />
            <Route path="individualtrainee/ViewReportsindv/:id" element={<ViewReportsindv/>} />
            <Route path="individualtrainee/Followupsindv/:id" element={<Followupsindv/>} />
            <Route path="individualtrainee/ChangePassIndiv/:id" element={<ChangePassIndiv/>} />
            
            <Route path="/ViewReportscorp/:id" element={<ViewReportscorp/>} />
            <Route path="/Followupscorp/:id" element={<Followupscorp/>} />


          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
