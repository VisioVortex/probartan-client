import {
  createContext,
  useEffect,
  useState,
} from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import app from "../firebase/firebase.config.js";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);

function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {

    return createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

  };

  const signInUser = (email, password) => {

    return signInWithEmailAndPassword(
      auth,
      email,
      password
    );

  };

  const logoutUser = () => {

    return signOut(auth);

  };

useEffect(() => {

  const unsubscribe = onAuthStateChanged(
    auth,
    (currentUser) => {

      setUser(currentUser);

      if (currentUser?.email) {

        axios
          .get(
            `http://localhost:5000/users/${currentUser.email}`
          )
          .then((res) => {

            if (res.data?.role) {

              setRole(res.data.role);

            }

            else {

              setRole("student");

            }

            setLoading(false);

          })
          .catch(() => {

            setLoading(false);

          });

      }

      else {

        setRole(null);

        setLoading(false);

      }

    }
  );

  return () => unsubscribe();

}, []);

  const authInfo = {
    user,
    loading,
    role,
    createUser,
    signInUser,
    logoutUser,
  };

  if (loading) {

    return <h1>Loading...</h1>;

    }

    return (

    <AuthContext.Provider value={authInfo}>

        {children}

    </AuthContext.Provider>

    );
}

export default AuthProvider;