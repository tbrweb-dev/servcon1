/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import Link from 'next/link';

const data = [
  {
    label: 'gerencia@servcon1.com',
    info: 'mailto:gerencia@servcon1.com',
  },
  {
    label: '(88) 3669-1144',
    info: 'tel: 8836691144',
  },
];

const TopBar = () => {
  return (
    <Box as="section" sx={styles.topbar}>
      <Box sx={styles.content}>
        <Text as="span" className="caption">
          No mercado há mais de {new Date().getFullYear() - 2000} anos, atendendo as expectativas dos nossos clientes.
        </Text>
        <Text as="span" className="tlds">
          {data.map(({label, info}, i) => (
            <Link href={info} key={i}>
              <a>
                {label}
              </a>
            </Link>
          ))}
        </Text>
      </Box>
    </Box>
  );
};

export default TopBar;

const styles = {
  topbar: {
    backgroundColor: 'primary',
    px: [6, null, null, null, 0],
    py: ['12px'],
  },
  content: {
    display: ['flex'],
    alignItems: ['center'],
    justifyContent: ['space-between'],
    color: 'white',
    fontSize: [1],
    fontWeight: 500,
    maxWidth: 1366,
    pl: '30px',
    pr: '30px',
    m: '0 auto',
    textAlign: 'center',
    span: {
      '+ span': {
        ml: [4],
      },
    },
    '.caption': {
      display: 'inline-flex',
      alignItems: 'center',

      width: [199, null, null, 'auto'],
      overflow: ['hidden', null, null, 'unset'],
      whiteSpace: ['nowrap', null, null, 'unset'],

      svg: {
        mr: [2, null, null, 3],
        minWidth: 20,
      },
    },
    '.tlds': {
      display: ['none', null, null, null, 'flex'],
      alignItems: 'center',
    },
    strong: {
      fontWeight: 700,
      textTransform: 'uppercase',
      '+ strong': {
        ml: 3,
      },
    },
    a: {
      color: 'white',
      cursor: 'pointer',
      fontSize: ['13px', null, null, 1, 1],
      fontWeight: 400,
      alignItems: 'center',
      display: 'inline-flex',
      textDecoration: 'none',
      ml: [2, null, null, null, 10, 13],
      svg: {
        ml: 1,
      },
      '&:not(:first-child)': {
        ml: 4,
        pl: 4,
        borderLeft: '2px solid #ffffff21'
      },
    },
  },
};
