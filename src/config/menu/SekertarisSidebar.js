import { IconArticle, IconUserCircle, IconCamera, IconUserPlus, IconCreditCard } from '@tabler/icons';

const sekretarisSidebar = {
  items: [
    {
      id: 'main-menu',
      title: 'Menu Utama',
      type: 'group',
      children: [
        {
          id: 'home',
          title: 'Artikel',
          type: 'item',
          url: '/sekretaris/home',
          icon: IconArticle
        },
        {
          id: 'profile',
          title: 'Profil',
          type: 'item',
          url: '/sekretaris/home',
          icon: IconUserCircle
        },
        {
          id: 'documentation',
          title: 'Dokumentasi',
          type: 'item',
          url: '/sekretaris/home',
          icon: IconCamera
        },
        {
          id: 'regitration',
          title: 'Pendaftaran',
          type: 'item',
          url: '/sekretaris/home',
          icon: IconUserPlus
        },
        {
          id: 'payment',
          title: 'Pembayaran',
          type: 'item',
          url: '/sekretaris/home',
          icon: IconCreditCard
        }
      ]
    }
  ]
};

export default sekretarisSidebar;
