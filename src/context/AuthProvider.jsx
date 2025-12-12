import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const { employees, admin } = getLocalStorage();

    setUserData({ employees, admin });
  }, []);

  return (
    <div>
      <AuthContext value={[userData,setUserData]}>{children}</AuthContext>
    </div>
  );
}

export default AuthProvider;
