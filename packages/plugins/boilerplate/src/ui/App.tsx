import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div>{counter}</div>
      <button onClick={() => setCounter((prev) => prev + 1)}>카운터</button>
    </>
  );
}
