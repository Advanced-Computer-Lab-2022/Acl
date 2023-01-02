import McqSol from "../components/McqSol";
import Viewall from "../components/Viewallco";
import { useNavigate } from "react-router-dom";
import ChangePass from "../components/ChangePass";
import SearchForCourse from "../components/SearchForCourse";
import { useParams } from "react-router-dom";
import ViewCourses from "../components/ViewCourses";
import Navbar from "../components/SideBarCor";
import Navbarr from "../components/Navbarr";

const CorporateTrainee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="corporate trainee">
      <Navbar />
      <div className="indv">
        <SearchForCourse />
        <ViewCourses />
      </div>
    </div>
  );
};

export default CorporateTrainee;