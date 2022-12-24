// import { useState } from "react";
// // const { useState } = require("react");

// const Discount = () => {
//     const [name,setName]=useState("");
//   const [discountamount, setDiscountAmount] = useState("");
//   const [startdate,setStartDate ] = useState("");
//   const [enddate,setEndDate ] = useState("");
//   const [error, setError] = useState(null);
//   const params = new URLSearchParams(window.location.search);
//     const userId = params.get('userId');
//     console.log(userId);
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const discount = { discountamount, startdate, enddate: "true" };

//     const response = await fetch(`/instructor/definepromotion?userId=${userId}`,{
//       method: "POST",
//       body: JSON.stringify(discount),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const json = await response.json();
//     if (!response.ok) {
//       setError(json.error);
//     }
//     if (response.ok) {
//       setDiscountAmount("");
//       setStartDate("");
//       setEndDate("");
//       setError(null);
//       console.log("new Discount added!");
//     }
//   };

//   return (
//     <form className="create" onSubmit={handleSubmit}>
//          <h3>Add a Discount</h3>

//          <label>Title</label>
// <input
//   type="text"
//   onChange={(e) => setName(e.target.value)}
//   value={name}
// />

// <label>Discount Amount</label>
// <input
//   type="text"
//   onChange={(e) => setDiscountAmount(e.target.value)}
//   value={discountamount}
// />

// <label>Start Date </label>
// <input
//   type="text"
//   onChange={(e) => setStartDate(e.target.value)}
//   value={startdate}
// />
// <label>End Date </label>
// <input
//   type="text"
//   onChange={(e) => setEndDate(e.target.value)}
//   value={enddate}
// />

// <button>Add Discount</button>
// {error && <div className="error">{error}</div>}

//     </form>
//   );
// };

// export default Discount;

import { useState } from "react";
// const { useState } = require("react");

const Discount = () => {
    const [title,setTitle]=useState("");
  const [discountamount, setDiscountAmount] = useState("");
  const [startdate,setStartDate ] = useState("");
  const [enddate,setEndDate ] = useState("");
  const [error, setError] = useState(null);

  const params = new URLSearchParams(window.location.search);
    const userId = params.get('userId');
    console.log(userId);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const discount = { userId,title,discountamount, startdate, enddate};
   
    const response = await fetch(`/instructor/definepromotion/${userId}`,{
      method: "PATCH",
      body: JSON.stringify(discount),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const J = await response.json();
    if (!response.ok) {
      setError(J.error);
    }
    if (response.ok) {
      setTitle("");
      setDiscountAmount("");
      setStartDate("");
      setEndDate("");
      setError(null);
      console.log("new Discount added!");
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
         <h3>Add a Discount</h3>

         <label>Title</label>
<input
  type="text"
  onChange={(e) => setTitle(e.target.value)}
  value={title}
/>

<label>Discount Amount</label>
<input
  type="text"
  onChange={(e) => setDiscountAmount(e.target.value)}
  value={discountamount}
/>

<label>Start Date </label>
<input
  type="text"
  onChange={(e) => setStartDate(e.target.value)}
  value={startdate}
/>
<label>End Date </label>
<input
  type="text"
  onChange={(e) => setEndDate(e.target.value)}
  value={enddate}
/>

<button>Add Discount</button>
{error && <div className="error">{error}</div>}

    </form>
  );
};

export default Discount;