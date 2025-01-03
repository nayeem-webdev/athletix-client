import AuthContext from "../context/AuthContext";
import {
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import auth from "../firebase/firebase.init";
import { useEffect, useState } from "react";
import axios from "axios";

const AuthProvider = ({ children }) => {
  // States
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Create User
  const updateUser = (displayName, photoURL) => {
    const profileData = { displayName, photoURL };
    return updateProfile(auth.currentUser, profileData);
  };

  // Login with Password
  const loginWithPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Login with Pop Up
  const loginWithPopUp = (provider) => {
    return signInWithPopup(auth, provider);
  };

  // Logout
  const logoutUser = () => {
    return signOut(auth);
  };

  //!! Observer- Auth State Change and JWT
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const user = { email: currentUser.email };
        axios
          .post("http://localhost:5000/jwt", user, { withCredentials: true })
          .then((res) => {
            console.log("JWT response:", res.data);
            setLoading(false);
          })
          .catch((err) => console.error("Error fetching JWT:", err));
      } else {
        axios
          .post("http://localhost:5000/logout", {}, { withCredentials: true })
          .then((res) => {
            console.log("JWT response:", res.data);
            setLoading(false);
          })
          .catch((err) => console.error("Error fetching JWT:", err));
      }
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    updateUser,
    loginWithPassword,
    loginWithPopUp,
    logoutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;
