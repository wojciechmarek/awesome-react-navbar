import { useKBar } from "kbar";

export const KbarInput = () => {
  const { query } = useKBar();

  const onClick = () => {
    query.toggle();
  };

  return (
    <button
      onClick={onClick}
      className="w-36 h-10 border-[1px] bg-transparent rounded-lg font-medium border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300  hover:bg-slate-200 dark:hover:bg-slate-800 px-3 flex justify-between items-center"
    >
      Search...
      <span>⌘K</span>
    </button>
  );
};
