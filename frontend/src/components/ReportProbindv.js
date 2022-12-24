import { useState } from "react";
// const { useState } = require("react");
import{useParams} from 'react-router-dom';
const Report = () => {
  const [coursename,setCourseName ] = useState("");
  const [reportname,setReportName] = useState("");
  const [type,setType] = useState("");
  const [description,setDescription] = useState("");
  const [error, setError] = useState(null);
  const {id} = useParams();
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const r = {id,coursename,reportname,type,description};

    const response = await fetch(`/individualtrainee/reportcourse/${id}`,{
      method: "POST",
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
      setCourseName("");
      setReportName("");
      setType("");
      setDescription("");
      setError(null);
      console.log("Report Sent");
    }
  };
//   console.log(youtube_video_link)

  return (
    <form className="create" onSubmit={handleSubmit}>
    <h3>Report A Course</h3>

    <label>Course Name</label>
    <input
      type="text"
      onChange={(e) => setCourseName(e.target.value)}
      value={coursename}
    />

    <label>Report Name</label>
    <input
      type="text"
      onChange={(e) => setReportName(e.target.value)}
      value={reportname}
    />
     <label>Type</label>
    <input
      type="text"
      onChange={(e) => setType(e.target.value)}
      value={type}
    />
     <label>Description</label>
    <input
      type="text"
      onChange={(e) => setDescription(e.target.value)}
      value={description}
    />

    <button>Send Report</button>
    {error && <div className="error">{error}</div>}
  </form>
  );
};

export default Report;