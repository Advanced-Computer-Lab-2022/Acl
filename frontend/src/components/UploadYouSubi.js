

import { useState } from "react";
import{useParams} from 'react-router-dom';

const Upload1 = () => {
  const [title,setTitle ] = useState("");
  const [subtitle,setsubname ] = useState("");
  const [durationsub,setdurationsub ] = useState("");
  const [exercisesnum,setexercisesnum ] = useState("");
  const [link, setyoutube_video_link] = useState("");
  const [Description,setdescription ] = useState("");
  const [error, setError] = useState(null);

  const {id} = useParams();

  
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const videosubtitle = {id,title,Subtitle:{subtitle,durationsub,exercisesnum,Video:{link,Description}}};

    const response = await fetch(`/instructor/uploadlinksub/${id}`,{
      method: "PATCH",
      body: JSON.stringify(videosubtitle),
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
    });
    const j = await response.json();
    if (!response.ok) {
      setError(j.error);
    }
    if (response.ok) {
      setTitle("");
      setsubname("");
      setdurationsub("");
      setexercisesnum("");
      setyoutube_video_link("");
      setdescription("");
      setError(null);
      console.log("Video uploaded");
      console.log(link)
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
    <h3>Add a Youtube Video to Subtitle</h3>

    <label>Course Title</label>
    <input
      type="text"
      onChange={(e) =>setTitle(e.target.value)}
      value={title}
    />
    <label>Course SubTitle</label>
    <input
      type="text"
      onChange={(e) =>setsubname(e.target.value)}
      value={subtitle}
    />
    <label>Course Subtitle Duration Subtitle</label>
    <input
      type="text"
      onChange={(e) =>setdurationsub(e.target.value)}
      value={durationsub}
    />
    <label>Course SubTitle exercises Number</label>
    <input
      type="text"
      onChange={(e) =>setexercisesnum(e.target.value)}
      value={exercisesnum}
    />
   

    <label>Video Link </label>
    <input
      type="text"
      onChange={(e) =>setyoutube_video_link(e.target.value)}
      value={link}
    />
     <label>Course Youtube Description
     </label>
    <input
      type="text"
      onChange={(e) =>setdescription(e.target.value)}
      value={Description}
    />

    <button>Add Video</button>
    {error && <div className="error">{error}</div>}
  </form>
  );
};

export default Upload1;
