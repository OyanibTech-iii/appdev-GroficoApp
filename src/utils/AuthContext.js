import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isReleasing, setIsReleasing] = useState(false); 

  const login = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsReleasing(true); 
    setTimeout(() => {
      setUser(null);
      setIsLoggedIn(false);
      setIsReleasing(false); 
    }, 3000); 
  };

  return (
    <AuthContext.Provider value={{ 
      isLoggedIn, user, login, logout, 
      isProcessing, setIsProcessing, 
      isReleasing, setIsReleasing 
    }}>
      {children}
    </AuthContext.Provider>
  );
};