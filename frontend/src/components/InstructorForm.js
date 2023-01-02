import { useState } from "react";

const InstructorForm = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [coursesGiven, setCoursesGiven] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const instructor = { name, username, password, email };
    console.log(instructor)
    const response = await fetch("/admin/createinstructor", {
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
      setName("");
      setUsername("");
      setPassword("");
      setEmail("");
      setError(null);
      console.log("new instructor added!");
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new Instructor</h3>
      <label>Instructor Name: </label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      <label>Username: </label>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />

      <label>Password </label>
      <input
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <label>Email </label>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>country </label>
      <input
        type="text"
        onChange={(e) => setCountry(e.target.value)}
        value={country}
      />
      <label> coursesGiven </label>
      <input
        type="text"
        onChange={(e) => setCoursesGiven(e.target.value)}
        value={coursesGiven}
      />

      <button>Add Instructor</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default InstructorForm;