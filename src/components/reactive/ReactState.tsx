import { useState } from "react";

export const ReactState = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h2>React State</h2>
      <button onClick={() => setCounter((curr) => curr + 1)}>Personal count {counter}</button>
    </>
  );
};
