import {atom} from 'jotai';

export const factSelectedAtom = atom<string | null>(null);

export const handleFactSelectedAtom = atom(
  null,
  (_, set, value: string | null) => set(factSelectedAtom, value),
);
