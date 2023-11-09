import { describe, expect,it} from '@jest/globals';
import { act, renderHook } from '@testing-library/react-native';
import { factSelectedAtom, handleFactSelectedAtom } from 'common/atoms/factSelected';
import { useAtom } from 'jotai';

describe('factSelected', () => {
  it('should initialize with null', () => {
    const { result } = renderHook(() => useAtom(factSelectedAtom));
    expect(result.current[0]).toBeNull();
  });

  it('should update the value when handleFactSelectedAtom is called', () => {
    const { result } = renderHook(() => useAtom(factSelectedAtom));
    act(() => {
      result.current[1]('new value');
    });
    expect(result.current[0]).toBe('new value');
  });

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