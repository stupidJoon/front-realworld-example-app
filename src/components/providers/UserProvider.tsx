import { ReactNode, useState } from 'react';
import UserContext from 'contexts/UserContext';
import User from 'types/User';

interface Props {
  children: ReactNode;
}

function UserProvider({ children }: Props) {
  const [user, setUser] = useState<User>(null);
  const initialValue = { user, setUser };
  return (
    <UserContext.Provider value={initialValue}>{children}</UserContext.Provider>
  );
}

export default UserProvider;
