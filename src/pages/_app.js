/** Uncomment the below codeblock if you want to add google analytics for more info please visit our docs analytics section */
/** 
import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
*/
import 'assets/css/react-slick.css';
import { InformacoesProvider } from 'hooks/useInformacoes';
import Head from 'next/head';

export default function CustomApp({ Component, pageProps }) {
  /** 
   useEffect(() => {
     initGA();
     logPageView();
     Router.events.on('routeChangeComplete', logPageView);
   }, []);
   */

  return (
    <InformacoesProvider>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Servcon Contabilidade</title>
        <link rel="icon" href="assets/images/favicon.png" type="image/x-icon" />
        <meta name="description" content="Prestar serviços contábeis e assessoria de qualidade, buscando atender as necessidades de nossos clientes e parceiros" />
        <meta name="author" content="TBrWeb - Criação e Desenvolvimento de Sites" />

        <meta property="og:title" content="Servcon Contabilidade" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.servcon1.com" />
        <meta property="og:image" content="https://www.servcon1.com/assets/images/logo.png" />
        <meta property="og:description" content="Prestar serviços contábeis e assessoria de qualidade, buscando atender as necessidades de nossos clientes e parceiros" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="Servcon Contabilidade" />
        <meta name="twitter:site" content="https://www.servcon1.com" />
        <meta name="twitter:image" content="https://www.servcon1.com/assets/images/logo.png" />
        <meta name="twitter:domain" content="servcon1.com" />
        <meta name="twitter:title" content="Servcon Contabilidade" />
        <meta name="twitter:description" content="Prestar serviços contábeis e assessoria de qualidade, buscando atender as necessidades de nossos clientes e parceiros" />
      </Head>
      <Component {...pageProps} />
    </InformacoesProvider>
  );
}
