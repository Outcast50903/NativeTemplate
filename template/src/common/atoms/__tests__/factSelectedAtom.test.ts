import { describe, expect,it} from '@jest/globals';
import { act, renderHook } from '@testing-library/react-native';
import { factSelectedAtom } from 'common/atoms/factSelected';
import { useAtom } from 'jotai';

describe('factSelectedAtom', () => {
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
});