import { useState } from "react";
// const { useState } = require("react");

const AdminForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
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
      setEmail("");
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
      <label>Email </label>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label>Password </label>
      <input
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      
      <button>Add Admin</button>
    </form>
  );
};

export default AdminForm;