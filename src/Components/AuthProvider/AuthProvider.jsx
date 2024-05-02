import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../FireBase/FireBase.config";
import { GithubAuthProvider } from "firebase/auth";

// Google provider
const googleProvider = new GoogleAuthProvider();
// Github provider
const gitHubProvider = new GithubAuthProvider();

const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   user create
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update profile for image and name
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //   user login
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //Google Signin
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Github signin
  const signInWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };
  // user logout
  const userLogout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // onAuthState change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const userInfo = {
    user,
    loading,
    createUser,
    userLogin,
    userLogout,
    signInWithGoogle,
    signInWithGithub,
    updateUserProfile,
    setUser,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
