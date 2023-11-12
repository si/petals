import React from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

import '../styles/global.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="GoogleAnalyticsInit" strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles:wght@400;700&family=Gaegu:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <Head>
        <title>Welcome!</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
