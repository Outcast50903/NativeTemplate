export const loginQueryDocument = `
  query Login($email: String!, $password: String!) {
    login(credentials: {email: $email, password: $password}) {
        accessToken
        refreshToken
    }
  }
`;