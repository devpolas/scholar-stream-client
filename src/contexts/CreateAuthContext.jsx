import { createContext } from "react";

const AuthContext = createContext({ continueWithGoogle: async () => {} });
export default AuthContext;
