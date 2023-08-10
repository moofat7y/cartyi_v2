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
