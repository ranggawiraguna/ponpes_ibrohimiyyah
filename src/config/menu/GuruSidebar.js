import {
  IconArticle,
  IconBook,
  IconClipboardList,
  IconReportSearch,
  IconListCheck,
} from "@tabler/icons";

const guruSidebar = {
  items: [
    {
      id: "main-menu",
      title: "Menu Utama",
      type: "group",
      children: [
        {
          id: "home",
          title: "Artikel",
          type: "item",
          url: "/guru/home",
          icon: IconArticle,
        },
        {
          id: "theory",
          title: "Materi",
          type: "collapse",
          icon: IconBook,

          children: [
            {
              id: "inbound",
              title: "Materi 1",
              type: "item",
              url: "/guru/home",
            },
            {
              id: "inbound",
              title: "Materi 2",
              type: "item",
              url: "/guru/home",
            },
            {
              id: "inbound",
              title: "Materi 3",
              type: "item",
              url: "/guru/home",
            },
          ],
        },
      ],
    },
    {
      id: "activity",
      title: "Aktivitas",
      type: "group",
      children: [
        {
          id: "value",
          title: "Penilaian",
          type: "item",
          url: "/guru/home",
          icon: IconReportSearch,
        },
        {
          id: "memory",
          title: "Hafalan",
          type: "item",
          url: "/guru/home",
          icon: IconClipboardList,
        },
        {
          id: "attendance",
          title: "Absensi",
          type: "item",
          url: "/guru/home",
          icon: IconListCheck,
        },
      ],
    },
  ],
};

export default guruSidebar;
