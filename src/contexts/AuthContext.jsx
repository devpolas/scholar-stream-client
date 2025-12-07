import { useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
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
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(function () {
    const timeout = setTimeout(() => setIsLoading(false), 8000);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({ ...currentUser });
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });
    return () => {
      unsubscribe();
      clearTimeout(timeout);
    };
  }, []);

  async function continueWithGoogle() {
    setIsLoading(true);
    try {
      return await signInWithPopup(auth, googleAuthProvider);
    } catch (error) {
      if (error) {
        setIsError("Google signin Failed. Please try again.");
      }
    }
  }

  async function afterUpdate() {
    setIsLoading(true);
    if (auth.currentUser) {
      await auth.currentUser.reload();
      setUser({ ...auth.currentUser });
    }
  }

  async function signup(email, password) {
    setIsLoading(true);
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      if (error) {
        setIsError("Signup Failed. Please try again.");
      }
    }
  }

  async function signin(email, password) {
    setIsLoading(true);
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      if (error) {
        setIsError("Signin Failed. Please try again.");
      }
    }
  }

  async function logout() {
    setIsLoading(true);
    try {
      return await signOut(auth);
    } catch (error) {
      if (error) {
        setIsError("Signout Failed. Please try again.");
      }
    }
  }

  const value = {
    continueWithGoogle,
    user,
    afterUpdate,
    signup,
    signin,
    logout,
    isLoading,
    isError,
  };

  return <AuthContext value={value}>{children}</AuthContext>;
}
