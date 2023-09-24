import { useMutation } from "@tanstack/react-query"
import { AuthLoginRequest, AuthLoginResponse, fetcher, useActionsAuth } from "common";

import { loginQueryDocument } from "./request";

export const useMutationLogin = () => {
  const {dispatchLogin} = useActionsAuth()

  const loginMutation = useMutation(
    (payload: AuthLoginRequest) => 
      fetcher<AuthLoginResponse, AuthLoginRequest>(loginQueryDocument, payload),
    {
      onSuccess: async (data: AuthLoginResponse) => { 
        return dispatchLogin(data.data.login.accessToken, data.data.login.refreshToken)
      },
    }
  );

  return { loginMutation }
}