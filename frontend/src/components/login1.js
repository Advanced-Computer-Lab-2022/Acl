import { useState } from "react";
// const { useState } = require("react");
import{useParams} from 'react-router-dom';
import {useNavigate } from 'react-router-dom';
import "./styles.css";
const Login1 = () => {
  const navigate=useNavigate();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  //const [resetPasswordExpires, setResetPasswordExpires] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const admin = {username,password};
     //console.log({token})
    const response = await fetch(`/login`, {
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
      navigate(json);
      console.log(json);
    }
  };

  return (
    <div className="form">
    <form className="create" onSubmit={handleSubmit}>
      <h3>Login</h3>
      <label>username </label>
      <div className="input-container">

      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
       <label>Password </label>
      <input
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
</div>
<div className="button-container">
      <button>login</button>
      {error && <div className="error">{error}</div>}
      </div>
    </form>
    </div>
  );
};

export default Login1;