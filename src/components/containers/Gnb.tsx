import { useState, useEffect } from 'react';
import GnbPresenter from 'components/presenters/Gnb';
import UserType from 'types/User';

interface Props {
  setUser: (user: UserType) => void;
}

function Gnb({ setUser }) {
  useEffect(() => {
    const getUser = async () => {
      const jwtToken = localStorage.getItem('jwtToken');
      if (jwtToken !== null) {
        let { user } = await fetch(
          'https://conduit.productionready.io/api/user',
          {
            headers: {
              Authorization: `Token ${jwtToken}`,
            },
          },
        ).then((response) => response.json());
        setUser(user);
      }
    };
    getUser();
  }, []);
  return <GnbPresenter />;
}

export default Gnb;
