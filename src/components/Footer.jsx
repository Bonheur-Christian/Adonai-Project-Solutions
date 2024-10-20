import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";

function Footer() {
  const QuickLinks = [
    { link: "Home", dest: "/" },
    { link: "About", dest: "/about" },
    { link: "Services", dest: "/services" },
    { link: "Contacts", dest: "/contacts" },
  ];
  const Services = [
    { link: "Construction", dest: "/services" },
    { link: "Survey", dest: "/services" },
    { link: "Architecture", dest: "/services" },
    { link: "Property", dest: "/services" },
  ];

  const AboutUS = [
    { link: "Why Us?", dest: "/whyus" },
    { link: "News", dest: "/news" },
  ];
  const ContactUS = [
    { link: " Reach Us", dest: "/contacts" },
    { link: "Projects", dest: "/#projects" },
  ];

  return (
    <div>
      <div className="flex lg:flex-row md:flex-row md:flex-wrap sm:flex-col sm:mx-auto lg:mx-0 sm:justify-center sm:items-center sm:space-y-6 md:space-y-0 lg:justify-evenly md:justify-evenly lg:py-20 bg-[#D9D9D9] dark:bg-gray-700 sm:flex-wrap">
        <div className="py-6">
          <div className="pb-4">
            <img src="svg/logo.svg" alt="logo" width={90} height={20} />
          </div>
          <div className="flex gap-4">
            <FaFacebook size={30} color="blue" />
            <FaInstagram size={30} color="purple" />
            <FaXTwitter size={30} color="dark" />
          </div>
        </div>
        <div>
          <h1 className="text-xl font-lato font-semibold">Quick Links</h1>
          <ul className="space-y-2 text-lg font-lato">
            {QuickLinks.map((item, index) => (
              <li key={index}>
                <a href={item.dest}>{item.link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-lato font-semibold">Services</h1>
          <ul className="space-y-2 text-lg font-lato">
            {Services.map((item, index) => (
              <li key={index}>
                <a href={item.dest}>{item.link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-lato font-semibold">About Us</h1>
          <ul className="space-y-2 text-lg font-lato">
            {AboutUS.map((item, index) => (
              <li key={index}>
                <a href={item.dest}>{item.link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-lato font-semibold">Contact Us</h1>
          <ul className="space-y-2 text-lg font-lato">
            {ContactUS.map((item, index) => (
              <li key={index}>
                <a href={item.dest}>{item.link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-[#a0a0a0]">
        <p className="text-xl text-white text-center py-4 sm:px-6">
          @copyright APL 2024. All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
