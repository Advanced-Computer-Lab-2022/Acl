import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./AdminCreateUsers.css"
import CorTraineeForm from "../components/CorTraineeForm"
import InstructorForm from "../components/InstructorForm"
import AdminForm from "../components/AdminForm"

 
function AdminCreateUser() {
 return (
   <div className="App">
     <Tabs className="Tabs">
       <TabList>
         <Tab>Corporate Trainee</Tab>
         <Tab>Instructor</Tab>
         <Tab>Admin</Tab>
       </TabList>
<TabPanel>
<CorTraineeForm/>
       </TabPanel>
       <TabPanel>
       <InstructorForm/>
       </TabPanel>
       <TabPanel>
       <AdminForm/>
       </TabPanel>
     </Tabs>
   </div>
 );
}
 
export default AdminCreateUser;