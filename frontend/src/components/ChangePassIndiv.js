import { useState } from "react";
import { Alert } from "react-bootstrap";
// const { useState } = require("react");
import{useParams} from 'react-router-dom';
import AdminSidebar from "../components/NavbarrIndiv";

const ChangePass = () => {
  const [password, setPassword] = useState("");
  //const [resetPasswordExpires, setResetPasswordExpires] = useState("");

  const {id} = useParams();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const admin = {password};
    // console.log({token})
    const response = await fetch(`/indiviualtrainee/ChangePass/${id}`, {
      method: "PATCH",
      body:JSON.stringify(admin),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      //setUsername("");
      setPassword("");
      setError(null);
      alert("Your Password has been changed Succesfully");
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <AdminSidebar/>
      <div className="indv">
      <h3>You have to remember it</h3>

      

      <label>Enter Your New Password </label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button>ChangePass</button>
      {error && <div className="error">{error}</div>}
      </div>
    </form>
  );
};

export default ChangePass;