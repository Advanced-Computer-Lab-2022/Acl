import { useState } from "react";
import axios from 'axios';
import { useParams, useLocation } from "react-router-dom";

const EditInsProfile =() =>{
    const [bio, setBio]= useState('')
   const [email, setEmail]= useState('')
   const location = useLocation();
   const search = location.search;
    const params = new URLSearchParams(search);
    const id = params.get('userId'); // bar
     console.log(id);
    const handleSubmit = async () =>{
    
     await axios.put(`http://localhost:7007/instructor/EditInsProfileB?userId=${id}`, {
        bi: JSON.stringify(bio)
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
    
    }
    const handleSubmite = async () =>{
  
     await axios.put(`http://localhost:7007/instructor/EditInsProfileE?userId=${id}`, {
        em: email
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
    
    }
    return(
       <> <form className="editB" onSubmit={handleSubmit}>
            <h3>Edit your Biography</h3>
            <input
                type="text"
                onChange={(e) => setBio(e.target.value)}
                value={bio} />
            <button>Edit</button>
        </form>
        <form className="editE" onSubmit={handleSubmite}>
                <h3>Edit your Email</h3>
                <input
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email} />
                <button>Edit</button>
                
            </form></>
        
    )
}
export default EditInsProfile