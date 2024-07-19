import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

function Bar() {
  const [theme, setheme] = useState("light");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setheme(theme === "dark" ? "light" : "dark");
  };
  const Links = [
    { link: "Home", dest: "/" },
    { link: "About", dest: "/about" },
    { link: "Why APS?", dest: "/whyus" },
    { link: "Services", dest: "/services" },
    { link: "News", dest: "/news" },
    { link: "Contacts", dest: "/contacts" },
  ];

  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="lg:p-4 md:p-4 sm:p-2  z-10 transition-all duration-300 dark:text-white bg-transparent sticky">
      <nav className="flex justify-between py- px-12 sticky top-0">
        <div>
          <img src="svg/logo.svg" alt="" width={90} height={10} />
        </div>
        <div className="flex sm:flex-col-reverse sm:justify-center">
          <ul
            className={`${
              open ? "block" : "hidden"
            } lg:flex lg:space-x-12  sm:space-y-4 lg:space-y-0 md:space-y-4 sm:top-[10vh] `}
          >
            {Links.map((link, index) => (
              <li key={index}>
                <a href={link.dest} className="font-lato underline-animation">
                  {link.link}
                </a>
              </li>
            ))}
            {theme === "dark" ? (
              <FaMoon onClick={handleThemeSwitch} />
            ) : (
              <IoIosSunny onClick={handleThemeSwitch} />
            )}
          </ul>
          <div className="sm:block lg:hidden sm:pb-6" onClick={toggleMenu}>
            {open ? (
              <IoCloseSharp className="text-4xl" />
            ) : (
              <IoMdMenu className="text-4xl" />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Bar;
