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
        <input type="username" />
        <label> Password: </label>
        <input type="password" />
        <button>Submit</button>
      </form>
    </>
  );
}
