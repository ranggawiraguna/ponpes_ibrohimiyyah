import {
  IconArticle,
  IconHome2,
  IconReportSearch,
  IconClipboardList,
  IconCreditCard,
} from "@tabler/icons";

const santriSidebar = {
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
          url: "/santri/home",
          icon: IconArticle,
        },
        {
          id: "class",
          title: "Kelas",
          type: "item",
          url: "/santri/home",
          icon: IconHome2,
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
          title: "Nilai",
          type: "item",
          url: "/santri/home",
          icon: IconReportSearch,
        },
        {
          id: "memory",
          title: "Hafalan",
          type: "item",
          url: "/santri/home",
          icon: IconClipboardList,
        },
        {
          id: "payment",
          title: "Pembayaran",
          type: "item",
          url: "/santri/home",
          icon: IconCreditCard,
        },
      ],
    },
  ],
};

export default santriSidebar;
