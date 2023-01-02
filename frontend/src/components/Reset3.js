import { useState } from "react";
// const { useState } = require("react");
import {useNavigate } from 'react-router-dom';
const Reset3 = () => {
  const [email, setemail] = useState("");
  const navigate=useNavigate();
  // const [admin, setAdmin] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //const email = {email};
    const admin = {email};
    const response = await fetch("/forgetPassPost", {
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
      setemail("");
      setError(null);
      alert("We have send an email to you to reset your Password");
      navigate('/login')
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Please enter your email here</h3>

      <label>email </label>
      <input
        type="text"
        onChange={(e) => setemail(e.target.value)}
        value={email}
      />

      <button>Reset Pass</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Reset3;