import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const { useState } = require("react");

const WriteNotes = () => {
  const [data, setNotes] = useState("");
  
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const instructor = { data };

    const response = await fetch("/indiviualtrainee/Save", {
      method: "POST",
      body: JSON.stringify(instructor),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
        alert("Your Notes Are Saved Succesfully As notes.txt");
        setNotes("")
      setError(null);
      
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      
      <input 
      placeholder="Download Your Notes" 
      type="text"
        onChange={(e) => setNotes(e.target.value)}
        value={data}
         variant="outlined" />
      
       
      <button >Download Your Notes</button>
      {error && <div className="error">{error}</div>}
    
    </form>
  );
};

export default WriteNotes;