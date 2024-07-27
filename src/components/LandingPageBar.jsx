import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { IconButton, Drawer, List, ListItem } from "@mui/material";

function LandingPageBar() {
  const [theme, setTheme] = useState("light");
  const [drawerOpen, setDrawerOpen] = useState(false);
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
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
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
    <nav
      className={`flex items-center p-4 justify-between px-10 text-black bg-transparent dark:text-white lg:px-36 sticky top-0 z-50  ${
        scrolled ? "bg-white dark:bg-gray-800" : "bg-transparent"
      }`}
    >
      <img src="svg/logo.svg" alt="Logo" width={90} height={10} />

      {/* For larger devices */}
      <div className="hidden md:flex justify-center items-center">
        <div className="p-2 space-x-7 text-center items-center justify-center flex rounded-full px-5">
          {Links.map((link, index) => (
            <li key={index} style={{ listStyleType: "none" }}>
              <a href={link.dest} className="font-lato underline-animation">
                {link.link}
              </a>
            </li>
          ))}
        </div>
        {theme === "dark" ? (
          <FaSun onClick={handleThemeSwitch} className="cursor-pointer" />
        ) : (
          <FaMoon onClick={handleThemeSwitch} className="cursor-pointer" />
        )}
      </div>

      {/* For smaller devices */}
      <div className="block md:hidden">
        <div className="flex items-center space-x-4">
          {theme === "dark" ? (
            <FaSun onClick={handleThemeSwitch} />
          ) : (
            <FaMoon onClick={handleThemeSwitch} />
          )}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
          >
            <IoMdMenu className="text-4xl" />
          </IconButton>
        </div>
        <Drawer
  anchor="right"
  open={drawerOpen}
  onClose={() => setDrawerOpen(false)}
  PaperProps={{
    style: {
      width: "75%",
      padding: "20px",
      boxShadow: "none",
    },
    className: "bg-white dark:bg-black"
  }}
>
          <div
            onClick={() => setDrawerOpen(false)}
            className="flex text-2xl justify-end font-bold cursor-pointer"
          >
            <IoCloseSharp className="text-black dark:text-white" />
          </div>
          <List>
            {Links.map((link, index) => (
              <ListItem key={index} button onClick={() => setDrawerOpen(false)}>
                <a
                  href={link.dest}
                  className="font-lato text-black dark:text-white underline-animation"
                >
                  {link.link}
                </a>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    </nav>
  );
}

export default LandingPageBar;
