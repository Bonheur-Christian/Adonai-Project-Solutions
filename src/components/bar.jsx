import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

function Bar() {
  const [open, setOpen] = useState(false);

  const Links = [
    { link: "Home", dest: "/" },
    { link: "About", dest: "/about" },
    { link: "WhyAPS?", dest: "/whyus" },
    { link: "Services", dest: "/services" },
    { link: "News", dest: "/news" },
    { link: "Contacts", dest: "/contacts" },
  ];

  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="lg:p-4 md:p-4 sm:p-2  z-1 transition-all duration-300 dark:text-dark bg-transparent">
      <nav className="flex justify-between lg:px-12 sm:px-2 w-[75vw] ">
        <div>
          <img
            src="svg/logo.svg"
            alt="aps"
            id="aps"
            className="sm:w-1/6 sm:h-1/2 lg:w-1/12 lg:h-1/3"
          />
          <label htmlFor="aps" className="text-blue-700 font-bold text-2xl">
            Adonai Project Solutions
          </label>
        </div>
        <div className="flex sm:flex-col-reverse lg:flex-row sm:justify-center relative">
          <ul
            className={`${
              open
                ? "bg-white sm:px-12 sm:py-4 w-[100vw] h-screen z-50 mt-20"
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
          </ul>
        </div>
        <div className="sm:block lg:hidden sm:pb-6" onClick={toggleMenu}>
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

export default Bar;
