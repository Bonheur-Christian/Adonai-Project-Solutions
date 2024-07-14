import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
    { link: "Projects", dest: "/" },
  ];

  return (
    <div>
        <div className="flex justify-evenly py-12 bg-[#D9D9D9]">
          <div className="py-12">
            <h1 className="text-xl font-lato">LOGO</h1>
            <div className="flex gap-2">
              <FaFacebook />
              <FaInstagram />
              <FaXTwitter />
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
        <div className="bg-[#979797]">
            <p className="text-xl text-white text-center py-4">@copyright APL 2024. All rights reserved </p>
        </div>
    </div>
  );
}

export default Footer;
