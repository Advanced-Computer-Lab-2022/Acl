// import adminForm from "../components/adminForm";

import InstructorForm from "../components/InstructorForm";
import CorTraineeForm from "../components/CorTraineeForm";
import AdminForm from "../components/AdminForm";
import AdminSidebar from "../components/AdminSidebar";
import Navbar from "../components/Navbarr"
import{useParams} from 'react-router-dom';
import { App } from "../components/adminehome";
import { Apps } from "../components/AdminH2";

const Admin = () => {
  const {id} = useParams();
  return (
    <div className="admin">
        <Navbar/>
        <App/>
        <Apps/>

        
   
     
    </div>
  );
};

export default Admin;