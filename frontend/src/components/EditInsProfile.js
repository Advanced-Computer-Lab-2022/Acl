import { useState } from "react";
import axios from 'axios';
import { useParams, useLocation } from "react-router-dom";
import Navbar from "./Navbarri";
const EditInsProfile =() =>{
    const [bio, setBio]= useState('')
   const [email, setEmail]= useState('')
 
   const [error, setError] = useState(null);
 
   const {id} = useParams();
  // bar
  const b = {bio};
  const em= {email};
 
  
    const handleSubmitbe = async (e) =>{
      e.preventDefault();
      const all={id,bio,email};
    const response= await fetch(`/instructor/EditMyProfile/${id}`, {
      method: "PATCH",
      body: JSON.stringify(all),
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
    setEmail("");
    setBio("");
   
    setError(null);
    
  }
    
    }
    return(
       <> 
       <div>
        <Navbar/>
        <div className="inss1">
       <form className="create" onSubmit={handleSubmitbe}>
       
            <label>Edit your Biography</label>
            <input
                type="type"
                onChange={(e) => setBio(e.target.value)}
                value={bio} />
                <label>Edit your Email</label>
                <input
                    type="type"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email} />
                <button  >Edit</button>
                {error && <div className="error">{error}</div>}
            </form>
            </div>
            </div>
            </>
        
    )
}
export default EditInsProfile