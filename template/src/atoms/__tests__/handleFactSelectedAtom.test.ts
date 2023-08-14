import { act, renderHook } from '@testing-library/react-native';
import { useAtom } from 'jotai';

import { it, describe, expect} from '@jest/globals';
import { factSelectedAtom, handleFactSelectedAtom } from 'atoms/factSelected';

describe('handleFactSelectedAtom', () => {
  it('should update the factSelectedAtom value', () => {
    const { result } = renderHook(() => useAtom(factSelectedAtom));
    act(() => {
      result.current[1]('old value');
    });
    const { result: handleResult } = renderHook(() => useAtom(handleFactSelectedAtom));
    act(() => {
      handleResult.current[1]('new value');
    });
    expect(result.current[0]).toBe('new value');
  });
});