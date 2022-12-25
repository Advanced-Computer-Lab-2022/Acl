import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import './Button.css'
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const navigate = useNavigate();
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            University Portal
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <div class = "section "/><div/>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
              
            </li>
            
            <li className='nav-item'>
              <Link
                to="/login"
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/SignUp"
                className='nav-links'
                onClick={closeMobileMenu}>
                  Sign Up
              </Link>
            </li>
         
            
          </ul>
  
        </div>
      </nav>
    </>
  );
}

export default Navbar;

// import { Link } from 'react-router-dom'
// import {useNavigate } from 'react-router-dom';
// import { useState } from "react";
// const Navbar = () => {
//   const navigate=useNavigate();
//   const [error, setError] = useState(null);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//      //console.log({token})
//     const response = await fetch(`/logout`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const json = await response.json();
//     if (!response.ok) {
//       setError(json.error);
//     }
//     if (response.ok) {
//       setError(null);
//       navigate("/");
//       console.log(json);
//     }
//   };
//   return (
//     <header>
//       <div className="container">
//         <Link to="/">
//           <h1>University Portal</h1>
//         </Link>
//         <Link to="/home">
//           <p>Home</p>
//         </Link>
//         <Link to="/login">
//         <p>LOGIN </p>
//         </Link>
//         <Link to="/SignUp">
//         <p>Sign up </p>
//         </Link>
//         <form className="create" onSubmit={handleSubmit}>
//         <div className="button-container">
//       <button>Logout</button>
//       {error && <div className="error">{error}</div>}
//       </div>
//         </form>
//       </div>
//     </header>
//   )
// }

// export default Navbar
