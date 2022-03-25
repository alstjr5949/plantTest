import { atom } from "recoil";

export const questionIndexAtom = atom({
  key: "qIndex",
  default: 1,
});

export const resultAtom = atom({
  key: "result",
  default: "",
});
