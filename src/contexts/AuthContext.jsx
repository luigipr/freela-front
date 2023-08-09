import React from 'react'

import { createContext, useState } from "react";

const AuthContext = createContext();
//const AuthContext = createContext();

export function AuthProvider({ children }) {
  const persistedAuth = JSON.parse(localStorage.getItem("auth"));
  const [auth, setAuth] = useState(persistedAuth);
  const [user, setUser] = useState("")

  function login(authData) {
    setAuth(authData);
    localStorage.setItem("auth", JSON.stringify(authData));
  }

  function localUser(user) {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  }

  return (
    <AuthContext.Provider value={{ auth, login, user, setUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;