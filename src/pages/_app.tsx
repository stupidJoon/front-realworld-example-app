import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProps } from 'next/app';
import UserProvider from 'components/providers/UserProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
