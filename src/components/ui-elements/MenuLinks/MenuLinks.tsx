import {
  ClockIcon,
  PaperAirplaneIcon,
  ReceiptRefundIcon,
  HomeIcon,
  DocumentIcon,
  PlusCircleIcon,
  ListBulletIcon,
  DocumentTextIcon,
  CommandLineIcon,
  TicketIcon,
  HeartIcon,
  GiftIcon,
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
          color: "bg-teal-300 dark:bg-teal-700",
          icon: <ClockIcon />,
        },
        {
          name: "Document",
          description: "Add and manage your documents",
          link: "/other-documents",
          color: "bg-indigo-300 dark:bg-indigo-700",
          icon: <DocumentIcon />,
        },
        {
          name: "Vacation",
          description: "Add and manage your vacation",
          link: "/vacation",
          color: "bg-amber-300 dark:bg-amber-700",
          icon: <PaperAirplaneIcon />,
        },
        {
          name: "Invoice",
          description: "Add and manage your invoices",
          link: "/invoices",
          color: "bg-rose-300 dark:bg-rose-700",
          icon: <ReceiptRefundIcon />,
        },
      ],
    },
    {
      name: "Projects",
      subLinks: [
        {
          name: "Create",
          description: "Create a new project",
          link: "/create-project",
          color: "bg-green-300 dark:bg-green-700",
          icon: <PlusCircleIcon />,
        },
        {
          name: "Manage",
          description: "Manage projects",
          link: "/manage-projects",
          color: "bg-blue-300 dark:bg-blue-700",
          icon: <ListBulletIcon />,
        },
        {
          name: "Archive",
          description: "Manage all archived projects",
          link: "/archive-projects",
          color: "bg-red-300 dark:bg-red-700",
          icon: <ReceiptRefundIcon />,
        },
      ],
    },
    {
      name: "Clients",
      subLinks: [
        {
          name: "Create",
          description: "Create a new client",
          link: "/create-client",
          color: "bg-green-300 dark:bg-green-700",
          icon: <PlusCircleIcon />,
        },
        {
          name: "Manage",
          description: "Manage clients",
          link: "/manage-clients",
          color: "bg-blue-300 dark:bg-blue-700",
          icon: <ListBulletIcon />,
        },
        {
          name: "Archive",
          description: "Manage all archived clients",
          link: "/archive-clients",
          color: "bg-red-300 dark:bg-red-700",
          icon: <ReceiptRefundIcon />,
        },
      ],
    },
    {
      name: "Employees",
      subLinks: [
        {
          name: "Create",
          description: "Create a new employee",
          link: "/create-employee",
          color: "bg-green-300 dark:bg-green-700",
          icon: <PlusCircleIcon />,
        },
        {
          name: "Manage",
          description: "Manage employees",
          link: "/manage-employees",
          color: "bg-blue-300 dark:bg-blue-700",
          icon: <ListBulletIcon />,
        },
        {
          name: "Archive",
          description: "Manage all archived employees",
          link: "/archive-employees",
          color: "bg-red-300 dark:bg-red-700",
          icon: <ReceiptRefundIcon />,
        },
      ],
    },
    {
      name: "Company",
      subLinks: [
        {
          name: "Paperwork",
          description: "Manage documents and consents",
          link: "/company-paperwork",
          color: "bg-teal-300 dark:bg-teal-700",
          icon: <DocumentTextIcon />,
        },
        {
          name: "Licenses",
          description: "Manage your software licenses and subscriptions",
          link: "/company-licenses",
          color: "bg-pink-300 dark:bg-pink-700",
          icon: <CommandLineIcon />,
        },
        {
          name: "Jira tickets",
          description: "Create and edit your Jira tickets",
          link: "/company-jira-tickets",
          color: "bg-sky-300 dark:bg-sky-700",
          icon: <TicketIcon />,
        },
        {
          name: "Perks and benefits",
          description: "Manage your company perks and benefits",
          link: "/company-perks-and-benefits",
          color: "bg-green-300 dark:bg-green-700",
          icon: <GiftIcon />,
        },
        {
          name: "Referrals and rewards",
          description: "Manage your company referrals and rewards",
          link: "/company-referrals-and-rewards",
          color: "bg-red-300 dark:bg-red-700",
          icon: <HeartIcon />,
        },
      ],
      extraLinks: [
        {
          name: "Company details",
          link: "/company-details",
        },
        {
          name: "Company structure",
          link: "/company-structure",
        },
        {
          name: "Company blog",
          link: "/company-blog",
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
            <SubLinksBox
              subLinks={link.subLinks}
              extraLinks={link.extraLinks}
            />
          </div>
        </div>
      ))}
    </ul>
  );
};
