import auth from "../firebase/firebase.init";
import AuthContext from "./CreateAuthContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function AuthContextProvider({ children }) {
  const googleAuthProvider = new GoogleAuthProvider();
  async function continueWithGoogle() {
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  const value = {
    continueWithGoogle,
  };

  return <AuthContext value={value}>{children}</AuthContext>;
}
