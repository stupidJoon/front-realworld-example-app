import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProps } from 'next/app';
import UserProvider from 'components/providers/UserProvider';
import useUser from 'hooks/useUser';

function MyApp({ Component, pageProps }: AppProps) {
  useUser();
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
