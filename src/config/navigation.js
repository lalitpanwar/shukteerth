export const NAVIGATION = [
  {
    key: "home",
    label: "होम",
    href: "/",
  },

  {
    key: "about",
    label: "आश्रम परिचय",
    href: "/about",
    children: [
      {
        key: "ourStory",
        label: "हमारी कहानी",
        href: "/about/our-story",
      },
      {
        key: "missionVision",
        label: "ध्येय एवं उद्देश्य",
        href: "/about/mission-vision",
      },
      {
        key: "trust",
        label: "ट्रस्ट",
        href: "/about/trust",
      },
      {
        key: "timeline",
        label: "समयरेखा",
        href: "/about/timeline",
      },
    ],
  },

  {
    key: "shukteerth",
    label: "शुकतीर्थ",
    href: "/shukteerth",
    children: [
      {
        key: "history",
        label: "इतिहास",
        href: "/shukteerth/history",
      },
      {
        key: "pauranikSignificance",
        label: "पौराणिक महत्व",
        href: "/shukteerth/pauranik-significance",
      },
      {
        key: "sacredPlaces",
        label: "पवित्र स्थल",
        href: "/shukteerth/sacred-places",
      },
      {
        key: "visitorGuide",
        label: "यात्री मार्गदर्शिका",
        href: "/shukteerth/visitor-guide",
      },
    ],
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
      {
        key: "guruLegacy",
        label: "गुरु विरासत",
        href: "/guru-parampara/legacy",
      },
    ],
  },

  {
    key: "activities",
    label: "गतिविधियाँ",
    href: "/activities",
    children: [
      {
        key: "gurukul",
        label: "गुरुकुल",
        href: "/activities/gurukul",
      },
      {
        key: "gauSeva",
        label: "गौ सेवा",
        href: "/activities/gau-seva",
      },
      {
        key: "annakshetra",
        label: "अन्नक्षेत्र",
        href: "/activities/annakshetra",
      },
      {
        key: "dailyBhagwat",
        label: "दैनिक भागवत कथा",
        href: "/activities/daily-bhagwat",
      },
      {
        key: "yagyaAnushthan",
        label: "यज्ञ एवं अनुष्ठान",
        href: "/activities/yagya-anushthan",
      },
    ],
  },

  // {
  //   key: "ashramLife",
  //   label: "आश्रम जीवन",
  //   href: "/ashram-life",
  // },

  {
    key: "media",
    label: "मीडिया",
    href: "/media",
    children: [
      {
        key: "gallery",
        label: "गैलरी",
        href: "/media/gallery",
      },
      {
        key: "videos",
        label: "वीडियो",
        href: "/media/videos",
      },
      {
        key: "blog",
        label: "ब्लॉग",
        href: "/media/blog",
      },
      {
        key: "news",
        label: "समाचार",
        href: "/media/news",
      },
    ],
  },

  {
    key: "bookOnline",
    label: "ऑनलाइन बुकिंग",
    href: "/book-online",
    children: [
      {
        key: "bhagwatBooking",
        label: "भागवत बुकिंग",
        href: "/book-online/bhagwat-booking",
      },
      {
        key: "pujaBooking",
        label: "पूजा बुकिंग",
        href: "/book-online/puja-booking",
      },
      {
        key: "accommodation",
        label: "आवास बुकिंग",
        href: "/book-online/accommodation",
      },
    ],
  },

  // {
  //   key: "visit",
  //   label: "दर्शन एवं यात्रा",
  //   href: "/visit",
  // },

  {
    key: "contact",
    label: "संपर्क",
    href: "/contact",
  },
];