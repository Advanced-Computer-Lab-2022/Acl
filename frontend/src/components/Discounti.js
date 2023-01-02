import { useState } from "react";
// const { useState } = require("react");
import{useParams} from 'react-router-dom';  
import Navbar from "./Navbarri";
const Discount = () => {
//const {courseId} = params.get("courseId");
  const [discountamount, setDiscountAmount] = useState("");
  const [startdate,setStartDate ] = useState("");
  const [enddate,setEndDate ] = useState("");
  const [error, setError] = useState(null);
  const {id} = useParams();
  const [empty,setEmpty]=useState([]);
  const[success,setSuccess]=useState(false)
  const show = () => setSuccess(true);
  const params = new URLSearchParams(window.location.search);
  const courseId = params.get('courseId');
  // const {id1}=req.query.courseId
  const handleSubmit = async (e) => {
    e.preventDefault();
    const discount = {id,discountamount, startdate, enddate};
    const response = await fetch(`/instructor/definepromotion/${id}?courseId=${courseId}`,{
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
      setSuccess=(false);
    }
    
    
    if (response.ok) {
      setSuccess(true);
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
    <label className={success ? "success":"notsuccess"}>Discount Added Successfully</label>
         <h3  className={empty.includes('discounthere')?'error':''}>Add Discount</h3>
        
<label  class="required-field">Discount Amount</label>
<input
  type="number"
  className={empty.includes('discountamount')?'error':''}
  onChange={(e) => setDiscountAmount(e.target.value)}
  value={discountamount}
/>

<label  class="required-field">Start Date </label>
<input
  type="date"
  className={empty.includes('startdate')?'error':''}
  onChange={(e) => setStartDate(e.target.value)}
  value={startdate}
/>
<label class="required-field">End Date </label>
<input
  type="date"
  className={empty.includes('enddate')?'error':''}
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

export default Discount;