import { useContext } from "react";
import { assets } from "@/assets/assets";
import ThemeContext from "@/contexts/themeContext";
import LazyImage from "@/components/LazyImage";

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className="mt-20">
      <div className="text-center">
        <LazyImage src={assets.logo} alt="footer" className="w-36 mx-auto mb-2" />
        <div className="w-max flex items-center gap-2 mx-auto">
          <LazyImage
            src={isDarkMode ? assets.email_dark : assets.email}
            alt=""
            className="w-6"
          />
          chensxyouxiang@163.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>©2025 ChenS-X. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/ChenS-X">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/ChenS-X">
              掘金
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/ChenS-X">
              CSDN
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
