import { useState } from "react";
// const { useState } = require("react");
import { useNavigate } from "react-router-dom";
import{useParams} from 'react-router-dom';
const CoursePage = () => {
    const navigate = useNavigate(); 
    const {id} = useParams();
  // const [admin, setAdmin] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
   
    navigate(`/Pay/${id}`)}

    //const email = {email};
   

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Pay</h3>

      

      <button>Pay</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default CoursePage;