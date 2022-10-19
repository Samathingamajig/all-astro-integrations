import { useState } from "react";
import { useStore } from "@nanostores/react";
import { globalCountStore, incrementGlobalCount } from "./stores";

export const ReactState = () => {
  const [personalCount, setPersonalCount] = useState(0);
  const globalCount = useStore(globalCountStore);
  return (
    <>
      <h2>React State</h2>
      <button onClick={() => setPersonalCount((curr) => curr + 1)}>
        Personal count {personalCount}
      </button>
      <button onClick={incrementGlobalCount}>Global count {globalCount}</button>
    </>
  );
};
