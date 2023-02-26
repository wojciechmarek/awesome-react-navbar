import { HomeIcon } from "@heroicons/react/24/outline";

export const MenuLinks = () => {
  const links = [
    {
      name: "Work",
      sublinks: [
        {
          name: "Log time",
          link: "/log-time",
          icon: <HomeIcon />,
        },
        {
          name: "Vacation",
          link: "/vacation",
          icon: <HomeIcon />,
        },
        {
          name: "Invoices",
          link: "/invoices",
          icon: <HomeIcon />,
        },
      ],
    },
    {
      name: "Home",
      sublinks: [
        {
          name: "Home 1",
          link: "/home-1",
          icon: <HomeIcon />,
        },
        {
          name: "Home 2",
          link: "/home-2",
          icon: <HomeIcon />,
        },
        {
          name: "Home 3",
          link: "/home-3",
          icon: <HomeIcon />,
        },
      ],
    },
  ];
  return (
    <ul className="flex gap-10">
      {links.map((link) => (
        <div className="relative group" key={link.name}>
          <li className="text-gray-500 dark:text-gray-100 hover:text-gray-700 font-semibold cursor-pointer">
            {link.name}
          </li>
          <div className="h-fit w-60 absolute bg-gray-50 shadow-xl shadow-gray-400 shad hidden group-hover:block">
            <ul className="flex flex-col gap-2">
              {link.sublinks.map((sublink) => (
                <li
                  key={sublink.name}
                  className="text-gray-800 dark:text-gray-100 font-semibold"
                >
                  {sublink.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </ul>
  );
};
