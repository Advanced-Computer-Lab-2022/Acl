import { useState } from "react";
// const { useState } = require("react");

const YoutubePreview = () => {
  const [link, setLink] = useState("");
  const [title,setTitle ] = useState("");
  // const [admin, setAdmin] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const admin = { username, password, admin: "true" };

    const response = await fetch(`/instructor/uploadlinkprev?userId=${userId}`,{
      method: "POST",
      body: JSON.stringify(admin),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setUsername("");
      setPassword("");
      setError(null);
      console.log("new admin added!");
    }
  };

  return (
    <form >
    </form>
  );
};

export default YoutubePreview;