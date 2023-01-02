const { useState } = require("react");

const DownloadNotes = () => {
  const [Notes, setNotes] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const Notes = { Notes};

    const response = await fetch("/indiviualtrainee/Save", {
      method: "POST",
      body: JSON.stringify(Notes),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setNotes("");
      
      setError(null);
      console.log("Your notes saved succesfully");
    }
  };

  return (
    <form className="download" onSubmit={handleSubmit}>
      <h3>Write your notes here</h3>

      <label>Notes: </label>
      <input
        type="text"
        onChange={(e) => setNotes(e.target.value)}
        value={Notes}
      />
     

      <button>Download your notes</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default DownloadNotes;