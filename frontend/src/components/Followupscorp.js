
import { useState } from "react";
// const { useState } = require("react");
import{useParams} from 'react-router-dom';
const Followups = () => {
  const [title,setTitle ] = useState("");
  const [followup,setFollowup ] = useState("");
  const [number,setNumber ] = useState("");
  const [error, setError] = useState(null);
  const {id} = useParams();
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const r = {id,title,followup,number};

    const response = await fetch(`/corporatetrainee/followup/${id}`,{
      method: "PATCH",
      body: JSON.stringify(r),
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("")
      setFollowup("")
      setNumber("")
      setError(null);
      console.log("Followup Sent");
    }
  };


  return (
    <form className="create" onSubmit={handleSubmit}>
    <h3>Report A Course</h3>

    <label>Report Name</label>
    <input
      type="text"
      onChange={(e) => setTitle(e.target.value)}
      value={title}
    />
<label>Followup Number</label>
    <input
      type="text"
      onChange={(e) => setNumber(e.target.value)}
      value={number}
    />
    <label>Description</label>
    <input
      type="text"
      onChange={(e) => setFollowup(e.target.value)}
      value={followup}
    />
    
    <button>Followup</button>
    {error && <div className="error">{error}</div>}
  </form>
  );
};

export default Followups;