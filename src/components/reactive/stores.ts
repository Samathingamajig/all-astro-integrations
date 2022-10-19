import { atom } from "nanostores";

export const globalCountStore = atom(0);

export const incrementGlobalCount = () => {
  globalCountStore.set(globalCountStore.get() + 1);
};
