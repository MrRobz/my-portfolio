import { useState } from "react";
import { MenuButton } from "./menu-button";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onMenuClick = () => {
    setIsMenuOpen((v) => !v);
  };

  return (
    <nav className="mt-2 bg-white px-8 py-2.5 text-darkBlue md:mt-4">
      <div className="container mx-auto flex items-center  justify-between">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 hidden h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-base font-medium text-black">
            Robin.
          </span>
        </a>

        <div>
          <MenuButton onMenuClick={onMenuClick} />

          <div
            className={`relative w-auto md:block md:w-auto ${
              isMenuOpen ? "visible" : "hidden"
            }`}
          >
            <ul className="absolute right-0 -top-3 mr-3 mt-4 flex w-72 flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 md:static md:w-auto md:flex-row md:space-x-8 md:border-0 md:bg-white md:pt-1 md:text-sm md:font-medium">
              <li>
                <a
                  href="#"
                  className="block rounded py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
                >
                  Writing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
                >
                  About me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
