import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [token, setToken] = useState(undefined);

  const setAuth = async (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  return (
    <AuthContext.Provider value={{ token, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};
