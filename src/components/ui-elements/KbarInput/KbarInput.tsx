import { useKBar } from "kbar";

export const KbarInput = () => {
  const { query } = useKBar();

  const onClick = () => {
    query.toggle();
  };

  return (
    <button
      onClick={onClick}
      className="w-36 h-8 border-[1px] bg-transparent border-gray-400 dark:border-gray-700 rounded-lg text-gray-500 dark:text-gray-600 px-3 flex justify-between items-center"
    >
      Search...
      <span>⌘K</span>
    </button>
  );
};
