import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // Lägg till din autentiseringslogik här
    // Exempel: setAuth(true) om autentiseringen är framgångsrik
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Lägg till din utloggningslogik här
    // Exempel: setAuth(false) när användaren loggar ut
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);