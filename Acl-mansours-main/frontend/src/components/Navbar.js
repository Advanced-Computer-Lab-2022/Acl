import { Link } from 'react-router-dom'
import {useNavigate } from 'react-router-dom';
import { useState } from "react";
const Navbar = () => {
  const navigate=useNavigate();
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
     //console.log({token})
    const response = await fetch(`/logout`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      navigate("/");
      console.log(json);
    }
  };
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>University Portal</h1>
        </Link>
        <Link to="/home">
          <p>Home</p>
        </Link>
        <Link to="/login">
        <p>LOGIN </p>
        </Link>
        <Link to="/SignUp">
        <p>Sign up </p>
        </Link>
        <form className="create" onSubmit={handleSubmit}>
        <div className="button-container">
      <button>Logout</button>
      {error && <div className="error">{error}</div>}
      </div>
        </form>
      </div>
    </header>
  )
}

export default Navbar