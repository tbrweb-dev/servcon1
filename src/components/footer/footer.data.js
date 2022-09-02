import telefone from 'assets/images/icons/telefone.png'
import email from 'assets/images/icons/email.png'
import endereco from 'assets/images/icons/endereco.png'
import cidade from 'assets/images/icons/cidade.png'
import facebook from 'assets/images/icons/facebook.png'
import instagram from 'assets/images/icons/instagram.png'
import linkedin from 'assets/images/icons/linkedin.png'
import whatsapp from 'assets/images/icons/whatsapp.png'

export const menuItems = [
  {
    id: 2,
    title: 'Contato',
    items: [
      {
        path: 'tel:8899126620',
        icon: telefone,
        label: '(88) 9912-6620',
      },
      {
        path: 'mailto:ti@servcon1.com',
        icon: email,
        label: 'ti@servcon1.com',
      },
      {
        path: 'https://g.page/servconjijoca?share',
        icon: endereco,
        label: 'Rua 17 de Outubro, 1340',
      },
      {
        path: 'https://g.page/servconjijoca?share',
        icon: cidade,
        label: 'Jijoca de Jericoacoara - CE',
      },
    ],
  },
  {
    id: 3,
    title: 'Redes Sociais',
    items: [
      {
        path: 'https://www.facebook.com/servconjijoca',
        icon: facebook,
        label: 'Facebook',
      },
      {
        path: 'https://www.instagram.com/servconjijoca/',
        icon: instagram,
        label: 'Instagram',
      },
      {
        path: 'https://wa.me/558899126620',
        icon: whatsapp,
        label: 'Whatsapp',
      },
    ],
  },
];

export const footerNav = [
  {
    path: '#!',
    label: 'Home',
  },
  {
    path: '#!',
    label: 'Advertise',
  },
  {
    path: '#!',
    label: 'Supports',
  },
  {
    path: '#!',
    label: 'Marketing',
  },
  {
    path: '#!',
    label: 'FAQ',
  },
];
