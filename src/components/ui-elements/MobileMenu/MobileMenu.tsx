import { MenuLinks } from "./interfaces";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";

interface MobileMenuProps {
  menuLinks: MenuLinks[];
}

export const MobileMenu = ({ menuLinks }: MobileMenuProps) => {
  const [expandedLinkId, setExpandedLinkId] = useState<number | null>(null);

  const onMenuItemClick = (index: number) => {
    if (expandedLinkId === index) {
      setExpandedLinkId(null);
    } else {
      setExpandedLinkId(index);
    }
  };

  return (
    <div className="absolute w-[calc(100vw-2.5em)] h-[calc(100vh-6em)] top-20 left-5 rounded-lg bg-slate-50 dark:bg-gray-900 shadow-[rgba(0,_0,_0,_0.24)_0px_0px_40px] shadow-slate-400 dark:shadow-slate-700">
      <div className="flex flex-col h-[calc(100%-4em)] m-8 overflow-auto">
        <ul>
          {menuLinks.map((link, index) => (
            <div className="relative group" key={link.name}>
              <li
                className="px-3 py-4 font-semibold rounded-lg cursor-pointer lg:px-4"
                onClick={() => onMenuItemClick(index)}
              >
                <div className="flex justify-between text-gray-800 dark:text-gray-200">
                  <p className="text-xl font-bold">{link.name}</p>
                  <div className="w-8 h-8 p-1">
                    {expandedLinkId === index ? (
                      <ChevronUpIcon />
                    ) : (
                      <ChevronDownIcon />
                    )}
                  </div>
                </div>
                {expandedLinkId === index && (
                  <div className="w-full h-full">
                    <ul className="mt-4">
                      {link.subLinks.map((subLink) => (
                        <li
                          className=" pl-1 py-4 font-semibold text-gray-800 rounded-lg cursor-pointer lg:px-4 dark:text-gray-200"
                          key={subLink.name}
                        >
                          <Link to={subLink.link} className="flex items-center">
                            <div className="w-10 h-10 p-1">{subLink.icon}</div>
                            <div className="flex flex-col ml-5">
                              <p className="font-bold">{subLink.name}</p>
                              <p className="text-xs text-gray-500">
                                {subLink.description}
                              </p>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
