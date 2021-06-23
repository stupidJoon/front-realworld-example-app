import { useEffect, useContext } from 'react';
import AuthContext from 'contexts/AuthContext';

function useUser() {
  const { setUser } = useContext(AuthContext);
  useEffect(() => {
    const getUser = async () => {
      const jwtToken = localStorage.getItem('jwtToken');
      if (jwtToken === null) return;
      let { user } = await fetch(
        'https://conduit.productionready.io/api/user',
        { headers: { Authorization: `Token ${jwtToken}` } },
      ).then((response) => response.json());
      setUser(user);
      console.log(user);
    };
    getUser();
  });
}

export default useUser;
