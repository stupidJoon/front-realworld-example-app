import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProps } from 'next/app';
import AuthProvider from 'components/providers/AuthProvider';
import useUser from 'hooks/useUser';

function MyApp({ Component, pageProps }: AppProps) {
  useUser();
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
