export const NAVIGATION = [
  {
    key: "home",
    label: "होम",
    href: "/",
  },

  {
    key: "about",
    label: "आश्रम परिचय",
    href: "/about-ashram",
  },

  {
    key: "shukteerth",
    label: "शुकतीर्थ",
    href: "/shukteerth",
  },

  {
    key: "guruParampara",
    label: "गुरु परम्परा",
    href: "/guru-parampara",
    children: [
      {
        key: "swamiKalyanDev",
        label: "स्वामी कल्याण देव जी",
        href: "/guru-parampara/swami-kalyan-dev",
      },
      {
        key: "swamiOmanand",
        label: "स्वामी ओमानन्द जी",
        href: "/guru-parampara/swami-omanand",
      },
    ],
  },

  {
    key: "gallery",
    label: "गैलरी",
    href: "/gallery",
  },

  {
    key: "contact",
    label: "संपर्क",
    href: "/contact",
  },
];
