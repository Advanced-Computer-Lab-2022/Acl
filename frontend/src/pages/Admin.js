// import instructorForm from "../components/instructorForm";
// import corTraineeForm from "../components/corTraineeForm";
// import adminForm from "../components/adminForm";

import InstructorForm from "../components/InstructorForm";
import CorTraineeForm from "../components/CorTraineeForm";
import AdminForm from "../components/AdminForm";

const Admin = () => {
  return (
    <div className="admin">
      <h2>Admin</h2>
      <AdminForm></AdminForm>
      <InstructorForm />
      <CorTraineeForm />
    </div>
  );
};

export default Admin;