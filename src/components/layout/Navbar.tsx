import { useState } from "react";
import {
  CompanyLogo,
  HamburgerButton,
  KbarInput,
  MenuLinks,
  MobileMenu,
} from "../ui-elements";
import User from "../ui-elements/User/User";
import { navigationLinks } from "./navigation-links";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center h-16 px-3 m-0 md:px-4 dark:bg-gray-900 bg-gray-50">
        <div className="flex items-center justify-between w-full md:mx-4 lg:mx-8 2xl:w-[80em] 2xl:mx-auto">
          <div className="flex items-center justify-center">
            <div className="md:hidden">
              <HamburgerButton
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
            <div className="hidden md:block">
              <CompanyLogo />
            </div>
            <div className="relative hidden ml-4 text-gray-600 top-[1px] md:block">
              <MenuLinks menuLinks={navigationLinks} />
            </div>
          </div>
          <div className="absolute block transform -translate-x-1/2 md:hidden left-1/2">
            <CompanyLogo />
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="hidden md:block">
              <KbarInput />
            </div>
            <User />
          </div>
        </div>
        <div className="md:hidden">{isMobileMenuOpen && <MobileMenu />}</div>
      </nav>
    </>
  );
};
