import { MenuLinksProps } from "./interfaces";
import { SubLinksBox } from "./LinkSubItems";

interface MobileMenuProps {}

export const MobileMenu = ({}: MobileMenuProps) => {
  return (
    <div className="absolute w-[calc(100vw-2.5em)] h-[calc(100vh-6em)] top-20 left-5 rounded-lg bg-slate-50 dark:bg-gray-900 shadow-[rgba(0,_0,_0,_0.24)_0px_0px_40px] shadow-slate-400 dark:shadow-slate-700">
      <div className="flex flex-col items-center justify-center h-full">
        <p>Mobile menu - coming soon...</p>
      </div>
    </div>
  );
};
