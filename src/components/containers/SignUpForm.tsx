import SignUpFormPresenter from 'components/presenters/SignUpForm';
import Router from 'next/router';
import { ChangeEvent, SyntheticEvent, useState } from 'react';

function SignUpForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.type === 'text') {
      setUsername(event.target.value);
    } else if (event.target.type === 'email') {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const onSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const response = await fetch(
      'https://conduit.productionready.io/api/users',
      {
        method: 'POST',
        body: JSON.stringify({ user: { username, email, password } }),
        headers: {
          'Content-Type': 'application/json',
          charset: 'utf-8',
        },
      },
    );
    if (response.status === 422) {
      setErrors((await response.json()).errors);
      return;
    }
    const {
      user: { token },
    } = await response.json();
    localStorage.setItem('jwtToken', token);
    Router.push('/');
  };

  return (
    <SignUpFormPresenter
      username={username}
      email={email}
      password={password}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}

export default SignUpForm;
