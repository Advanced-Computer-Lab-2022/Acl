import { useState } from "react";
// const { useState } = require("react");
import{useParams} from 'react-router-dom';
import {useNavigate } from 'react-router-dom';
import "./styles.css";
const SignUp = () => {
  const navigate=useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [last_name, setLast_name] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [gender, setGender] = useState("");
  //const [resetPasswordExpires, setResetPasswordExpires] = useState("");
  const [error, setError] = useState(null);
//   const onValueChange= async (e) =>{
//     this.setState({
//       site: e.currentTarget.value,
//     });
//   }
//console.log(gender)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const admin = {username,email,first_name,last_name,gender,password};
     //console.log({token})
    const response = await fetch(`/signUp`, {
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
      setUsername("");
      setPassword("");
      setEmail("");
      setError(null);
      navigate(json);
      console.log(json);
    }
  };

  return (
    <div className="form">
    <form className="create" onSubmit={handleSubmit}>
      <h3>signUp</h3>
      <label>username </label>
      <div className="input-container">

      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      </div>
      <label>email </label>
      <div className="input-container">

      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

</div>
      <label>first_name </label>
      <div className="input-container">

      <input
        type="text"
        onChange={(e) => setFirst_name(e.target.value)}
        value={first_name}
      />

</div>
      <label>last_name </label>
      <div className="input-container">

      <input
        type="text"
        onChange={(e) => setLast_name(e.target.value)}
        value={last_name}
      />

</div>
      <label>Gender </label>
      <div className="radio">
          <label>
            <input
              type="radio"
              value="Male"
onChange={(e) => setGender(e.target.value)}
              
            />
            Male
          </label>
        </div>
        <div className="radio">




          <label>
            <input
              type="radio"
              value="Female"
              
              onChange={(e) => setGender(e.target.value)}
              
            />
            Female
          </label>
        
       
       
      
       <label>Password </label>


      <input
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
</div>
<div className="button-container">
      <button>SignUp</button>
      {error && <div className="error">{error}</div>}
      </div>
    </form>
    </div>
  );
};

export default SignUp;