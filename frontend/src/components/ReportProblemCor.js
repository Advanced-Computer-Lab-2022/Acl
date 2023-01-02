import { useState } from "react";
// const { useState } = require("react");
import { useParams } from "react-router-dom";
import Navbar from "./SideBarCor";

const ReportProblemCor = () => {
  const [reportname, setReportName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const { id } = useParams();
  const [empty, setEmpty] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const r = { id, reportname, type, description };
    const response = await fetch(
      `/corporatetrainee/reportcourse/${id}?courseId${window.location.search}`,
      {
        method: "POST",
        body: JSON.stringify(r),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      setEmpty(json.empty);
    }
    if (response.ok) {
      setEmpty([]);
      setReportName("");
      setType("");
      setDescription("");
      setError(null);
      console.log("Report Sent");
    }
  };
  //   console.log(youtube_video_link)

  return (
    <div>
      <Navbar />
      <div className="inss1">
        <form className="create" onSubmit={handleSubmit}>
          <h3 className={empty.includes("resolved") ? "error" : ""}>
            Report A Course
          </h3>
          <label class="required-field">Report Name</label>
          <input
            type="type"
            onChange={(e) => setReportName(e.target.value)}
            value={reportname}
            className={empty.includes("reportname") ? "error" : ""}
          />
          <label class="required-field">Type</label>
          <input
            type="type"
            onChange={(e) => setType(e.target.value)}
            value={type}
            className={empty.includes("type") ? "error" : ""}
          />
          <label class="required-field">Description</label>
          <input
            type="type"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className={empty.includes("description") ? "error" : ""}
          />

          <button>Send Report</button>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default ReportProblemCor;