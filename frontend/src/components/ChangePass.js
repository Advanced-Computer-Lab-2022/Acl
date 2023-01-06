import { useState } from "react";
// const { useState } = require("react");
import{useParams} from 'react-router-dom';
const ChangePass = () => {
  const [password, setPassword] = useState("");
  //const [resetPasswordExpires, setResetPasswordExpires] = useState("");

  const {id} = useParams();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const admin = {password};
    
    const response = await fetch(`/corporatetrainee/ChangePass/${id}`, {
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
      <h3>corporatetrainee Change Password</h3>

      

      <label>Password </label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button>ChangePass</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default ChangePass;