import React, { useMemo, useState } from 'react';
import { STORAGE_KEY } from 'src/constants/storage';
import { storage } from 'src/utils/storage';

export const AuthContext = React.createContext<any>({
  token: null,
  setToken: null,
});

export const AuthProvider: React.FC<{ children: any }> = ({ children }) => {
  const [token, setToken] = useState<string>(storage.get(STORAGE_KEY.ACCESS_TOKEN) || '');

  const valContext = useMemo(() => {
    return { token: token, setToken: setToken };
  }, [token]);

  return <AuthContext.Provider value={valContext}>{children}</AuthContext.Provider>;
};

export const useAuth = () => React.useContext(AuthContext);
