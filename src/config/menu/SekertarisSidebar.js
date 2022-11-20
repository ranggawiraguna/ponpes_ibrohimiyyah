import { IconArticle, IconUserCircle, IconCamera, IconUserPlus, IconCreditCard } from '@tabler/icons';

const sekretarisSidebar = {
  items: [
    {
      id: 'main-menu',
      title: 'Menu Utama',
      type: 'group',
      children: [
        {
          id: 'article',
          title: 'Artikel',
          type: 'item',
          url: '/sekretaris/artikel',
          icon: IconArticle
        },
        {
          id: 'profile-pondok',
          title: 'Profil Pondok',
          type: 'item',
          url: '/sekretaris/profile-pondok',
          icon: IconUserCircle
        },
        {
          id: 'documentation',
          title: 'Dokumentasi',
          type: 'item',
          url: '/sekretaris/dokumentasi',
          icon: IconCamera
        },
        {
          id: 'registration',
          title: 'Pendaftaran',
          type: 'item',
          url: '/sekretaris/pendaftaran',
          icon: IconUserPlus
        },
        {
          id: 'payment',
          title: 'Pembayaran',
          type: 'item',
          url: '/sekretaris/pembayaran',
          icon: IconCreditCard
        }
      ]
    }
  ]
};

export default sekretarisSidebar;
