import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

function LandingPageBar() {
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
    <div
      className={`lg:p-4 md:p-4 sm:p-2 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white dark:bg-gray-800 fixed top-0  w-full font-semibold"
          : "lg:bg-transparent sm:bg-white fixed top-0 w-full  text-blue-700 font-semibold"
      }`}
    >
      <nav className="flex justify-between lg:px-12 sm:px-2 sticky top-0 lg:w-[50vw] sm:w-full">
        <div>
          <img
            src="svg/logo.svg"
            alt="aps"
            id="aps"
            className="sm:w-1/4 sm:h-1/2 lg:w-1/12 lg:h-1/3"
          />
          <label
            htmlFor="aps"
            className="text-blue-900 font-bold lg:text-2xl sm:text-lg"
          >
            Adonai Project Solutions
          </label>
        </div>
        <div className="flex sm:flex-col-reverse lg:flex-row sm:justify-center lg:justify-between relative">
          <ul
            className={`${
              open
                ? "bg-white sm:px-4 sm:ms-[-4rem] sm:py-4 w-[100vw] h-screen z-50"
                : "hidden duration-1000"
            } lg:flex lg:space-x-12 sm:space-y-4 lg:space-y-0 md:space-y-4 sm:top-[10vh] lg:top-5 absolute`}
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
