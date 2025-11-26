import React, { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [] = useState()

  return (
    <div>
      <AuthContext value={"Parth"}>{children}</AuthContext>
    </div>
  );
}

export default AuthProvider;
