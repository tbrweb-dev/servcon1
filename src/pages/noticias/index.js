import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import Layout from 'components/layout';
import BannerSecundario from 'sections/bannerSecundario';
import banner from 'assets/images/banner1.png';
import BlogTodos from 'sections/blogTodos';

export default function Noticias() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <BannerSecundario title="Notícias" banner={banner} />
        <BlogTodos />
      </Layout>
    </ThemeProvider>
  );
}