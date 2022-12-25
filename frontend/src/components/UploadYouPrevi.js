<<<<<<< HEAD
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
=======

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
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
    });
<<<<<<< HEAD
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setyoutube_video_link("");
=======
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
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
      setError(null);
      console.log("Video uploaded");
    }
  };
<<<<<<< HEAD
  console.log(youtube_video_link)

  return (
    <form className="create" onSubmit={handleSubmit}>
    <h3>Add a Youtube preview Video</h3>
=======

  return (
    <form className="create" onSubmit={handleSubmit}>
    <h3>Add a Youtube Video to Subtitle</h3>
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a

    <label>Course Title</label>
    <input
      type="text"
<<<<<<< HEAD
      onChange={(e) => setTitle(e.target.value)}
      value={title}
    />
=======
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
   
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a

    <label>Video Link </label>
    <input
      type="text"
<<<<<<< HEAD
      onChange={(e) => setyoutube_video_link(e.target.value)}
      value={youtube_video_link}
    />
=======
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
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a

    <button>Add Video</button>
    {error && <div className="error">{error}</div>}
  </form>
  );
};

<<<<<<< HEAD
export default Upload2;
=======
export default Upload1;
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
