import React, { useEffect } from 'react';

import * as Fathom from 'fathom-client';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { PostHogProvider } from 'posthog-js/react';
import '../styles/global.css';

const options = {
  api_host: process.env.REACT_APP_PUBLIC_POSTHOG_HOST,
};

function CustomApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    // Initialize Fathom when the app loads
    // Example: yourdomain.com
    //  - Do not include https://
    //  - This must be an exact match of your domain.
    //  - If you're using www. for your domain, make sure you include that here.
    Fathom.load('PHFUPZYT', {
      includedDomains: ['petals.team'],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, []);
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

      <Head>
        <title>Welcome!</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <PostHogProvider
        apiKey={process.env.REACT_APP_PUBLIC_POSTHOG_KEY}
        options={options}
      >
        <Component {...pageProps} />
      </PostHogProvider>
    </>
  );
}

export default CustomApp;
