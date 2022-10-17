import {
  IconArticle,
  IconUserCircle,
  IconCamera,
  IconUserPlus,
  IconCreditCard,
} from "@tabler/icons";

const sekertarisSidebar = {
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
          url: "/sekertaris/home",
          icon:   IconArticle,
        },
        {
          id: "profile",
          title: "Profil",
          type: "item",
          url: "/sekertaris/home",
          icon: IconUserCircle,
        },
        {
          id: "documentation",
          title: "Dokumentasi",
          type: "item",
          url: "/sekertaris/home",
          icon: IconCamera,
        },
        {
          id: "regitration",
          title: "Pendaftaran",
          type: "item",
          url: "/sekertaris/home",
          icon: IconUserPlus,
        },
        {
          id: "payment",
          title: "Pembayaran",
          type: "item",
          url: "/sekertaris/home",
          icon: IconCreditCard,
        },
      ],
    },
  ],
};

export default sekertarisSidebar;
