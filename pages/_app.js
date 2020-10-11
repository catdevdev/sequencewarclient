import App from 'next/app';
import GlobalStyled from '../theme/globalStyles';
import Head from 'next/head';
import Main from '../components/Layout/Main';
import UICalls from '../components/UI/UICalls';

import { Provider } from 'react-redux';
import { store } from '../redux/store';

import socketIOClient from "socket.io-client";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <GlobalStyled />
      <UICalls></UICalls>
      {/* <Provider store={store}> */}
      <Main>
        <Component {...pageProps} />
      </Main>
      {/* </Provider> */}
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
