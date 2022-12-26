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