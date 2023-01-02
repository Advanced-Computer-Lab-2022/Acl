import { useState } from "react";
// const { useState } = require("react");
import{useParams} from 'react-router-dom';  

import Navbar from "./Navbarr";
const DefinePromotion = () => {
//const {courseId} = params.get("courseId");
  const [discountamount, setDiscountAmount] = useState("");
  const [startdate,setStartDate ] = useState("");
  const [enddate,setEndDate ] = useState("");
  const [error, setError] = useState(null);
  
  const [empty,setEmpty]=useState([]);
   const {id}=useParams()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const discount = {discountamount, startdate, enddate};
    console.log(discountamount)
    const response = await fetch(`/admin/definepromotion/${id}`,{
      method: "PATCH",
      body: JSON.stringify(discount),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const J = await response.json();
     if (!response.ok) {
      setError(J.error);
      setEmpty(J.empty);
    }
    
    
    if (response.ok) {
      setEmpty([]); 
      setDiscountAmount("");
      setStartDate("");
      setEndDate("");
      setError(null);
      console.log("new Discount added!");
    }
  };

  return (
    <div>
      <div>
      <Navbar/>
      </div>
      <div>
      <div className="inss1">
    <form className="create" onSubmit={handleSubmit}>
         <h3 >Add Discount</h3>
        
<label  class="required-field">Discount Amount</label>
<input
  type="number"
  
  onChange={(e) => setDiscountAmount(e.target.value)}
  value={discountamount}
/>

<label  class="required-field">Start Date </label>
<input
  type="date"
  
  onChange={(e) => setStartDate(e.target.value)}
  value={startdate}
/>
<label class="required-field">End Date </label>
<input
  type="date"
  
  onChange={(e) => setEndDate(e.target.value)}
  value={enddate}
/>

<button >Add Discount</button>
{error && <div className="error">{error}</div>}

    </form>
    </div>
    </div>
    </div>
  );
};

export default DefinePromotion;