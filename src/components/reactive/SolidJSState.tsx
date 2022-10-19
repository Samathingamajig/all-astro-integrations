/** @jsxImportSource solid-js */
import { createSignal } from "solid-js";
import { useStore } from "@nanostores/solid";
import { globalCountStore, incrementGlobalCount } from "./stores";

export const SolidJSState = () => {
  const [personalCount, setPersonalCount] = createSignal(0);
  const globalCount = useStore(globalCountStore);
  return (
    <>
      <h2>SolidJS State</h2>
      <button onClick={() => setPersonalCount((curr) => curr + 1)}>
        Personal count {personalCount()}
      </button>
      <button onClick={incrementGlobalCount}>
        Global count {globalCount()}
      </button>
    </>
  );
};
