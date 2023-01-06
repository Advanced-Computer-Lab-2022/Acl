// import React from 'react';
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBIcon,
//   MDBInput
// }
// from 'mdb-react-ui-kit';

// function App() {
//   return (
//     <MDBContainer fluid>
//       <MDBRow>

//         <MDBCol sm='6'>

//           <div className='d-flex flex-row ps-5 pt-5'>
//             <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/>
//             <span className="h1 fw-bold mb-0">Logo</span>
//           </div>

//           <div className='mainsec'>

//             <h3 className="" style={{letterSpacing: '1px'}}>Log in</h3>

//             <MDBInput class= 'email1' wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' />
//             <MDBInput class= 'password1'wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' />

//             <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg'>Login</MDBBtn>
//             <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted" href="#!">Forgot password?</a></p>
//             <p className='ms-5'>Don't have an account? <a href="#!" class="link-info">Register here</a></p>

//           </div>

//         </MDBCol>

//         <MDBCol sm='6' className='d-none d-sm-block px-0'>
//           <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
//             alt="Login image" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
//         </MDBCol>

//       </MDBRow>

//     </MDBContainer>
//   );
// }

// export default App;


// import React from 'react';
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBIcon,
//   MDBInput
// }
// from 'mdb-react-ui-kit';
// import './login1.css'
// function App() {
//   return (
//     <MDBContainer fluid>
//       <MDBRow>
// <div className='main section'>
//         <MDBCol sm='6'>

//           <div className='d-flex flex-row ps-5 pt-5'>
//             <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/>
         
//           </div>

//           <div className='login1'>

//             <h3 className="loginword" >Log in</h3>

//             <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
//             <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

//             <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg'>Login</MDBBtn>
//             <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted" href="#!">Forgot password?</a></p>
//             <p className='ms-5'>Don't have an account? <a href="/signUp" class="link-info">Register here</a></p>

//           </div>

//         </MDBCol>

//         <MDBCol sm='6' className='d-none d-sm-block px-0'>
//           <img src="https://www.oberlo.com/media/1603898030-womans-hands-typing-laptop-scaled.jpg?fit=max&fm=jpg&w=1824"
//             alt="Login image" className="w-100"  />
//         </MDBCol>

// </div>
//       </MDBRow>

//     </MDBContainer>
//   );
// }

// export default App;


import { useState } from "react";
// const { useState } = require("react");
import{useParams} from 'react-router-dom';
import {useNavigate } from 'react-router-dom';
import "./styles.css";
import "./login1.css";
import Navbar from "../pages/Navbar";
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
//     <div className="form">
//     <form className="create" onSubmit={handleSubmit}>
//       <h3>Login</h3>
//       <label>username </label>
//       <div className="input-container">

//       <input
//         type="text"
//         onChange={(e) => setUsername(e.target.value)}
//         value={username}
//         style={{width:250}}
//       />
//        <label>Password </label>
//       <input
//         type="text"
//         onChange={(e) => setPassword(e.target.value)}
//         value={password}
//         style={{width:250}}
//       />
// </div>
// <div className="button-container">
//       <button style={{width:250}} >login</button>
//       {error && <div className="error">{error}</div>}
//       </div>
//     </form>
//     </div>
 <div>
  <Navbar/>
  <div className="laziz">
  <div class="form">

  
        <span class="form__title">Login</span>
        <form action="create" onSubmit={handleSubmit}>
            <div class="form__input">
                <i class="ri-user-line"></i>
                <input
                placeholder="Username"
         type="text"
         onChange={(e) => setUsername(e.target.value)}
         value={username}
         style={{width:250}}
       />
                <span class="bar"></span>
            </div>

            <div class="form__input">
                <i class="ri-lock-line"></i>
                <input type="password" placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                 value={password}
                 style={{width:250}}/>
                <span class="bar"></span>
            </div>
            <button type="submit" class="form__button">Login</button>
            {error && <div className="error">{error}</div>}
            <a href="/reset"><span class="form__switch">
              Forget Password </span></a>
            <span class="form__switch">
              don't have an account? <a href="/signUp">Sign Up</a>
            </span>
        </form>
        
    </div>
    
    
      
      {/* <label>
            <input class = 'radio1'type="radio"value="Female" />
            <input class = 'radio2'type="radio"value="Female" />
            <input class = 'radio3'type="radio"value="Female" />
            Female
          </label> */}

 </div> 
 
 </div>

  );
};

export default Login1;