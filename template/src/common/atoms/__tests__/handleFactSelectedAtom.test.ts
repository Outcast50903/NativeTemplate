import { describe, expect,it} from '@jest/globals';
import { act, renderHook } from '@testing-library/react-native';
import { factSelectedAtom, handleFactSelectedAtom } from 'common/atoms/factSelected';
import { useAtom } from 'jotai';

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