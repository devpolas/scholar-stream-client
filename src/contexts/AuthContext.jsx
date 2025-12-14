import { useEffect, useState } from "react";
import appAuth from "../firebase/firebase.init";
import AuthContext from "./CreateAuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const googleAuthProvider = new GoogleAuthProvider();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    const unsubscribe = onAuthStateChanged(appAuth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  async function continueWithGoogle() {
    setIsLoading(true);
    return await signInWithPopup(appAuth, googleAuthProvider);
  }

  async function afterUpdate() {
    setIsLoading(true);
    if (appAuth.currentUser) {
      await appAuth.currentUser.reload();
      setUser({ ...appAuth.currentUser });
    }
  }

  async function signup(email, password) {
    setIsLoading(true);
    return await createUserWithEmailAndPassword(appAuth, email, password);
  }

  async function signin(email, password) {
    setIsLoading(true);
    return await signInWithEmailAndPassword(appAuth, email, password);
  }

  async function logout() {
    setIsLoading(true);
    return await signOut(appAuth);
  }

  const value = {
    continueWithGoogle,
    user,
    afterUpdate,
    signup,
    signin,
    logout,
    isLoading,
  };

  return <AuthContext value={value}>{children}</AuthContext>;
}
