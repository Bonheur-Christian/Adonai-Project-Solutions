import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

function LandingPageBar() {
  const [theme, setheme] = useState("light");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
    { link: "Contacts", dest: "#contacts" },
  ];

  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <div
      className={`lg:p-4 md:p-4 sm:p-2  z-10 transition-all duration-500 dark:text-white sticky top-0 shadow-md ${
        scrolled
          ? "bg-white dark:bg-gray-800 sticky top"
          : "bg-transparent sticky top-0"
      }`}
    >
      <nav className="flex justify-between lg:px-12 sm:px-2 sticky top-0 w-[83vw] ">
        <div>
          <img src="svg/logo.svg" alt="" width={90} height={10} />
        </div>
        <div className="flex sm:flex-col-reverse lg:flex-row sm:justify-center relative">
          <ul
            className={`${
              open
                ? "bg-white sm:px-12 sm:py-4 w-[100vw] h-screen z-50"
                : "hidden duration-1000"
            } lg:flex lg:space-x-12  sm:space-y-4 lg:space-y-0 md:space-y-4 sm:top-[10vh] lg:top-6 absolute`}
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
        </div>
        <div
          className="sm:block lg:hidden sm:pb-6 sm:pt-4 "
          onClick={toggleMenu}
        >
          {open ? (
            <IoCloseSharp className="text-4xl" />
          ) : (
            <IoMdMenu className="text-4xl" />
          )}
        </div>
      </nav>
    </div>
  );
}

export default LandingPageBar;
