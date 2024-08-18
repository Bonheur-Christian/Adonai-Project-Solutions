import { useEffect, useState } from "react";
import LandingPageBar from "../components/LandingPageBar";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import Footer from "../components/Footer";
import { MdEmail } from "react-icons/md";
import Bar from "../components/bar";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Dropdown from "../components/DropDown";
import { API_url } from "../constants";
import client from "../sanityClient";

function Services() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesList, setServicesList] = useState([]);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 140) {
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
    fetchServices();
  }, []);

  const fetchServices = () => {
    client
      .fetch(
        `*[_type=="service"] | order(priority asc){
 _id, 
  name, 
  description,
  priority,
  image{
  asset->{
  _id,
  url
  }
  }
  }`
      )
      .then((data) => {
        setServicesList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div overflow-x-hidden>
      {scrolled && <LandingPageBar />}
      <div className="bg-[url('/images/header.png')] h-[10rem] md:h-[15rem] bg-cover bg-center bg-no-repeat dark:text-black">
        <Bar />
        <div className="flex items-center justify-end px-6 md:px-24">
          <h1 className="text-right text-[#424242] font-bold text-2xl md:text-3xl lg:text-5xl">
            Services ....
          </h1>
        </div>
      </div>
      <div className="flex sm:flex-col-reverse md:justify-between md:flex-row">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2 sm:w-full md:pr-6 mb-8 md:mb-0 lg:pt-40 sm:pt-16 sm:space-y-12 lg:space-y-6  lg:pl-32 sm:pl-6"
        >
          <h1 className="font-semibold text-[#B4A9A9] tracking-widest lg:text-2xl sm:text-xl mb-4 sm:text-center lg:text-start">
            VERSATILE. PROACTIVE.EXPERIENCED.
          </h1>
          <h1 className="font-bold lg:text-4xl sm:text-2xl mb-4 lg:w-1/2 sm:w-full tracking-wider lg:text-start sm:text-center">
            Aps Services
          </h1>
          <p className="mb-6 lg:text-xl sm:text-md font-lato lg:w-[40vw] sm:w-full sm:pe-2 lg:px-0">
            Our team understands the importance of shared knowledge and believes
            that all things must work together to create a cohesive and
            functional finished product.
          </p>
          <p className="mb-8 lg:text-xl sm:text-md font-lato lg:w-[40vw] sm:w-full">
            Explore Aps capabilities below to learn more about what our team can
            offer in each sector.
          </p>
        </motion.div>
        <div className="sm:hidden lg:block">
          <img
            src="svg/services.svg"
            alt="aboutUs"
            className="rounded-lg max-w-full h-auto sm:p-6"
          />
        </div>
      </div>
      <Dropdown title={"Services List"} content={servicesList} />
      <div className="flex flex-wrap  justify-evenly py-24">
        {servicesList.map((item, index) => (
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            key={index}
            className="lg:w-[40vw] sm:w-full sm:px-6"
          >
            <img
              src={item.image.asset.url}
              alt="property showcasing"
              className="w-32 h-32 rounded-full object-cover hover:shadow-gray-400 shadow-md"
            />
            <h1 className="lg:text-2xl sm:text-lg  pb-6 text-[#1971F4]">
              {item.name}
            </h1>
            <p className="font-lato lg:text-lg sm:text-md  lg:w-[30vw] sm:w-full pb-6">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="sm:py-12 lg:py-0">
        <h2 className="font-lato text-xl text-center">
          Want To Discuss Project?
        </h2>
        <div className="flex justify-center">
          <img src="svg/downArrow.svg" alt="" className="w-auto h-auto" />
        </div>
        <div className="w-full bg-blue-700 flex justify-center items-center gap-4 text-2xl text-white py-4">
          <p>Reach Out To Our Team. </p>
          <MdEmail />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
