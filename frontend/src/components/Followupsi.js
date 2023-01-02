import { useState } from "react";
// const { useState } = require("react");
import{useParams} from 'react-router-dom';
import Navbar from "./Navbarri";
const Followups = () => {
  
  const [followup,setFollowup ] = useState("");
  const [number,setNumber ] = useState("");
  const [error, setError] = useState(null);
  const {id} = useParams();

  const params = new URLSearchParams(window.location.search);
  const reportId = params.get('reportId');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const r = {id,followup,number};
    const response = await fetch(`/instructor/followup/${id}?reportId=${reportId}`,{
      method: "PATCH",
      body: JSON.stringify(r),
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
     
    }
    if (response.ok) {
      
      setFollowup("")
      setNumber("")
      setError(null);
      console.log("Followup Sent");
    }
  };


  return (
    <div>
      <Navbar/>
      <div className="inss1">
    <form className="create" onSubmit={handleSubmit}>
   
    <h3>Report A Course</h3>
<label class="required-field">Followup Number</label>
    <input
      type="number"
      onChange={(e) => setNumber(e.target.value)}
      value={number}
     
    />
    <label class="required-field">Description</label>
    <input
      type="type"
      onChange={(e) => setFollowup(e.target.value)}
      value={followup}
      
    />
    
    <button>Followup</button>
    {error && <div className="error">{error}</div>}
  </form>
  </div>
  </div>
  );
};

export default Followups;