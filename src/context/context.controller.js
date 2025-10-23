import { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
} from "firebase/auth";
import { app, db } from "../firebase/app.config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setUserProfile } from "../brain/slices/user.account";
// import { useNavigate } from "react-router-dom";

//
const auth = getAuth(app);
export default function useAuthProviderController() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
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
    dispatch(setUserProfile({ user: result }));
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

  const SignUp = async (firstname, lastname, email, password, role) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // console.log(firstname, lastname, email, password, role);
      const result = await setDoc(doc(db, "users", response.user.uid), {
        id: response.user.uid,
        firstname,
        lastname,
        password,
        email,
        role,
      });
      // console.log(result);
      console.log(result);
    } catch (error) {
      if (error.message.includes("(auth/invalid-email)")) {
        error.message = "Invalid email";
      } else if (
        error.message.includes(
          "Password should be at least 6 characters (auth/weak-password)"
        )
      ) {
        error.message = "weak password , chnage your password";
      } else {
        error.message = "Email already in use";
      }
      alert(error.message);
    }
  };

  const SignIn = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      if (response.user.uid) {
        localStorage.setItem("uid", response.user.uid);
      }
    } catch (error) {
      if (error.message.includes("(auth/invalid-email)")) {
        error.message = "Invalid email";
      } else if (error.message.includes("(auth/invalid-credential)")) {
        error.message = "Incorrect password | no user record";
      }
      alert(error.message);
      // console.log(error.message);
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
    signOut(auth)
      .then(() => {
        location.replace("/");
        localStorage.removeItem("uid");
      })
      .catch((error) => console.log(error));
  };

  return { getUser, SignIn, user, SignUp, isAuthenticated, signOutHandler };
}
