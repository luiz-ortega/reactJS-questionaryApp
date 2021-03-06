import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface SignInCredentials {
  name: string;
  email: string;
  password: string;
}

interface AuthContextData {
  signIn(credentials: SignInCredentials): void;
  signOut(): void;
  user: SignInCredentials;
}

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<SignInCredentials>(() => {
    const user = localStorage.getItem('@KPIS:user');

    if (user) {
      return JSON.parse(user);
    }

    return false;
  });

  const signIn = ({ name, email, password }: SignInCredentials) => {
    localStorage.setItem(
      '@KPIS:user',
      JSON.stringify({ name, email, password }),
    );

    setData({ name, email, password });
  };

  const signOut = () => {
    document.location.reload();
    localStorage.removeItem('@KPIS:user');

    setData({} as SignInCredentials);
  };

  return (
    <AuthContext.Provider value={{ user: data, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
