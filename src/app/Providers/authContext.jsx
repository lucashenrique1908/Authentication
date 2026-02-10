import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

const storage_key = 'auth:isAuthenticated';

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(storage_key);

    setIsAuthenticated(saved === 'true');
    setAuthReady(true);
  }, []);

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem(storage_key, 'true');
  };
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem(storage_key);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, authReady, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must to be used inside <AuthProvider>');
  return ctx;
}
