// _app.tsx
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css'; // Your global styles

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
