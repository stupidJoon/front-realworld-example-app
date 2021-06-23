import { useEffect, useContext } from 'react';
import UserContext from 'contexts/UserContext';

function useUser() {
  const { setUser } = useContext(UserContext);
  useEffect(() => {
    const getUser = async () => {
      const jwtToken = localStorage.getItem('jwtToken');
      if (jwtToken === null) {
        setUser(null);
        return;
      }
      let { user } = await fetch(
        'https://conduit.productionready.io/api/user',
        { headers: { Authorization: `Token ${jwtToken}` } },
      ).then((response) => response.json());
      setUser(user);
    };
    getUser();
  }, []);
}

export default useUser;
