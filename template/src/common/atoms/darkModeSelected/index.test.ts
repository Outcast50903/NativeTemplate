import { describe, expect,it} from '@jest/globals';
import { act, renderHook } from '@testing-library/react-native';
import { useAtom } from 'jotai';

import { handleDarkModeSelectedAtom, isDarkModeAtom } from '.';

describe('darkModeSelected', () => {
  it('should initialize with null', () => {
    const { result } = renderHook(() => useAtom(isDarkModeAtom));
    expect(result.current[0]).toBeNull();
  });

  it('should update the value when handleDarkModeSelectedAtom is called', () => {
    const { result } = renderHook(() => useAtom(isDarkModeAtom));
    act(() => {
      result.current[1](true);
    });
    expect(result.current[0]).toBe(true);
  });

  it('should update the isDarkModeAtom value', () => {
    const { result } = renderHook(() => useAtom(isDarkModeAtom));
    act(() => {
      result.current[1](false);
    });
    const { result: handleResult } = renderHook(() => useAtom(handleDarkModeSelectedAtom));
    act(() => {
      handleResult.current[1](true);
    });
    expect(result.current[0]).toBe(true);
  });
});