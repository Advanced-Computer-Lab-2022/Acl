

import { useState } from "react";


const Upload1 = () => {
  const [title,setTitle ] = useState("");
  const [SubName,setsubname ] = useState("");
  const [durationSub,setdurationsub ] = useState("");
  const [exercisesNum,setexercisesnum ] = useState("");
  const [youtube_video_link, setyoutube_video_link] = useState("");
  const [description,setdescription ] = useState("");
  const [error, setError] = useState(null);

  const params = new URLSearchParams(window.location.search);
  const userId = params.get('userId');
  

  
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const videosubtitle = {userId,title,SubName,durationSub,exercisesNum,youtube_video_link,description};

    const response = await fetch(`/instructor/uploadlinksub/${userId}`,{
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
      value={SubName}
    />
    <label>Course Subtitle Duration Subtitle</label>
    <input
      type="text"
      onChange={(e) =>setdurationsub(e.target.value)}
      value={durationSub}
    />
    <label>Course SubTitle exercises Number</label>
    <input
      type="text"
      onChange={(e) =>setexercisesnum(e.target.value)}
      value={exercisesNum}
    />
   

    <label>Video Link </label>
    <input
      type="text"
      onChange={(e) =>setyoutube_video_link(e.target.value)}
      value={youtube_video_link}
    />
     <label>Course Youtube Description
     </label>
    <input
      type="text"
      onChange={(e) =>setdescription(e.target.value)}
      value={description}
    />

    <button>Add Video</button>
    {error && <div className="error">{error}</div>}
  </form>
  );
};

export default Upload1;
