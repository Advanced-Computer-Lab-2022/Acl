import CoursesTrainee from "../components/CoursesTrainee";
import MyCoursesCor from "../components/MyCoursesCor";
import AdminSidebar from "../components/NavbarrIndiv";
import Navbar from "../components/SideBarCor";

const ViewMyCoursesCor = () => {
  return (
    // <div className="courses">
    //   <h2> Courses</h2>
    //   <CoursesList />
    <div className="individual trainee">
      <Navbar />

      <div className="indv">
        <h2>My courses</h2>
        {/* <CoursesTrainee /> */}
        <MyCoursesCor />
      </div>
    </div>
  );
};
export default ViewMyCoursesCor;