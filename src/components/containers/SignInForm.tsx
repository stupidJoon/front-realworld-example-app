import SignInFormPresenter from 'components/presenters/SignInForm';
import Router from 'next/router';
import { ChangeEvent, SyntheticEvent, useState } from 'react';

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFailed, setIsFailed] = useState(false);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.type === 'email') {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const onSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const response = await fetch(
      'https://conduit.productionready.io/api/users/login',
      {
        method: 'POST',
        body: JSON.stringify({ user: { email, password } }),
        headers: {
          'Content-Type': 'application/json',
          charset: 'utf-8',
        },
      },
    );
    if (response.status === 421) {
      setIsFailed(true);
      return;
    }
    const {
      user: { token },
    } = await response.json();
    localStorage.setItem('jwtToken', token);
    Router.push('/');
  };

  return (
    <SignInFormPresenter
      email={email}
      password={password}
      isFailed={isFailed}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
}

export default SignInForm;
