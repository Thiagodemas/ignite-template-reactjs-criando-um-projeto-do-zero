import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <h1>teste</h1>;
}

export default MyApp;
