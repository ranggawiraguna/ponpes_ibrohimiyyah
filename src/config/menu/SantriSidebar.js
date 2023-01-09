import { IconArticle, IconHome2, IconReportSearch, IconClipboardList, IconCreditCard } from '@tabler/icons';

const santriSidebar = {
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
          url: '/santri/artikel',
          icon: IconArticle
        },
        {
          id: 'class',
          title: 'Kelas',
          type: 'item',
          url: '/santri/kelas',
          icon: IconHome2
        }
      ]
    },
    {
      id: 'activity',
      title: 'Aktivitas',
      type: 'group',
      children: [
        {
          id: 'value',
          title: 'Nilai',
          type: 'item',
          url: '/santri/nilai',
          icon: IconReportSearch
        },
        {
          id: 'memory',
          title: 'Hafalan',
          type: 'item',
          url: '/santri/hafalan',
          icon: IconClipboardList
        },
        {
          id: 'payment',
          title: 'Pembayaran',
          type: 'item',
          url: '/santri/pembayaran',
          icon: IconCreditCard
        }
      ]
    }
  ]
};

export default santriSidebar;
