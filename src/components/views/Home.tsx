import { useState } from "react";

export const Home = () => {
  const onChangeThemeClick = () => {
    // setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <main className="bg-white dark:bg-slate-800 h-[calc(100vh-4.5em)] flex flex-col justify-center items-center">
      <h1 className="font-bold text-gray-900 dark:text-white text-center text-5xl">
        Home
      </h1>
      <button
        onClick={onChangeThemeClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
      >
        Change Theme
      </button>
    </main>
  );
};
