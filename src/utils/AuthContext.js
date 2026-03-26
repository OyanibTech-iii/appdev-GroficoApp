import React, { createContext, useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { LOGIN_RESET } from '../App/actions';

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
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
    dispatch({ type: LOGIN_RESET });

    setTimeout(() => {
      setUser(null);
      setIsLoggedIn(false);
      setIsReleasing(false);
    }, 1500); 
  };

  return (
    <AuthContext.Provider 
      value={{
        isLoggedIn, 
        user, 
        login, 
        logout,
        isProcessing, 
        setIsProcessing,
        isReleasing, 
        setIsReleasing 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};