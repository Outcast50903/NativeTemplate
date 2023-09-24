import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthDecoded, AuthStoreState } from 'common/types'
import jwt_decode from 'jwt-decode'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export const useAuthStore = create(
  devtools(
    persist<AuthStoreState>(
      (set) => ({
        userId: null,
        accessToken: null,
        refreshToken: null,
        isAuth: false,
        actions: {
          dispatchLogout: async () => {
            await AsyncStorage.removeItem('authStore')
            set({
              userId: null,
              accessToken: null,
              refreshToken: null,
              isAuth: false,
            })
          },
          dispatchLogin: (accessToken: string, refreshToken: string) => {
            const token: AuthDecoded = jwt_decode(accessToken)
            
            console.tron.log({
              accessToken,
              refreshToken,
              isAuth: true,
              userId: token.id,
            })

            set({
              accessToken,
              refreshToken,
              isAuth: true,
              userId: token.id,
            })
          },
        },
      }), {
      name: 'authStore',
      storage: {
        getItem: async name => {
          const str = await AsyncStorage.getItem(name) || '{}'

          return {
            ...JSON.parse(str),
          }
        },
        setItem: (name, newValue) => {
          const str = JSON.stringify({
            ...newValue.state,
          })

          AsyncStorage.setItem(name, str)
        },
        removeItem: name => AsyncStorage.removeItem(name),
      },
      partialize: state => (state),
    },
    ),
    { enabled: false },
  ),
)

export const useUserIdAuth = () => useAuthStore(state => state.userId)

export const useIsAuth = () => useAuthStore(state => state.isAuth)

export const useTokenAuth = () => useAuthStore(state => state.accessToken)

export const useRefreshTokenAuth = () => useAuthStore(state => state.refreshToken)

export const useActionsAuth = () => useAuthStore(state => state.actions)