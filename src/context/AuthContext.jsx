import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);
  const login = (userData, jwtToken) => {
    setUser(userData);
    setToken(jwtToken);
  };
  const logout = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("token");
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        setLoading,
        login,
        logout,
      }}>   
      {children}
    </AuthContext.Provider>
  );
}