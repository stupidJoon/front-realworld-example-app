import AuthContext from 'contexts/AuthContext';
import { ReactNode, useState } from 'react';
import User from 'types/User';

interface Props {
  children: ReactNode;
}

function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User>(null);
  const initialValue = { user, setUser };
  return (
    <AuthContext.Provider value={initialValue}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
