export interface SubLinksBoxProps {
  subLinks: {
    name: string;
    description: string;
    link: string;
    color?: string;
    icon: JSX.Element;
  }[];
}

export const SubLinksBox = (props: SubLinksBoxProps) => {
  const { subLinks } = props;
  return (
    <ul className="absolute top-10 p-2 w-80 h-fit bg-slate-50 dark:bg-gray-900 shadow-[rgba(0,_0,_0,_0.24)_0px_0px_40px] shadow-slate-400 dark:shadow-gray-700 hidden group-hover:flex flex-col rounded-xl">
      {subLinks.map((subLink) => (
        <li
          key={subLink.name}
          className="h-16 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-xl flex items-center justify-start cursor-pointer font-bold"
        >
          <div
            className={`h-10 w-10 ml-5 flex items-center justify-center rounded-lg ${subLink.color}`}
          >
            <div className="h-3/5 w-3/5 text-gray-800 dark:text-gray-200">
              {subLink.icon}
            </div>
          </div>
          <div className="flex flex-col ml-5">
            <p className="text-gray-500 dark:text-gray-400">{subLink.name}</p>
            <p className="text-gray-500 dark:text-gray-400 text-xs">
              {subLink.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};
