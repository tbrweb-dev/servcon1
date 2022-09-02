/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
import quemSomos from 'assets/images/quem-somos.png';
import ScrollAnimation from 'react-animate-on-scroll';

const data = [
  {
    title: 'Missão',
    contents: (
      <div>
        Prestar serviços contábeis e assessoria de qualidade, buscando atender as necessidades de nossos clientes e parceiros, agregando valores, segurança e tranquilidade nos seus empreendimentos e juntos sermos instrumento de referência na transformação econômica e social na região, com visibilidade nacional e internacional.
      </div>
    ),
  },
  {
    title: 'Visão',
    contents: (
      <div>
        Ser referência de excelência em serviços de contabilidade e se manter entre os principais da região.
      </div>
    ),
  },
  {
    title: `Valores`,
    contents: (
      <div>
        Ética, qualidade, comprometimento, seriedade, gestão compartilhada, responsabilidade socioeconômica e tradição.
      </div>
    ),
  },
];

const PremiumFeature = () => {
  return (
    <Box id="quem-somos" as="section" sx={styles.section}>
      <Box
        as="figure"
        sx={{ ...styles.illustration, background: `url(${quemSomos}) no-repeat` }}
      />
      <ScrollAnimation animateIn="bounceInRight" animateOut="fadeOut">
        <Container sx={styles.container}>
          <Box sx={styles.accordionGroup}>
            <SectionHeading
              sx={styles.heading}
              slogan="Servicon Contabilidade"
              title="Conheça um pouquinho sobre nossa história"
              description="Somos uma empresa voltada para o ramo contábil, fiscal e trabalhista, composta por profissionais, prestando serviços de qualidade e eficiência com um sistema operacional de trabalho totalmente informatizado. No mercado desde Fevereiro de 2000, estamos sempre buscando os requisitos para atender as expectativas dos nossos clientes."
            />
            <Accordion items={data} />
          </Box>
        </Container>
      </ScrollAnimation>
    </Box>
  );
};

export default PremiumFeature;

const styles = {
  section: {
    pb: [12, null, null, null, null, 14, 18],
    pt: [6, null, null, null, null, 6, 6],
    // marginBottom: [null, null, null, null, null, null, '-85px'],
    position: 'relative',
    zIndex: 0,
  },
  container: {
    display: ['flex'],
    alignItems: ['flex-start'],
    justifyContent: 'flex-end',
  },
  illustration: {
    backgroundSize: [null, null, null, null, null, '62%', '50%', '66%', '62%'],
    '@media only screen and (min-width: 1601px)': {
      backgroundSize: '60%',
      backgroundPosition: 'bottom left',
    },
    backgroundPosition: [
      null,
      null,
      null,
      null,
      null,
      '-80px 0',
      null,
      null,
      '0 0',
      '-140px 0px',
    ],
    bottom: 0,
    display: ['none', null, null, null, null, 'block'],
    height: '100%',
    left: 0,
    position: 'absolute',
    width: '100%',
  },
  accordionGroup: {
    maxWidth: [null, null, null, 520, 610, 410, null, 450, 410],
    m: [null, null, null, '0 auto', null, '0', null],
    // marginLeft: [null, null, null, 'auto', null, 10, 12, 16],
    // marginRight: [null, null, null, 'auto', null, 'unset'],
    // px: [6, null, null, null, 0],
  },
  heading: {
    textAlign: ['center', null, null, null, null, 'left'],
    maxWidth: [null, null, null, 440, 450, 'none'],
    mb: [null, null, null, null, 6, 4, 6],
    h3: {
      fontSize: [4, null, null, 8, 10, 8, 12],
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: 'heading',
      maxWidth: [250, null, null, 'none'],
      margin: ['0 auto', null, null, 'unset'],
      mt: 12
    },
  },
};
