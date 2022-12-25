const { useState } = require("react");

const CorTraineeForm = () => {
  const [username, setUsername] = useState("");
<<<<<<< HEAD
=======
  const [email,setEmail]=useState("");
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

<<<<<<< HEAD
    const instructor = { username,country,email, password };

    const response = await fetch("/admin/createcorporatetrainee", {
=======
    const instructor = { username, password };

    const response = await fetch("/admin/createcortrainee", {
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
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
<<<<<<< HEAD
      setCountry("");
      setPassword("");
      setError(null);
      console.log("new Cortrainee added!");
=======
      setPassword("");
      setError(null);
      console.log("new instructor added!");
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
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
<<<<<<< HEAD
       <label>email</label>
=======
      <label>Email </label>
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
<<<<<<< HEAD
  <label>Country </label>
      <input
        type="text"
        onChange={(e) => setCountry(e.target.value)}
        value={country}
      />
       
=======

>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
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