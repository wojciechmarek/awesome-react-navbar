import { MenuLinksProps } from "./interfaces";
import { SubLinksBox } from "./LinkSubItems";

export const MenuLinks = ({ menuLinks }: MenuLinksProps) => {
  return (
    <ul className="flex px-1 lg:px-4">
      {menuLinks.map((link) => (
        <div className="relative group" key={link.name}>
          <li className="p-2 font-semibold rounded-lg cursor-pointer lg:px-4 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800">
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
