import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import Instructor from "./pages/Instructor";
import ChangePass from "./components/ChangePass";
import Navbar from "./components/Navbar";
import NHome from "./components/NHome";
import Admin from "./pages/Admin";
import Home from "./pages/Home";

import ReportProbCor from "./components/ReportProblemCor";
import DefinePromotion from "./components/definePromotion";
import Guest from "./pages/Guest";
import IndividualTrainee from "./pages/IndividualTrainee";
import CorporateTrainee from "./pages/CorporateTrainee";
import AddQuestion from "./components/AddQuestioni";
import CreateMCQ from "./components/CreateMcqi";
import McqSol from "./components/McqSol";
import ExamForm from "./components/ExamForm";
import CreateC from "./components/instructorMeth";
import InstructorHome from "./pages/InstructorHome";
import MyInstructorProfile from "./components/MyInstructorProfile";
import Viewallco from "./components/Viewallco";
import StarRating from "./components/RateCoursesT";
import Viewrate from "./components/ViewRatingI";
import Viewprice from "./components/Viewpricei";
import AddMcq from "./components/SolveMCQindv";
import CoursesList from "./components/ListInstDetails";
import ResetPass from "./components/ResetPass";
import ResetPassInst from "./components/ResetPassInst";
import ResetPassIndiv from "./components/ResetPassIndiv";
import Login from "./components/login1";
import SignUp from "./components/SignUp";
import InstructorContract from "./pages/ContractForm1";
import Discount from "./components/Discounti";
import UploadYouPrevi from "./components/UploadYouPrevi";
import UploadYouSubi from "./components/UploadYouSubi";
import Selectcountry from "./components/SelectCountryi";
import Viewreviews from "./components/ViewReviews";
import CreditCard from "./components/CreditCard";
import ReportProbi from "./components/ReportProbi";
import ViewReportsi from "./components/ViewReportsi";
import Followupsi from "./components/Followupsi";
import ReportProblemCor from "./components/ReportProblemCor";
import ViewReportsindv from "./components/ViewReportsindv";
import Followupsindv from "./components/Followupsindv";
import Followupscorp from "./components/Followupscorp";
import ViewMyCourses from "./pages/ViewMyCourses";
import MyCoursePage from "./pages/MyCoursePage";
import CoursePage from "./pages/CoursePage";
import CoursePageGuest from "./pages/CoursePageGuest";
import Footer from "./components/Footer";
import TermsPopup from "./components/TermsPopup";
import Download from "./components/Download";
import Yarab from "./components/Yarab";
import ChangePassIndiv from "./pages/ChangePassIndiv";
import ViewCoursesIndiv from "./components/ViewCoursesIndiv";
import RateCourse from "./components/RateCourse";
import Reset3 from "./components/Reset3";
import ReportIndiv from "./components/ReportIndiv";

