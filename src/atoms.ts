import { atom } from "recoil";

export const questionIndexAtom = atom({
  key: "qIndex",
  default: 1,
});

export const careAtom = atom({
  key: "careNum",
  default: 0,
});

export const expAtom = atom({
  key: "expNum",
  default: 0,
});

export const envAtom = atom({
  key: "envNum",
  default: 0,
});

export const resultAtom = atom({
  key: "result",
  default: "",
});
