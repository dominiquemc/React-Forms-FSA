import "./App.css";
import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";
import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  return (
    <>
      <SignUpForm
        token={token}
        setToken={setToken}
        error={error}
        setError={setError}
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
      />
      <Authenticate
        token={token}
        setToken={setToken}
        error={error}
        setError={setError}
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
      />
    </>
  );
}
