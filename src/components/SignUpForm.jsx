import { useState } from "react";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  return (
    <>
      <h2>Sign Up</h2>
      <form>
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label> Password: </label>
        <input type="password" value={password} />
        <button>Submit</button>
      </form>
    </>
  );
}
