import { assets } from "@/assets/assets";
import ThemeContext from "@/contexts/themeContext";
import { useContext, useEffect, useRef, useState } from "react";
import LazyImage from "@/components/LazyImage";

const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const sideMenuRef = useRef(null);
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <>
      <div className="dark:hidden -z-10 w-full h-[91.69px] overflow-hidden fixed top-0 right-0">
        <LazyImage src={assets.bg} alt="" className="w-full rotate-180" />
      </div>
      <nav
        className={`w-full fixed top-0 left-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? "bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-dark-theme dark:shadow-white/20" : ""
        }}`}
      >
        <a href="#top">
          <LazyImage
            src={assets.logo}
            alt=""
            className="w-28 cursor-pointer mr-14"
          />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          <li>
            <a className="font-Ovo!" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo!" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo!" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo!" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo!" href="#contact">
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode(prev => !prev)}>
            <LazyImage src={isDarkMode ? assets.sun : assets.moon} alt="" className="w-6" />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo! dark:border-white/50"
          >
            Contact
            <LazyImage
              src={isDarkMode ? assets.arrow_up_dark : assets.arrow_up_light}
              alt=""
              className="w-3 rotate-45"
            />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <LazyImage src={isDarkMode ? assets.menu_dark : assets.menu} alt="" className="w-6" />
          </button>
        </div>

        {/* mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-dark-hover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <LazyImage src={isDarkMode ? assets.close_dark : assets.close} alt="" className="w-5 cursor-pointer" />
          </div>
          <li>
            <a className="font-Ovo!" onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo!" onClick={closeMenu} href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo!" onClick={closeMenu} href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo!" onClick={closeMenu} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo!" onClick={closeMenu} href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
