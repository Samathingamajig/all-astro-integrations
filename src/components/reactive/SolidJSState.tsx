/** @jsxImportSource solid-js */

import { createSignal } from "solid-js";

export const SolidJSState = () => {
  const [counter, setCounter] = createSignal(0);
  return (
    <>
      <h2>SolidJS State</h2>
      <button onClick={() => setCounter((curr) => curr + 1)}>Personal count {counter()}</button>
    </>
  );
};