import ViewReports from "./components/AdminViewReports";
import AdminCreateUsers from "./pages/AdminCreateUsers";
import AdminCourseRequests from "./pages/AdminCourseRequests";
import SetPromotion from "./components/AdminSetPromotion";
import ViewReportsCor from "./components/ViewReportsCor";
import CoursePageCor from "./pages/CoursePageCor";
import ViewMyCoursesCor from "./pages/ViewMyCoursesCor";
import YarabCor from "./components/YarabCor";
// import ViewRegCourses from "./components/ViewRegCourses";
//import ViewInsCourses from "./components/ViewInsCourses";
import Viewinscourses from "./components/InstructorCourses";
import EditProfile from "./components/EditInsProfile";
import ViewMyRatingsi from "./components/ViewMyRatingsinstructor";
import Walleti from "./components/Walleti";
import Students from "./components/FindMyStudentsi";
import ViewmyCRatings from "./components/ViewMyCRatingsi";
// import Courses from "./pages/Courses";
// import InstructorProfile from "./pages/InstructorProfile";
import MyCoursePageCor from "./pages/MyCoursePageCor";
import RequestSubmitted from "./pages/RequestSubmitted";
// import Viewreviews from "./components/ViewReviews"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       
        <div className="pages">
          <Routes>
            <Route path="/reports/:id" element={<ViewReports />} />
            <Route path="/" element={<NHome />} />
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route
              path="corporatetrainee/viewCourseDetails/:id/:id1"
              element={<CoursePageCor />}
            />
                
            <Route
              path="corporatetrainee/viewMyCourses/:id"
              element={<ViewMyCoursesCor />}
            />
            <Route
              path="corporatetrainee/ChangePassCor/:id"
              element={<ChangePass />}
            />
            <Route
              path="/corporatetrainee/showAnswers/:id/:courseId/:examId"
              element={<McqSol />}
            />
            <Route
              path="/corporatetrainee/solveMcq/:id/:courseId/:examId"
              element={<ExamForm />}
            />
            <Route
              path="/corporatetrainee/viewMyCourses/:id/:id1"
              element={<MyCoursePageCor />}
            />
            <Route
              path="/corporatetrainee/:id"
              element={<CorporateTrainee />}
            />
            <Route path="corporatetrainee/Yarab/:id" element={<YarabCor />} />
            <Route
              path="/corporatetrainee/requestsubmitted/:id"
              element={<RequestSubmitted />}
            />
            <Route
              path="/admin/definepromotion/:id"
              element={<DefinePromotion />}
            />
             <Route path="/contract" element={<TermsPopup/>}></Route>
            <Route path="/ViewReportscorp/:id" element={<ViewReportsCor />} />
            <Route path="/Followupscorp/:id" element={<Followupscorp />} />

            <Route path="/admin/:id" element={<Admin />} />
            <Route path="/admin/reports/:id" element={<ViewReports />} />
            <Route
              path="admin/createusers/:id"
              element={<AdminCreateUsers />}
            />
            <Route path="admin/setpromotion/:id" element={<SetPromotion />} />
            <Route
              path="admin/courserequests/:id"
              element={<AdminCourseRequests />}
            />
            <Route path="/reports" element={<ViewReports />} />
            <Route path="/" element={<Guest />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/Instructor/:id" element={<Instructor />} />
            <Route
              path="/individualtrainee/:id"
              element={<IndividualTrainee />}
            />
            <Route path="/guest" element={<Guest />} />
            <Route path="/corporatetrainee" element={<CorporateTrainee />} />
            <Route
              path="/corporatetrainee/:id"
              element={<CorporateTrainee />}
            />
            <Route
              path="/individualtrainee/viewMyCourses/:id/:id1"
              element={<MyCoursePage />}
            />
            <Route
              path="/individualtrainee/:id/coursePage/:id1"
              element={<CoursePage />}
            />
            <Route
              path="/home/coursePage/:id1"
              element={<CoursePageGuest/>}
            />
            <Route
              path="/Instructor/:id/coursePage/:id1"
              element={<CoursePageGuest/>}
            />

            <Route path="/admin" element={<Admin />} />
            <Route
              path="/instructor/addquestion/:id"
              element={<AddQuestion />}
            />
            <Route path="/CoursesList/:id" element={<CoursesList />} />
            <Route path="/InstructorHome/:id" element={<InstructorHome />} />
            <Route path="/ContractForm" element={<InstructorContract />} />
            <Route path="/instructor/createExam/:id" element={<CreateMCQ />} />
            <Route
              path="/corporatetrainee/showAnswers/:examId"
              element={<McqSol />}
            />
            <Route path="/corporatetrainee/solveMcq" element={<ExamForm />} />
            <Route path="/CreateCourses/:id" element={<CreateC />} />
            <Route path="/ViewCourses" element={<Viewallco />} />
            <Route path="/rateCourse" element={<StarRating />} />
            <Route path="/instructor/ViewMyRatings/:id" element={<Viewrate />} />
            <Route path="/viewmyreviews/:id" element={<Viewreviews />} />
            <Route path="/ViewPrices" element={<Viewprice />} />
            <Route
              path="/instructor/addquestion/:id"
              element={<AddQuestion />}
            />
            <Route
              path="/individualtrainee/viewMyCourses/download"
              element={<Download />}
            />
            <Route
              path="/individualtrainee/MyInstructorProfile/:id"
              element={<MyInstructorProfile />}
            />
            <Route
              path="/individualtrainee/RateCourse/:id"
              element={<RateCourse />}
            />

            <Route path="/Exam" element={<AddMcq />} />
            <Route path="/Pay/:id" element={<CreditCard />} />
            <Route
              path="individualtrainee/viewMyCourses/:id"
              element={<ViewMyCourses />}
            />
            <Route path="individualtrainee/Yarab/:id" element={<Yarab />} />

            <Route
              path="individualtrainee/viewCourseDetails/:id/:courseId"
              element={<CoursePage />}
            />
            {/* <Route
              path="corporatetrainee/viewMyCourses/:id"
              element={<ViewMyCourses />}
            /> */}

            {/* <Route path="/Exam" element={<AddMcq/>}/> */}
            <Route
              path="/indiviual/reset/:token"
              element={<ResetPassIndiv />}
            />
            <Route path="/reset" element={<Reset3 />} />
            <Route path="instructor/reset/:token" element={<ResetPassInst />} />
            <Route
              path="corporatetrainee/reset/:token"
              element={<ResetPass />}
            />
            <Route
              path="/individualtrainee/ReportProbindiv/:id"
              element={<ReportIndiv />}
            />
            <Route path="/Discount/:id" element={<Discount />} />
            <Route path="/UploadYouSubi/:id" element={<UploadYouSubi />} />
            <Route path="/UploadYouPrevi/:id" element={<UploadYouPrevi />} />
            <Route path="/selectcountry/:id" element={<Selectcountry />} />
            <Route path="/ReportProbi/:id" element={<ReportProbi />} />
            <Route path="/ViewReportsi/:id" element={<ViewReportsi />} />
            <Route path="/Followupsi/:id" element={<Followupsi />} />
            {/* <Route
              path="/InstructorProfile/:id"
              element={<InstructorProfile />}
            /> */}
            {/* <Route path="/ViewMyCourses/:id" element={<ViewInsCourses />} /> */}
            <Route
              path="corporatetrainee/Report/:id"
              element={<ReportProblemCor />}
            />
            <Route
              path="individualtrainee/ViewReportsindv/:id"
              element={<ViewReportsindv />}
            />
            <Route
              path="individualtrainee/Followupsindv/:id"
              element={<Followupsindv />}
            />
            <Route
              path="individualtrainee/ChangePassIndiv/:id"
              element={<ChangePassIndiv />}
            />
            <Route path="/instructor/ViewMyRatings/:id" element={<Viewrate />} />
            <Route path="/instructor/viewmyreviews/:id" element={<Viewreviews />} />
            <Route path="/Followupscorp/:id" element={<Followupscorp />} />

            <Route
              path="/instructor/viewmyratings/:id"
              element={<ViewMyRatingsi />}
            />
            <Route path="/instructor/viewmywallet/:id" element={<Walleti />} />
            <Route path="/viewMyStudents/:id" element={<Students />} />
            <Route path="/viewMyCRatings/:id" element={<ViewmyCRatings />} />
            <Route
              path="/instructor/viewmycourses/:id"
              element={<Viewinscourses />}
            />
            <Route path="/EditProfile/:id" element={<EditProfile />} />
            <Route
              path="corporatetrainee/ReportProbcor/:id"
              element={<ReportProbCor />}
            />
            <Route
              path="corporatetrainee/ViewReportscor/:id"
              element={<ViewReportsCor />}
            />
            <Route
              path="corporatetrainee/Followupscor/:id"
              element={<Followupscorp />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
