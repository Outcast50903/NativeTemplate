import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { act, renderHook } from '@testing-library/react-native';
import jwt_decode from 'jwt-decode';

import { useAuthStore } from './index';

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
}));
jest.mock('jwt-decode');

describe('authStore', () => {
  const accessToken = 'access-token';
  const refreshToken = 'refresh-token';
  const token = { id: 'user-id' };

  beforeEach(async () => {
    (AsyncStorage.removeItem as jest.Mock).mockClear();
    (jwt_decode as jest.Mock).mockClear();
    await AsyncStorage.removeItem('authStore');
  });

  it('should set the user id and tokens on login', async () => {
    (jwt_decode as jest.Mock).mockReturnValue(token);

    const { result } = renderHook(() => useAuthStore());

    act(() => {
      result.current.actions.dispatchLogin(accessToken, refreshToken);
    });    

    expect(jwt_decode).toHaveBeenCalledWith(accessToken);
    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      'authStore',
      JSON.stringify({
        state: {
          userId: token.id,
          accessToken,
          refreshToken,
          isAuth: true,
          actions: {},
        },
        version: 0,
      }),
    );
    expect(result.current.userId).toBe(token.id);
    expect(result.current.accessToken).toBe(accessToken);
    expect(result.current.refreshToken).toBe(refreshToken);
    expect(result.current.isAuth).toBe(true);
  });

  it('should clear the user id and tokens on logout', async () => {
    const token = { id: null };
    (jwt_decode as jest.Mock).mockReturnValue(token);
    
    const { result } = renderHook(() => useAuthStore());

    await act(() => {
      result.current.actions.dispatchLogout();
    });

    expect(AsyncStorage.removeItem).toHaveBeenCalledWith('authStore');
    expect(result.current.userId).toBeNull();
    expect(result.current.accessToken).toBeNull();
    expect(result.current.refreshToken).toBeNull();
    expect(result.current.isAuth).toBe(false);
  });
});