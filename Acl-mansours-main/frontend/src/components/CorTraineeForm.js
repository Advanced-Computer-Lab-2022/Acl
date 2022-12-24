const { useState } = require("react");

const CorTraineeForm = () => {
  const [username, setUsername] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const instructor = { username,country,email, password };

    const response = await fetch("/admin/createcorporatetrainee", {
      method: "POST",
      body: JSON.stringify(instructor),
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
      setEmail("");
      setCountry("");
      setPassword("");
      setError(null);
      console.log("new Cortrainee added!");
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new Corporate Trainee</h3>

      <label>Username: </label>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
       <label>email</label>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
  <label>Country </label>
      <input
        type="text"
        onChange={(e) => setCountry(e.target.value)}
        value={country}
      />
       
      <label>Password </label>
      <input
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button>Add Corporate Trainee</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default CorTraineeForm;