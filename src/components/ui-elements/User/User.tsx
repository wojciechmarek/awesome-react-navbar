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
      onclick: () => {},
    },
    {
      title: theme === "light" ? "Dark Mode" : "Light Mode",
      icon: theme === "light" ? <MoonIcon /> : <SunIcon />,
      onclick: () => onChangeThemeClick(),
    },
    {
      title: "Settings",
      icon: <AdjustmentsVerticalIcon />,
      onclick: () => {},
    },
    {
      title: "Logout",
      icon: <ExclamationCircleIcon />,
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
      <div className="flex gap-3 rounded items-center w-fit hover:bg-slate-800 cursor-pointer">
        <img
          src="https://avatars.githubusercontent.com/u/10384315?v=4"
          className="w-8 h-8 rounded-full my-2 ml-3"
        />
        <p className="text-gray-800 dark:text-gray-200 font-bold mr-3">
          Andrew
        </p>
      </div>
      <ul className="absolute w-60 h-fit bg-slate-300 dark:bg-slate-700 hidden group-hover:flex flex-col -left-[6em] rounded">
        {items.map((item) => (
          <li
            key={item.title}
            className="h-16 m-1 hover:bg-gray-500 rounded flex items-center justify-start cursor-pointer font-bold"
            onClick={item.onclick}
          >
            <div className="h-8 w-8 ml-5 flex items-center justify-center bg-cyan-200 dark:bg-cyan-800  rounded-lg">
              <div className="h-4/5 w-4/5 text-gray-800 dark:text-gray-200">
                {item.icon}
              </div>
            </div>
            <p className="ml-5">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;
