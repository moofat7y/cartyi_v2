import { FiUser } from "react-icons/fi";
import { AiOutlinePoweroff } from "react-icons/ai";
export const profileMenuItems = [
  {
    label: "حسابي",
    icon: <FiUser />,
    href: "/store/profile",
  },
  {
    label: "تسجيل الخروج",
    icon: <AiOutlinePoweroff />,
    href: "/",
  },
];

export const navMenuList = [
  {
    label: "الرئيسيه",
    href: "/",
  },
  {
    label: "المتجر",
    href: "/store",
  },
  {
    label: "الطلبات",
    href: "/orders",
  },
  {
    label: "المدونه",
    href: "/blog",
  },
  {
    label: "عنا",
    href: "/about",
  },
  {
    label: "تواصل معنا",
    href: "/contact-us",
  },
];

import img1 from "/banner/1.jpg";
import img2 from "/banner/2.jpg";
import img3 from "/banner/5.jpg";
export const bannerImages = [
  {
    image: img1,
  },
  {
    image: img2,
  },
  {
    image: img3,
  },
];
