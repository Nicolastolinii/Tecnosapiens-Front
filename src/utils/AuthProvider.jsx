import React, { createContext, useState, useEffect, useContext } from 'react';
import { decodeJwt } from 'jose';

const AuthContext = createContext();
const API = 'http://localhost:8080';
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  
  const login = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  const UserId = () => {
    if (token) {
      try {
        const decodedToken = decodeJwt(token);
        return decodedToken.id;
      } catch (error) {
        console.error('Error decoding JWT:', error);
        return null;
      }
    }
    return null;
  };
  const UserName = () => {
    if (token) {
      try {
        const decodedToken = decodeJwt(token);
        return decodedToken.username;
      } catch (error) {
        console.error('Error decoding JWT:', error);
        return null;
      }
    }
    return null;
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, login, logout, API, UserId, UserName }}>
      {children}
    </AuthContext.Provider>
  );
};
