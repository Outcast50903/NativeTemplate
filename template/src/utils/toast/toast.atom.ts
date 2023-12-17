import { atom, WritableAtom } from 'jotai'

export function atomWithToggle(
  initialValue?: boolean,
): WritableAtom<boolean | undefined, unknown[], boolean | undefined> {
  console.log('atomWithToggle', { initialValue })
  const anAtom = atom(initialValue, (get, set, nextValue?: boolean) => {
    const update = nextValue ?? !get(anAtom)
    set(anAtom, update)
  })  

  return anAtom as WritableAtom<boolean | undefined, unknown[], boolean | undefined>
}

export const isActiveAtom = atomWithToggle(false)