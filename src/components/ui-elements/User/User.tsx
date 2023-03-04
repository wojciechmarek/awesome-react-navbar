import {
  IdentificationIcon,
  SunIcon,
  MoonIcon,
  AdjustmentsVerticalIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const User = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const items = [
    {
      title: "Profile",
      icon: <IdentificationIcon />,
      color: "bg-indigo-300 dark:bg-indigo-800",
      onclick: () => {},
    },
    {
      title: theme === "light" ? "Dark theme" : "Light theme",
      icon: theme === "light" ? <MoonIcon /> : <SunIcon />,
      color: "bg-teal-300 dark:bg-teal-800",
      onclick: () => onChangeThemeClick(),
    },
    {
      title: "Settings",
      icon: <AdjustmentsVerticalIcon />,
      color: "bg-fuchsia-300 dark:bg-fuchsia-800",
      onclick: () => {},
    },
    {
      title: "Logout",
      icon: <ExclamationCircleIcon />,
      color: "bg-red-300 dark:bg-red-800",
      onclick: () => {},
    },
  ];

  const onChangeThemeClick = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  };

  return (
    <div className="relative group">
      <div className="flex items-center h-10 gap-3 rounded-lg cursor-pointer w-fit hover:bg-slate-200 dark:hover:bg-slate-800">
        <img
          src="https://avatars.githubusercontent.com/u/10384315?v=4"
          className="my-auto ml-3 rounded-full w-7 h-7"
        />
        <p className="mr-3 font-bold text-gray-800 dark:text-gray-200">
          Andrew
        </p>
      </div>
      <ul className="absolute w-72 p-2 bg-slate-50 dark:bg-gray-900 shadow-[rgba(0,_0,_0,_0.24)_0px_0px_40px] shadow-slate-400 dark:shadow-slate-700 hidden md:group-hover:flex flex-col -left-[8em] rounded-xl ">
        {items.map((item) => (
          <li
            key={item.title}
            className="flex items-center justify-start h-16 font-bold cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl"
            onClick={item.onclick}
          >
            <div
              className={`h-10 w-10 ml-5 flex items-center justify-center rounded-lg ${item.color}`}
            >
              <div className="w-3/5 text-gray-800 h-3/5 dark:text-gray-200">
                {item.icon}
              </div>
            </div>
            <p className="ml-5 text-gray-600 dark:text-gray-200">
              {item.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;
