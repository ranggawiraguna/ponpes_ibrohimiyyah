import { IconArticle, IconBook, IconClipboardList, IconReportSearch, IconListCheck } from '@tabler/icons';

const guruSidebar = {
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
          url: '/guru/artikel',
          icon: IconArticle
        },
        {
          id: 'theory',
          title: 'Materi',
          type: 'collapse',
          icon: IconBook,

          children: [
            {
              id: 'materi-1',
              title: 'Materi 1',
              type: 'item',
              url: '/guru/materi-1'
            },
            {
              id: 'materi-2',
              title: 'Materi 2',
              type: 'item',
              url: '/guru/materi-2'
            },
            {
              id: 'materi-3',
              title: 'Materi 3',
              type: 'item',
              url: '/guru/materi-3'
            }
          ]
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
          title: 'Penilaian',
          type: 'item',
          url: '/guru/penilaian',
          icon: IconReportSearch
        },
        {
          id: 'memory',
          title: 'Hafalan',
          type: 'item',
          url: '/guru/hafalan',
          icon: IconClipboardList
        },
        {
          id: 'attendance',
          title: 'Absensi',
          type: 'item',
          url: '/guru/absensi',
          icon: IconListCheck
        }
      ]
    }
  ]
};

export default guruSidebar;
