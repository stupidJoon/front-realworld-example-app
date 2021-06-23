import { createContext, Dispatch, SetStateAction } from 'react';
import User from 'types/User';

interface authContextType {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

const AuthContext = createContext<authContextType>({
  user: null,
  setUser: () => {},
});

export default AuthContext;
