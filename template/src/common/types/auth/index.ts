import { GenericResponse } from ".."

export type AuthLoginRequest = {
  email: string
  password: string
}

type LoginResponse = {
  accessToken:  string;
  refreshToken: string;
}

export interface AuthLoginResponse extends GenericResponse<{ login: LoginResponse }> {
  errors: { message: string }[]
}

// export type AuthLoginResponse = GenericResponse<{ login: LoginResponse }>

export type AuthDecoded = {
  id:    string;
  roles: string[];
  iat:   number;
  exp:   number;
}

export type AuthState = {
  userId: string | null
  accessToken: string | null
  refreshToken: string | null
  isAuth: boolean,
}

export type AuthAction = {
  dispatchLogout: () => void
  // eslint-disable-next-line no-unused-vars
  dispatchLogin: (token: string, refreshToken: string) => void
}

export type AuthStoreState = AuthState & {
  actions: AuthAction
}