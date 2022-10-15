/** @jsxImportSource preact */
import { useState } from "preact/hooks";

export const PreactState = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h2>Preact State</h2>
      <button onClick={() => setCounter((curr) => curr + 1)}>Personal count {counter}</button>
    </>
  );
};
