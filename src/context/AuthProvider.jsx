import { createContext, useContext } from "react";
const AuthContext = createContext();
import React from "react";

import useAuthProviderController from "./context.controller";

function AuthProvider({ children }) {
  const { isAuthenticated, SignIn, SignUp, user, signOutHandler } =
    useAuthProviderController();

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, SignUp, user, SignIn, signOutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthProvider = () => {
  const value = useContext(AuthContext);
  if (!value) throw new Error("context should be wrapped around the children");
  return value;
};

export default AuthProvider;
