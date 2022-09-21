import {FaFacebook,FaTwitter, FaYoutube, FaLinkedin} from 'react-icons/fa'

export const footerMenu = [
  {
    id: 1,
    category: "categories",
    items: [
      {
        id: 1,
        lable: "all",
        url: "/all",
      },
      {
        id: 2,
        lable: "travel",
        url: "/travel",
      },
      {
        id: 3,
        lable: "lifeStyle",
        url: "/lifestyle",
      },
      {
        id: 4,
        lable: "technology",
        url: "/technology",
      },
    ],
  },
  {
    id: 2,
    category: "QUICK LINKS",
    items: [
      {
        id: 1,
        lable: "contact",
        url: "/all",
      },
      {
        id: 2,
        lable: "private & policy",
        url: "/private&policy",
      },
      {
        id: 3,
        lable: "terms & conditions",
        url: "/terms&conditions",
      },
      {
        id: 4,
        lable: "about me",
        url: "/about-me",
      },
    ],
  },
];

export const socialIcons = [
  {
    id: 1,
    icon: <FaFacebook size={20} />,
    url: "https://www.facebook.con",
  },
  {
    id: 2,
    icon: <FaTwitter size={20} />,
    url: "https://www.facebook.con",
  },
  {
    id: 3,
    icon: <FaYoutube size={20} />,
    url: "https://www.facebook.con",
  },
  {
    id: 4,
    icon: <FaLinkedin size={20} />,
    url: "https://www.facebook.con",
  },
];
