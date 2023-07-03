import telefone from 'assets/images/icons/telefone.png'
import email from 'assets/images/icons/email.png'
import endereco from 'assets/images/icons/endereco.png'
import cidade from 'assets/images/icons/cidade.png'
import facebook from 'assets/images/icons/facebook.png'
import instagram from 'assets/images/icons/instagram.png'
import whatsapp from 'assets/images/icons/whatsapp.png'
import store from 'assets/images/icons/store.png'

export const menuItems = [
  {
    id: 2,
    title: 'Contato',
    items: [
      {
        path: 'tel:8836691144',
        icon: telefone,
        label: '(88) 3669-1144',
      },
      {
        path: 'mailto:gerencia@servcon1.com',
        icon: email,
        label: 'gerencia@servcon1.com',
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
        path: 'https://wa.me/558899668652',
        icon: whatsapp,
        label: 'Whatsapp',
      },
      {
        path: 'https://play.google.com/store/apps/details?id=com.servcon',
        icon: store,
        label: 'Nosso App',
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
