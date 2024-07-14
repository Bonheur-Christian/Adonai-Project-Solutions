import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";

function LandingPageBar() {
  const [theme, setheme] = useState("light");

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
  return (
    <div className="p-4 sticky top-0 bg-white dark:bg-black dark:text-white dark:border-b-3 border-white z-10">
      <nav className="flex justify-between py-6 px-12">
        <div>LOGO</div>
        <ul className="flex space-x-12 ">
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
      </nav>
    </div>
  );
}

export default LandingPageBar;
