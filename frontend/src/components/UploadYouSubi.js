

import { useState } from "react";
<<<<<<< HEAD
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
=======


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
  
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a

  
  

  const handleSubmit = async (e) => {
    e.preventDefault();

<<<<<<< HEAD
    const videosubtitle = {id,title,Subtitle:{subtitle,durationsub,exercisesnum,Video:{link,Description}}};

    const response = await fetch(`/instructor/uploadlinksub/${id}`,{
=======
    const videosubtitle = {userId,title,SubName,durationSub,exercisesNum,youtube_video_link,description};

    const response = await fetch(`/instructor/uploadlinksub/${userId}`,{
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
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
<<<<<<< HEAD
      console.log(link)
=======
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
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
<<<<<<< HEAD
      value={subtitle}
=======
      value={SubName}
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
    />
    <label>Course Subtitle Duration Subtitle</label>
    <input
      type="text"
      onChange={(e) =>setdurationsub(e.target.value)}
<<<<<<< HEAD
      value={durationsub}
=======
      value={durationSub}
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
    />
    <label>Course SubTitle exercises Number</label>
    <input
      type="text"
      onChange={(e) =>setexercisesnum(e.target.value)}
<<<<<<< HEAD
      value={exercisesnum}
=======
      value={exercisesNum}
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
    />
   

    <label>Video Link </label>
    <input
      type="text"
      onChange={(e) =>setyoutube_video_link(e.target.value)}
<<<<<<< HEAD
      value={link}
=======
      value={youtube_video_link}
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
    />
     <label>Course Youtube Description
     </label>
    <input
      type="text"
      onChange={(e) =>setdescription(e.target.value)}
<<<<<<< HEAD
      value={Description}
=======
      value={description}
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
    />

    <button>Add Video</button>
    {error && <div className="error">{error}</div>}
  </form>
  );
};

export default Upload1;
