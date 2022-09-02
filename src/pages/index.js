import React, { useEffect } from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import PremiumFeature from 'sections/premium-feature';
import UltimateFeatures from 'sections/ultimate-feature';
import CustomerSupport from 'sections/customer-support';
import Pricing from 'sections/pricing';
import Testimonials from 'sections/testimonials';
import Blog from 'sections/blog';
import Faq from 'sections/faq';
import Support from 'sections/support';
import Lgpd from 'components/lgpd';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="SERVCON Serviços de Contabilidade"
          description="Prestar serviços contábeis e assessoria de qualidade, buscando atender as necessidades de nossos clientes e parceiros"
        />
        <Banner />
        <PremiumFeature />
        <UltimateFeatures />
        {/* <CustomerSupport /> */}
        <Pricing />
        {/* <Testimonials /> */}
        <Services />
        <Blog />
        <Lgpd />
        {/* <Support /> */}
      </Layout>
    </ThemeProvider>
  );
}
