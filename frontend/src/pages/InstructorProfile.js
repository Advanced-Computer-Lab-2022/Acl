import EditInsProfile from "../components/EditInsProfile";
import SearchMyCourses from "../components/SearchMyCourses";

const InstructorProfile = () => {
  return (
    <div className="profile">
      <h2>My Profile</h2>
      <EditInsProfile />
      <SearchMyCourses placeHolder="Search my Courses"/>
     
    </div>
  );
}

export default InstructorProfile
