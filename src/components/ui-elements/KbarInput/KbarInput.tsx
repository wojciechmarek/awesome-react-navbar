import { useKBar } from "kbar";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export const KbarInput = () => {
  const { query } = useKBar();

  const onClick = () => {
    query.toggle();
  };

  return (
    <button
      onClick={onClick}
      className="w-10 lg:w-36 h-10 border-[1px] bg-transparent rounded-lg font-medium border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300  hover:bg-slate-200 dark:hover:bg-slate-800"
    >
      <div className="items-center justify-between hidden px-3 lg:flex">
        Search...
        <span>⌘K</span>
      </div>
      <div className="flex justify-center w-10 h-10 p-2 lg:hidden">
        <MagnifyingGlassIcon />
      </div>
    </button>
  );
};
