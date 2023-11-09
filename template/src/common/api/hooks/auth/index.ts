import { useMutation } from "@tanstack/react-query"
import { API, AuthLoginRequest, AuthLoginResponse, useActionsAuth } from "common";
import { showToast } from "utils/toast";

export const useMutationLogin = () => {
  const {dispatchLogin} = useActionsAuth()

  const loginMutation = useMutation(
    (payload: AuthLoginRequest) => API.post<AuthLoginResponse, AuthLoginRequest>('/login', payload),
    {
      onSuccess: async (data: AuthLoginResponse) => {        
        return dispatchLogin(data.data.login.accessToken, data.data.login.refreshToken)
      },
      onError: (error: string) => {
        showToast({ message: error, type: 'error' })
      }
    }
  );

  return { loginMutation }
}