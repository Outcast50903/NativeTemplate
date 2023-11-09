import { atom } from "jotai";

export const isDarkModeAtom = atom<boolean | null>(null);

export const handleDarkModeSelectedAtom = atom(
  null,
  (_, set, value: boolean | null) => set(isDarkModeAtom, value),
);
