import { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
} from "firebase/auth";
import { db } from "../firebase/app.config";
import { doc, getDoc, setDoc } from "firebase/firestore";
const auth = getAuth();
export default function useAuthProviderController() {
  const [isAuthenticated, setISAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    if (localStorage.getItem("uid")) {
      setUserData(localStorage.getItem("uid"));
    }
  }, [localStorage.getItem("uid")]);

  async function setUserData(uid) {
    const result = await getUser(uid);
    setISAuthenticated(true);
    setUser(result);
  }

  useEffect(() => {
    const isSub = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setISAuthenticated(false);
      } else {
        setUserData(user.uid);
      }
    });

    return () => isSub;
  }, []);

  const SignUp = async (firstname, lastname, gender, email, password) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(doc(db, "users", response.user.uid), {
        id: response.user.uid,
        firstname,
        lastname,
        password,
        email,
        gender,
      });

      // console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  const SignIn = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      if (response.user.uid) {
        localStorage.setItem("uid", response.user.uid);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const getUser = async (uid) => {
    try {
      const docRef = doc(db, "users", uid);
      const response = await getDoc(docRef);
      let result = response.data();
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  const signOutHandler = async () => {
    try {
      await signOut(auth);
      //   localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  return { getUser, SignIn, user, SignUp, isAuthenticated, signOutHandler };
}
