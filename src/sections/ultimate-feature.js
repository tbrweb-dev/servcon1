/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';
import ScrollAnimation from 'react-animate-on-scroll';

import icon1 from 'assets/images/services/1.png';
import icon2 from 'assets/images/services/2.png';
import icon3 from 'assets/images/services/3.png';
import icon4 from 'assets/images/services/4.png';
import icon5 from 'assets/images/services/5.png';
import icon6 from 'assets/images/services/6.png';

const data = [
  {
    id: 1,
    icon: icon1,
    title: 'Departamento de Registros',
    description: `Seja para quem está iniciando um novo negócio ou para quem somente procura alterar sua empresa já registrada, oferecemos apoio constante, elaborando a documentação para registro em todos os órgãos e repartições necessárias com agilidade, para que o empresário possa rapidamente obter o registro, sem necessidade de atraso no início das atividades.`,
  },
  {
    id: 2,
    icon: icon2,
    title: 'Departamento Trabalhista',
    description: `Orientação e controle da aplicação dos preceitos da consolidação das leis do trabalho, “PIS”, “FGTS” e outros aplicáveis às relações de emprego; Manutenção dos registros de empregados e serviços correlatos; Elaboração da folha de pagamento dos empregados e de Pró-Labore, bem como das guias de recolhimento dos encargos sociais e tributos afins; Atendimento das demais exigências previstas na legislação.`,
  },
  {
    id: 3,
    icon: icon3,
    title: 'Departamento Fiscal',
    description: `Orientação e controle da aplicação dos dispositivos legais vigentes, federais, estaduais ou municipais; Escriturações dos registros fiscais do IPI, ICMS, ISS e elaboração das guias de informação e de recolhimento dos tributos devidos; Atendimento das demais exigências previstas em atos normativos, bem como de eventuais procedimentos de fiscalização tributaria.`,
  },
  {
    id: 4,
    icon: icon4,
    title: 'Departamento Contábil',
    description: `Classificação e escrituração da contabilidade de acordo com as normas e princípios contábeis vigentes. Apuração de balancetes; Elaboração do balanço anual e demonstrativos de resultado;`,
  },
  {
    id: 5,
    icon: icon5,
    title: 'Imposto de Renda PF/PJ',
    description: `Orientação e controle de aplicação dos dispositivos legais vigentes; Elaboração da declaração anual de rendimentos e documentos correlatos; Atendimento das demais exigências previstas em atos normativos, bem como de eventuais procedimentos de fiscalização.`,
  },
  {
    id: 6,
    icon: icon6,
    title: 'Planejamento Tributário',
    description: `Elaboração de plano para economia Tributária; Estudo para a compensação de tributos inconstitucionais; Estudo, avaliação e enquadramento da empresa diante da legislação Fiscal para o melhor aproveitamento na determinação de impostos e contribuições.`,
  },
];

const UltimateFeatures = () => {
  return (
    <Box as="section" id="servicos" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Servcon Contabilidade"
          title="Áreas de Atuação"
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <ScrollAnimation animateIn="bounceInDown" animateOut="fadeOut">
              <Feature className="feature-item" key={item.id} data={item} />
            </ScrollAnimation>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default UltimateFeatures;

const styles = {
  section: {
    backgroundColor: '#F9FAFC',
    pt: [8, null, null, null, 10, 14],
    pb: [8, null, null, null, 15, 16, 19],
    position: 'relative',
  },
  heading: {
    marginBottom: [50, 50, 80],
    p: {
      maxWidth: 490,
      margin: ['10px auto 0'],
    },
  },
  features: {
    gap: [35, null, null, 40, '50px 30px', 60],
    display: ['grid', 'grid'],
    maxWidth: 1030,
    margin: '0 auto',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      null,
      null,
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    '.feature-item': {
      display: ['block'],
      textAlign: 'center',
      maxWidth: [290, 260, null, 280, 'none'],
      m: ['0 auto', '0 auto', '0 auto', '0 auto', '0 auto', 0],
      figure: {
        m: ['0 0 20px'],
      },
      h4: {
        mb: ['15px', '15px', '20px'],
      },
      p: {
        fontSize: ['14px', '14px', '16px', '16px', '14px', '16px'],
      },
    },
  },
};