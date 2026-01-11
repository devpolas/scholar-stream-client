import { createContext } from "react";

const AuthContext = createContext({
  continueWithGoogle: async () => {},
  user: null,
  afterUpdate: async () => {},
  signup: async () => {},
  signin: async () => {},
  logout: async () => {},
  isLoading: false,
  signupLoading: false,
  loginLoading: false,
  socialLoading: false,
});
export default AuthContext;
