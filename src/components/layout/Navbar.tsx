import { CompanyLogo, KbarInput, MenuLinks } from "../ui-elements";
import User from "../ui-elements/User/User";
import { navigationLinks } from "./navigation-links";

export const Navbar = () => {
  return (
    <nav className="bg-gray-50 dark:bg-gray-900 px-2 sm:px-4 h-16 flex items-center m-0">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div className="flex justify-center gap-8 items-center">
          <CompanyLogo />
          <MenuLinks menuLinks={navigationLinks} />
        </div>
        <div className="flex items-center justify-center gap-4">
          <KbarInput />
          <User />
        </div>
      </div>
    </nav>
  );
};
