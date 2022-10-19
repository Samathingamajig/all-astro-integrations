/** @jsxImportSource preact */
import { useState } from "preact/hooks";
import { useStore } from "@nanostores/preact";
import { globalCountStore, incrementGlobalCount } from "./stores";

export const PreactState = () => {
  const [personalCount, setPersonalCount] = useState(0);
  const globalCount = useStore(globalCountStore);
  return (
    <>
      <h2>Preact State</h2>
      <button onClick={() => setPersonalCount((curr) => curr + 1)}>
        Personal count {personalCount}
      </button>
      <button onClick={incrementGlobalCount}>Global count {globalCount}</button>
    </>
  );
};
