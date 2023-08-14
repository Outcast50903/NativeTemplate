import { act, renderHook } from '@testing-library/react-native';
import { useAtom } from 'jotai';

import { it, describe, expect} from '@jest/globals';
import { factSelectedAtom } from 'atoms/factSelected';

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