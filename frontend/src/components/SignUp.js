import { useState } from "react";
// const { useState } = require("react");
import{useParams} from 'react-router-dom';
import {useNavigate } from 'react-router-dom';
import "./styles.css";
<<<<<<< HEAD
=======

>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
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
<<<<<<< HEAD
    <div className="form">
    <form className="create" onSubmit={handleSubmit}>
      <h3>signUp</h3>
      <label>username </label>
      <div className="input-container">

      <input
=======
    
    <div>

       
    <div className="form">
    <span class="form__title">Sign up</span>
    <form className="create" onSubmit={handleSubmit}>
      <h3>signUp</h3>
      <label>Username </label>
      <div class="form__input">
      <i class="ri-user-line"></i>
      <input
      placeholder="Username"
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
<<<<<<< HEAD
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
=======
       <span class="bar"></span>
      </div>
      <div class="form__input">
      <i class="ri-user-line"></i>
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
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
      />
 <span class="bar"></span>
</div>
<div class="form__input">
      <i class="ri-user-line"></i>
      <input
      placeholder="LastName"
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
        type="text"
        onChange={(e) => setLast_name(e.target.value)}
        value={last_name}
      />
<<<<<<< HEAD

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
=======
 <span class="bar"></span>
 
     
      
    </div>
      
   

       <div class="form__input">
      <i class="ri-user-line"></i>
      <input
      placeholder="Password"
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
<<<<<<< HEAD
</div>
<div className="button-container">
      <button>SignUp</button>
      {error && <div className="error">{error}</div>}
      </div>
    </form>
    </div>
=======
       <span class="bar"></span>
</div>
<label className="gender" for = "gender">Gender:
<div class="form__input">
  <label for="html">male</label>
  <input  class = "radio1"  type="radio" id="html" name="fav_language" value="male" onChange={(e) => setGender(e.target.value)}/>
  <label for="css">female</label>
  <input class = "radio2" type="radio" id="css" name="fav_language" value="female" 
onChange={(e) => setGender(e.target.value)}
 />
{/* value={gender} */}

</div> </label>


<button type="submit" class="form__button">Sign Up</button>
            {error && <div className="error">{error}</div>}
            <span class="form__switch">
              Alreadey have an account?<a href="/login">Login</a>
            </span>
    
    </form>
    </div>
</div>
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
  );
};

export default SignUp;