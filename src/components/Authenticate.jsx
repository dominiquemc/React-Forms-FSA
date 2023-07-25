export default function Authenticate({ token, setToken }) {
  async function handleClick() {
    console.log(handleClick);
  }

  return (
    <>
      <h2>Authenticate</h2>
      <button onClick={handleClick}>Authenticate Token</button>
    </>
  );
}
