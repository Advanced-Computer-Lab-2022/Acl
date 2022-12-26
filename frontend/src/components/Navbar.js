import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>University Portal</h1>
        </Link>
        <Link to="/home">
          <p>Home</p>
        </Link>
        <p>LOGIN </p>
        <p>Sign up </p>
       
      </div>
    </header>
  )
}

export default Navbar