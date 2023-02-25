import { useKBar } from "kbar";

export const KbarInput = () => {
  const { query } = useKBar();

  const onClick = () => {
    query.toggle();
  };

  return (
    <button
      onClick={onClick}
      className="w-36 h-10 border-[1px] bg-transparent border-gray-600 rounded-lg text-gray-400 px-3 flex justify-between items-center"
    >
      Search...
      <span>⌘K</span>
    </button>
  );
};
