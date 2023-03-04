import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const HamburgerButton = ({ isOpen, onClick }: HamburgerButtonProps) => {
  return (
    <button
      className="flex items-center justify-center w-10 h-10 p-2 font-semibold rounded-lg cursor-pointer text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
      onClick={onClick}
    >
      {isOpen ? <XMarkIcon /> : <Bars3Icon />}
    </button>
  );
};
