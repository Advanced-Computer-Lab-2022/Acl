import { useState } from "react";
// const { useState } = require("react");
import{useParams} from 'react-router-dom';
const ResetPass = () => {
  const [password, setPassword] = useState("");
  //const [resetPasswordExpires, setResetPasswordExpires] = useState("");

  const {token} = useParams();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const admin = {password};
     console.log({token})
    const response = await fetch(`/corporatetrainee/reset/${token}`, {
      method: "POST",
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
      console.log("passord reset");
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>corporatetrainee REset Password</h3>

      

      <label>Password </label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button>ResetPass</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default ResetPass;