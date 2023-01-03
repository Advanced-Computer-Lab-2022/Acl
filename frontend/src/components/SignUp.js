import { Checkbox } from "@mui/material";
import { useState } from "react";
// const { useState } = require("react");
import{useParams} from 'react-router-dom';
import {useNavigate } from 'react-router-dom';
import "./styles.css";
import { Link } from "react-router-dom";
import Navbar from "../pages/Navbar";

const SignUp = () => {
  const navigate=useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [last_name, setLast_name] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [gender, setGender] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  //const [resetPasswordExpires, setResetPasswordExpires] = useState("");
  const [error, setError] = useState(null);
//   const onValueChange= async (e) =>{
//     this.setState({
//       site: e.currentTarget.value,
//     });
//   }
//console.log(gender)
const [accepted, setAccepted] = useState(false);

  function handleChange(event) {
    setAccepted(event.target.checked);}
  
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
    
    <div>

      <Navbar/>
      <div className="laziz">
    <div className="form">
    <span class="form__title">Sign up</span>
    <form className="create" onSubmit={handleSubmit}>
      <h3>signUp</h3>
      <label>Username </label>
      <div class="form__input">
      <i class="ri-user-line"></i>
      <input
      placeholder="Username"
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        required
      />
       <span class="bar"></span>
      </div>
      <div class="form__input">
      <i class="ri-user-line"></i>
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
      />
 <span class="bar"></span>
</div>

<div class="form__input">
      <i class="ri-user-line"></i>
      <input
        type="text"
        placeholder="First Name"
        onChange={(e) => setFirst_name(e.target.value)}
        value={first_name}
        required
      />
 <span class="bar"></span>
</div>
<div class="form__input">
      <i class="ri-user-line"></i>
      <input
      placeholder="LastName"
        type="text"
        onChange={(e) => setLast_name(e.target.value)}
        value={last_name}
        required
      />
 <span class="bar"></span>
 
     
      
    </div>
      
   

       <div class="form__input">
      <i class="ri-user-line"></i>
      <input
      placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required
      />
       <span class="bar"></span>
</div>
<label className="gender" for = "gender">Gender:
<div class="form__input">
  <label for="html">male</label>
  <input  class = "radio1"  type="radio" id="html" name="fav_language" value="male" onChange={(e) => setGender(e.target.value)}/>
  <label for="css">female</label>
  <input class = "radio2" type="radio" id="css" name="fav_language" value="female" 
onChange={(e) => setGender(e.target.value)} required
 />
{/* value={gender} */}

</div> </label>
<div className="ol">
<h1 className='lala'>Please read and accept the <a href="/contract" target="_blank">Terms and Conditions</a></h1>
      <label>
        <input
          type="checkbox"
          checked={acceptedTerms}
          onChange={() => setAcceptedTerms(!acceptedTerms)}
          required
          
        />
        <a accept the terms and conditions />
      </label>
      {accepted && <h1 className="lala">Thank you for accepting the Terms and Conditions </h1>}
      
</div>

<button type="submit" class="form__button">Sign Up</button>
            {error && <div className="error">{error}</div>}
            <span class="form__switch">
              Alreadey have an account?<a href="/login">Login</a>
            </span>
    
    </form>
    </div>
</div>
</div>
  );
};

export default SignUp;