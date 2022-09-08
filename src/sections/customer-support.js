/** @jsx jsx */
import { jsx, Box, Container, Grid, Button, Heading, Text, Flex } from 'theme-ui';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import Image from 'components/image';
import support from 'assets/images/support.png';
import check from 'assets/images/icons/check.png'

const list = [
  'Calendário contendo todas às obrigações da empresa perante a legislação',
  'Possibilidade de enviar solicitações para o Escritório Contábil e também responder as demandas enviadas',
  'Gerenciamento Eletrônico de documentos onde todo documento enviado pelo app é armazenado em Cloud',
  'Por Intermédio do app a Empresa receberá comunicados do escritório contábil em diversas orientações fiscais',
];

const CustomerSupport = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <Box sx={styles.grid}>
          <Box sx={styles.illustration}>
            <Image src={support} loading="lazy" alt="support" />
          </Box>
          <Box sx={styles.content}>
            <Heading sx={styles.title}>
              Baixe nosso App
            </Heading>
            <Text as="p" sx={styles.summary}>
              Possuímos diversas vantagens e facilidades no nosso app
            </Text>

            <Grid sx={styles.list} as="ul">
              {list.map((item, i) => (
                <Text as="li" key={i}>
                  <Text as="span">
                    {/* <IoIosCheckmarkCircle
                      sx={{ color: 'secondary', mr: 2 }}
                      size="2em"
                    /> */}
                    <img src={check} />
                    {item}
                  </Text>
                </Text>
              ))}
              <Flex sx={{ justifyContent: 'center' }}>
                <Button sx={styles.button} as="a" target="_blank" href="https://play.google.com/store/apps/details?id=com.servcon">Baixe Nosso App</Button>
              </Flex>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CustomerSupport;

const styles = {
  section: {
    pt: [8, null, null, 6, null, 14, 16],
    pb: [null, null, null, 8, 0],
  },
  grid: {
    gap: [null, null, null, null, '0 10px'],
    display: ['flex', null, null, 'grid'],
    flexDirection: ['column-reverse', null, null, 'unset'],
    alignItems: 'center',
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      '1fr',
      '470px 1fr',
      '600px 1fr',
      '760px 1fr',
    ],
  },
  illustration: {
    textAlign: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    mt: [2, null, null, 0, 4, 0],
    img: {
      maxWidth: ['100%', null, null, null, null, '100%'],
    },
  },
  content: {
    marginTop: [null, null, null, null, null, -16],
    maxWidth: [null, null, null, 560, 'none'],
    m: [null, null, null, '0 auto', 'unset'],
  },
  title: {
    color: 'heading',
    fontWeight: 500,
    fontSize: [5, null, null, 10, null, null, 11],
    lineHeight: 1.53,
    letterSpacing: ['-0.5px', null, null, '-1px'],
    textAlign: ['center', null, null, null, 'left'],
    span: {
      backgroundSize: 'cover',
      px: 2,
    },
  },
  summary: {
    color: 'textSecondary',
    fontSize: [1, null, null, 2, '15px', 2],
    lineHeight: [1.86, null, null, null, 1.86, 2.25],
    maxWidth: 470,
    m: [null, null, null, '20px auto 0', '15px 0 0', null, 'unset'],
    textAlign: ['center', null, null, null, 'left'],
  },
  list: {
    gap: '0 18px',
    gridTemplateColumns: ['1fr', null, null, '1fr'],
    justifyContent: [null, null, null, 'center', 'unset'],
    listStyle: 'none',
    mt: [4, null, null, 5, 4, 5],
    p: 0,
    li: {
      fontSize: [0, 1, null, 2, '15px', 2],
      fontWeight: 500,
      alignItems: 'center',
      color: 'textSecondary',
      display: 'flex',
      lineHeight: [1.5, null, null, null, 1.5, 1.5],
      mt: 4,
      span: {
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }
    },
  },
  button: {
    mt: [8],
    textAlign: 'center',
  }
};
