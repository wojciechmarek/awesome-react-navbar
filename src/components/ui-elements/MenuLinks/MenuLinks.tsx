import {
  ClockIcon,
  PaperAirplaneIcon,
  ReceiptRefundIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { SubLinksBox } from "./LinkSubItems";

export const MenuLinks = () => {
  const links = [
    {
      name: "Add",
      subLinks: [
        {
          name: "Work time",
          description: "Log and manage your work time",
          link: "/work-time",
          color: "bg-green-300 dark:bg-green-700",
          icon: <ClockIcon />,
        },
        {
          name: "Vacation",
          description: "Add and manage your vacation",
          link: "/vacation",
          color: "bg-red-300 dark:bg-red-700",
          icon: <PaperAirplaneIcon />,
        },
        {
          name: "Invoice",
          description: "Add and manage your invoices",
          link: "/invoices",
          color: "bg-blue-300 dark:bg-blue-700",
          icon: <ReceiptRefundIcon />,
        },
      ],
    },
    {
      name: "Home",
      subLinks: [
        {
          name: "Home 1",
          description: "Home 1",
          link: "/home-1",
          icon: <HomeIcon />,
        },
        {
          name: "Home 2",
          description: "Home 2",
          link: "/home-2",
          icon: <HomeIcon />,
        },
        {
          name: "Home 3",
          description: "Home 3",
          link: "/home-3",
          icon: <HomeIcon />,
        },
      ],
    },
  ];
  return (
    <ul className="flex px-4">
      {links.map((link) => (
        <div className="relative group" key={link.name}>
          <li className="text-gray-500 dark:text-gray-100 hover:text-gray-700 font-semibold cursor-pointer py-2 px-4 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg">
            {link.name}
          </li>
          <div className="hidden group-hover:block">
            <SubLinksBox subLinks={link.subLinks} />
          </div>
        </div>
      ))}
    </ul>
  );
};
