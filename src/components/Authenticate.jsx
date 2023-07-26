import { useState } from "react";

export default function Authenticate({
  token,
  setToken,
  error,
  setError,
  username,
  password,
  setUsername,
  setPassword,
}) {
  const [successMessage, setSuccessMessage] = useState(null);

  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      setSuccessMessage(result.message);
    } catch (error) {
      setError(error.message);
    }
    setUsername("");
    setPassword("");
  }

  return (
    <section className="auth-section">
      <h2>Authenticate</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </section>
  );
}
