import { useState } from "react";
// const { useState } = require("react");
import{useParams} from 'react-router-dom';
const Upload2 = () => {
  const [title,setTitle ] = useState("");
  const [youtube_video_link,setyoutube_video_link] = useState("");
  const [error, setError] = useState(null);

  const {id} = useParams();
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const link = {id,title,preview: youtube_video_link};

    const response = await fetch(`/instructor/uploadlinkprev/${id}`,{
      method: "PATCH",
      body: JSON.stringify(link),
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
      setTitle("");
      setyoutube_video_link("");
      setError(null);
      console.log("Video uploaded");
    }
  };
  console.log(youtube_video_link)

  return (
    <form className="create" onSubmit={handleSubmit}>
    <h3>Add a Youtube preview Video</h3>

    <label>Course Title</label>
    <input
      type="text"
      onChange={(e) => setTitle(e.target.value)}
      value={title}
    />

    <label>Video Link </label>
    <input
      type="text"
      onChange={(e) => setyoutube_video_link(e.target.value)}
      value={youtube_video_link}
    />

    <button>Add Video</button>
    {error && <div className="error">{error}</div>}
  </form>
  );
};

export default Upload2;
