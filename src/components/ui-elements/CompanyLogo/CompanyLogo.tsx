import { Link } from "react-router-dom";

export const CompanyLogo = () => {
  return (
    <Link to="/" className="flex items-center">
      <span className="self-center text-xl font-bold text-gray-800 whitespace-nowrap dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400">
        My Company
      </span>
    </Link>
  );
};
