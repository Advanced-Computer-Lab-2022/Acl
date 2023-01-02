// import { useState } from "react";

// const SelectCountry = () => {
//     const params = new URLSearchParams(window.location.search);
//     const userId = params.get('userId');
//     console.log(userId);
//   const [country, selectcountry] = useState("");
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const instructor = {country};

//     const response = await fetch(`/instructor/selectcountry/userId=${userId}`.then ,{
//       method: "POST",
//       body: JSON.stringify(instructor),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const json = await response.json();
//     if (!response.ok) {
//       setError(json.error);
//     }
//     if (response.ok) {
//       selectcountry("");
//       setError(null);
//       console.log("new instructor added!");
//     }
//   };

//   return (
//     <form className="select" onSubmit={handleSubmit}>
//       <h3>Select Your Country</h3>
//       <input
//         type="text"
//         onChange={(e) => selectcountry(e.target.value)}
//         value={country}
//       />
//       <button>SelectCountry</button>
//       {error && <div className="error">{error}</div>}
//     </form>
//   );
// };

// export default SelectCountry;

import { useState } from "react";
import{useParams} from 'react-router-dom';
// const { useState } = require("react");

const Selectcountry = () => {
  const [country, setCountry] = useState("");
  
  const [error, setError] = useState(null);
  const {id} = useParams();

  
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const preview = { id,country};

    const response = await fetch(`/indiviualtrainee/selectcountry/${id}`,{
      method: "PATCH",
      body: JSON.stringify(preview),
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
      setCountry("")
      setError(null);
      console.log("Country Added");
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
    <h3>Add Your Country Name</h3>

    <label>Country name</label>
    <input
      type="text"
      onChange={(e) => setCountry(e.target.value)}
      value={country}
    />

    <button>Add Country</button>
    {error && <div className="error">{error}</div>}
  </form>
  );
};

export default Selectcountry;