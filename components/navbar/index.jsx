import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MenuButton } from "./menu-button";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const wrapperRef = useRef(null);

  const onMenuClick = () => {
    setIsMenuOpen((v) => !v);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <nav className="sticky top-0 z-50 mt-2 bg-white py-2.5 text-darkBlue md:mt-4">
      <div className="container mx-auto flex items-center justify-between px-8">
        <Link href="/" className="flex items-center">
          <span className="cursor-pointer self-center whitespace-nowrap text-base font-medium text-black">
            Robin.
          </span>
        </Link>

        <div ref={wrapperRef}>
          <MenuButton onMenuClick={onMenuClick} />

          <div
            className={`relative w-auto md:block md:w-auto ${
              isMenuOpen ? "visible" : "hidden"
            }`}
          >
            <ul className="border-gray-100 absolute right-0 -top-3 mr-3 mt-4 flex w-72 flex-col rounded-lg border bg-white p-4 md:static md:w-auto md:flex-row md:space-x-8 md:border-0 md:bg-white md:pt-1 md:text-sm md:font-medium">
              <li>
                <Link
                  href="/projects"
                  className="text-gray-700 hover:bg-gray-100 block rounded py-2 pr-4 pl-3 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-primary"
                >
                  <span onClick={onMenuClick}>Projects</span>
                </Link>
              </li>
              <li>
                <a
                  href="https://blog.robie.dev"
                  target="_blank"
                  rel="noreferrer"
                  onClick={onMenuClick}
                  className="text-gray-700 hover:bg-gray-100 block rounded py-2 pr-4 pl-3 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-primary"
                >
                  Writing
                </a>
              </li>
              <li>
                <Link
                  href="/about-me"
                  className="text-gray-700 hover:bg-gray-100 block rounded py-2 pr-4 pl-3 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-primary"
                >
                  <span onClick={onMenuClick}>About me</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
