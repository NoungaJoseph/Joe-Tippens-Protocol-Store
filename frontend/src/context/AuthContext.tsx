import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password?: string) => Promise<void>;
  register: (firstName: string, lastName: string, email: string, password?: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Using environment variable for production, fallback to local
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4242/api';

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('pureprotocol_token');
      if (token) {
        try {
          const res = await fetch(`${API_URL}/auth/me`, {
            headers: {
              'x-auth-token': token
            }
          });
          if (res.ok) {
            const userData = await res.json();
            setUser({
              id: userData._id,
              firstName: userData.firstName,
              lastName: userData.lastName,
              email: userData.email
            });
          } else {
            localStorage.removeItem('pureprotocol_token');
          }
        } catch (error) {
          console.error('Failed to load user', error);
          localStorage.removeItem('pureprotocol_token');
        }
      }
      setLoading(false);
    };

    loadUser();
  }, []);

  const login = async (email: string, password?: string) => {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.msg || 'Login failed');
    }

    localStorage.setItem('pureprotocol_token', data.token);
    setUser(data.user);
  };

  const register = async (firstName: string, lastName: string, email: string, password?: string) => {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ firstName, lastName, email, password })
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.msg || 'Registration failed');
    }

    localStorage.setItem('pureprotocol_token', data.token);
    setUser(data.user);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('pureprotocol_token');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated: !!user, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
