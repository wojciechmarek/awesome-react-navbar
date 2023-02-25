import { useState } from "react";

export const Home = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
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
    <main className="bg-slate-200 dark:bg-slate-800 h-[calc(100vh-4.5em)] flex flex-col justify-center items-center">
      <h1 className="font-bold text-gray-800 dark:text-gray-200 text-center text-5xl">
        Home
      </h1>
      <button
        onClick={onChangeThemeClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
      >
        Change Theme to: {theme === "light" ? "dark" : "light"}
      </button>
    </main>
  );
};
