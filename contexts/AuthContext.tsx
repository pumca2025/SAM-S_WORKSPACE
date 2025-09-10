import React, { createContext, useState, useEffect, useCallback } from 'react';
import type { User } from '../types';
import { storageService } from '../services/storageService';

interface AuthContextType {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = storageService.get<User | null>('user', null);
    if (storedUser) {
      setUser(storedUser);
    }
    setLoading(false);
  }, []);

  const login = useCallback((email: string) => {
    // In a real app, you'd verify password. Here, we simulate it.
    let loggedInUser: User;
    const lowerCaseEmail = email.toLowerCase();
    
    if (lowerCaseEmail === 'admin@bookmyshow.com') {
      loggedInUser = { id: 'admin-user', email, role: 'admin' };
    } else if (lowerCaseEmail === 'theater@bookmyshow.com') {
      loggedInUser = { id: 'theater-user', email, role: 'theater' };
    } else {
      loggedInUser = { id: `user-${Date.now()}`, email, role: 'user' };
    }
    storageService.set('user', loggedInUser);
    setUser(loggedInUser);
  }, []);

  const logout = useCallback(() => {
    storageService.set('user', null);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};