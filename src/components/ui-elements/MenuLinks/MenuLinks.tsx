import { MenuLinksProps } from "./interfaces";
import { SubLinksBox } from "./LinkSubItems";

export const MenuLinks = ({ menuLinks }: MenuLinksProps) => {
  return (
    <ul className="flex px-4">
      {menuLinks.map((link) => (
        <div className="relative group" key={link.name}>
          <li className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 font-semibold cursor-pointer py-2 px-4 rounded-lg">
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
