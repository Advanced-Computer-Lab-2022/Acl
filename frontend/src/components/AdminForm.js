import { useState } from "react";
// const { useState } = require("react");

const AdminForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
<<<<<<< HEAD
=======
  const [email, setEmail] = useState("");
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
  // const [admin, setAdmin] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const admin = { username, password, admin: "true" };

    const response = await fetch("/admin/createadmin", {
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
<<<<<<< HEAD
=======
      setEmail("");
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
      setError(null);
      console.log("new admin added!");
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new Admin</h3>

      <label>Username: </label>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
<<<<<<< HEAD
=======
      <label>Email </label>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a

      <label>Password </label>
      <input
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
<<<<<<< HEAD
=======
      
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a

      <button>Add Admin</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default AdminForm;