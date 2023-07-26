import { useState } from "react";

export default function SignUpForm({
  token,
  setToken,
  error,
  setError,
  username,
  password,
  setUsername,
  setPassword,
}) {
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          body: JSON.stringify({
            username: { username },
            password: { password },
          }),
        }
      );
      const result = await response.json();
      setToken(result.token);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <main className="main-sign-up">
      <h1>Sign Up</h1>
      <div className="sign-up">
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label> Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={() => {
              if (username.length >= 15) {
                alert("Username should not exceed 15 characters");
              }
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
